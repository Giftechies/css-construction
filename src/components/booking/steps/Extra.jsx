"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
// import { EXTRAS } from "@/components/booking/data/Extras";

export default function Extra  () {
   const EXTRAS = [
  { id: "cookers", label: "Cookers", price: 50 },
  { id: "rubber_tracks", label: "Rubber Tracks", price: 50 },
  { id: "gas_bottle", label: "Gas Bottle", price: 80 },
  { id: "mattress", label: "Mattress", price: 30 },
  { id: "small_tyre", label: "Small Tyre", price: 15 },
  { id: "large_tyre", label: "Large Tyre", price: 50 },
  { id: "small_fridge", label: "Small Fridge", price: 55 },
  { id: "paint_pots_empty", label: "Paint Pots (empty)", price: 0 },
  { id: "paint_pots_full", label: "Paint Pots (full size)", price: 30 },
  { id: "large_fridge", label: "Large Fridge", price: 80 },
  { id: "fire_extinguisher", label: "Fire Extinguisher", price: 25 },
  { id: "scrap_machine_track", label: "Scrap Machine Track", price: 175 },
  { id: "scrap_conveyors", label: "Scrap Conveyors belts", price: 150 },
  { id: "adhesive_tins", label: "Adhesive Tins or Tubes", price: 30 },
  { id: "tv", label: "TV", price: 55 },
  { id: "dishwasher", label: "Dishwasher", price: 45 },
  { id: "washing_machine", label: "Washing machine", price: 40 },
  { id: "microwave", label: "Microwave", price: 25 },
  { id: "armchair", label: "Armchair", price: 50 },
  { id: "sofa_two", label: "Two Seater Sofa", price: 75 },
  { id: "sofa_three", label: "Three Seater Sofa", price: 100 },
  { id: "footstools", label: "Footstools, Pouffes, Bean bags", price: 50 },
  { id: "pops_contaminated", label: "POPs Contaminated (Full load)", price: 250 },
];

  const { control, watch } = useFormContext();
  const selectedExtras = watch("extras") || {};

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 4: Add Restricted Items</h2>
      <p className="text-gray-600 mb-6">
        Select any restricted items you need to dispose of. Prices are charged per item ( + VAT ).
      </p>

      <Controller
        name="extras"
        control={control}
        defaultValue={{}}
        render={({ field: { value = {}, onChange } }) => {
          const handleToggle = (id, checked) => {
            if (!checked) {
              const updated = { ...value };
              delete updated[id];
              onChange(updated);
            } else {
              onChange({ ...value, [id]: 1 });
            }
          };

          const handleQuantityChange = (id, qty) => {
            if (qty < 1) {
              const updated = { ...value };
              delete updated[id];
              onChange(updated);
            } else {
              onChange({ ...value, [id]: qty });
            }
          };

          return (
            <div className="space-y-4 overflow-y-auto">
              {EXTRAS.map((extra) => (
                <div
                  key={extra.id}
                  className="flex items-center justify-between even:bg-white-1 bg-gray-100 border rounded-lg p-3"
                >
                  {/* Checkbox + Label */}
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={value?.[extra.id] > 0}
                      onChange={(e) => handleToggle(extra.id, e.target.checked)}
                    />
                    <span className="font-medium">
                      {extra.label}{" "}
                      <span className="text-gray-500">+ £{extra.price}</span>
                    </span>
                  </label>

                  {/* Quantity Controls */}
                  {value?.[extra.id] > 0 && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(extra.id, value[extra.id] - 1)
                        }
                        className="px-2  rounded bg-gray-300 text-white hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {value[extra.id]}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleQuantityChange(extra.id, value[extra.id] + 1)
                        }
                        className="px-2 rounded  bg-gray-300 text-white hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
};
