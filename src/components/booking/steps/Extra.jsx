"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { EXTRAS } from "@/components/booking/data/Extras";

export const Extra = () => {
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
