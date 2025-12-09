"use client";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExtraClient({ extras }) {
  const { control } = useFormContext();
  const [loading] = useState(!extras || extras.length === 0);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Step 4: Add Restricted Items</h2>
      <p className="mb-6 text-gray-600">
        Select any restricted items you need to dispose of. Prices are charged
        per item ( + VAT ).
      </p>

      <Controller
        name="extras"
        control={control}
        defaultValue={{}}
        render={({ field: { value = {}, onChange } }) => {
          const handleToggle = (extra, checked) => {
            if (!checked) {
              const updated = { ...value };
              delete updated[extra.label];
              onChange(updated);
            } else {
              onChange({
                ...value,
                [extra.label]: { qty: 1, price: extra.price },
              });
            }
          };

          const handleQuantityChange = (extra, qty) => {
            if (qty < 1) {
              const updated = { ...value };
              delete updated[extra.label];
              onChange(updated);
            } else {
              onChange({
                ...value,
                [extra.label]: { qty, price: extra.price },
              });
            }
          };

          return (
            <div
              data-lenis-prevent
              className="h-[25rem] space-y-4 overflow-y-scroll p-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-primary"
            >
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between w-full"
                    >
                      <Skeleton className=" w-4 " />
                      <Skeleton className="w-full" />
                      <Skeleton className="w-5" />
                    </div>
                  ))
                : extras.map((extra) => (
                    <div
                      key={extra.id}
                      className="flex items-center justify-between rounded-lg border bg-gray-100 p-3 even:bg-white-1"
                    >
                      {/* Checkbox + Label */}
                      <label className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={!!value?.[extra.label]}
                          onChange={(e) =>
                            handleToggle(extra, e.target.checked)
                          }
                        />
                        <span className="font-medium">
                          {extra.label}{" "}
                          <span className="text-gray-500">
                            + £{extra.price}
                          </span>
                        </span>
                      </label>

                      {/* Quantity Controls */}
                      {value?.[extra.label] && (
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityChange(
                                extra,
                                value[extra.label].qty - 1
                              )
                            }
                            className="rounded bg-gray-300 px-2 text-white-1 hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {value[extra.label].qty}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityChange(
                                extra,
                                value[extra.label].qty + 1
                              )
                            }
                            className="rounded bg-gray-300 px-2 text-white-1 hover:bg-gray-200"
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
}
