import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInventory } from "@/app/store/reducers/formSlice";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.form.Inventory) || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Bedroom");

  // Dummy data
  const allItems = useMemo(
    () => [
      { id: 1, name: "King Mattress", category: "Bedroom" },
      { id: 2, name: "Double Mattress", category: "Bedroom" },
      { id: 3, name: "TV (Small)", category: "Lounge" },
      { id: 4, name: "TV (Medium)", category: "Lounge" },
      { id: 5, name: "Fridge", category: "Kitchen" },
    ],
    []
  );

  // Merge inventory with quantities
  const mergedItems = allItems.map((item) => ({
    ...item,
    quantity: inventory.find((inv) => inv.id === item.id)?.quantity || 0,
  }));

  // Category counts
  const categories = [...new Set(allItems.map((i) => i.category))].map((cat) => ({
    name: cat,
    count: mergedItems
      .filter((i) => i.category === cat)
      .reduce((sum, i) => sum + i.quantity, 0),
  }));

  // Filtered items
  const filteredItems = searchTerm
    ? mergedItems.filter((i) =>
        i.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mergedItems.filter((i) => i.category === activeCategory);

  // Update quantity
  const updateQuantity = (id, change) => {
    const updated = mergedItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    );
    dispatch(setInventory(updated.filter((i) => i.quantity > 0)));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full rounded-lg font-[16px]"
      />

      <div className="flex gap-4 mt-4">
        {/* Sidebar */}
        <div className="w-1/4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                fontWeight: activeCategory === cat.name ? "bold" : "normal",
                color: activeCategory === cat.name ? "gray" : "black",
                cursor: "pointer",
                margin: "8px 0",
              }}
            >
              {cat.name} {cat.count > 0 && `(${cat.count})`}
            </div>
          ))}
        </div>

        {/* Main list */}
        <div style={{ flex: 1 }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "8px 0",
              }}
            >
              <div>
                {item.name}
                {searchTerm && (
                  <span
                    style={{
                      marginLeft: "8px",
                      background: "#eee",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {item.category}
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {item.quantity > 0 && (
                  <>
                    <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                    <span style={{ margin: "0 6px" }}>{item.quantity}</span>
                  </>
                )}
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
