"use client";
import { useState, useEffect } from "react";
import { Home, Building2, School, Warehouse } from "lucide-react";

export default function Property({ register, errors, setValue, getValues }) {
  const propertyOptions = [
    { icon: <Home size={48} />, name: "Home" },
    { icon: <Building2 size={48} />, name: "Apartment" },
    { icon: <School size={48} />, name: "Townhouse" },
    { icon: <Warehouse size={48} />, name: "Storage" },
  ];

  const [selected, setSelected] = useState("");

  // On mount, set selected from form value if present
  useEffect(() => {
    const current = getValues ? getValues("property") : "";
    if (current) setSelected(current);
  }, [getValues]);

  const handleSelect = (name) => {
    setSelected(name);
    setValue("property", name, { shouldValidate: true });
    console.log("Selected property:", name); // Log the selected property
    
  };

  return (
    <div className="property-form w-full">
      <h2 className="h2 mb-4 col-span-4">Choose the property</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {propertyOptions.map((property, index) => (
          <label
            key={index}
            onClick={() => handleSelect(property.name)}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer
              ${
                selected === property.name
                  ? "bg-gray-500 text-white-1 border-gray-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
          >
            <div className="mb-2">{property.icon}</div>
            <span className="text-lg font-medium">{property.name}</span>
            <input
              type="radio"
              value={property.name}
              {...register("property", {
                required: "Please select a property type",
              })}
              className="hidden"
              checked={selected === property.name}
              readOnly
            />
          </label>
        ))}
      </div>

      {errors.property && (
        <p className="text-red-500 mt-2">{errors.property.message}</p>
      )}
    </div>
  );
}
