"use client";
import { useSelector } from "react-redux";

export default function Address({ register, errors,moving }) {
  // const { address,movingAddress } = useSelector((state) => state.form);
  const Feildname = moving ==="from" ? "pickupAddress":"deliveryAddress";
  const currentAddress = moving ==="from" ? 'address' : 'movingAddress';

  return (
    <div className="address-form w-full">
      <h2 className="h2 ">Where are you moving {moving} ?</h2>
      <p className=" text-zinc-500">Please tell us the exact address you&apos;re moving {moving}</p>
      <div className="flex flex-col items-start gap-8">
        <input
          {...register(Feildname, { required: "Pickup address is required" })}
          defaultValue={currentAddress?.Feildname || ""}
          className="placeholder:m-text  bg-white-4 mt-6 w-[70%] px-5 py-3 placeholder:text-black-3"
          placeholder="Pickup address"
        />
        {errors[Feildname] && (
          <p className="text-red-500">{errors[Feildname].message}</p>
        )}
      </div>
    </div>
  );
}
