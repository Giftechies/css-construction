"use client"

import { cn } from "@/lib/utils";

export default function Collectionform({className}) {
  const submithandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data)); // Logs all form values
  };

  return (
    <form
      onSubmit={submithandler}
      className={cn("flex w-full flex-col gap-8 ",className)}
    >
      <h2 className=" h2 !text-primary    font-semibold "  >Request a Skip Pickup </h2>
      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            className="collectionInput"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            className="collectionInput"
            placeholder=" wick "
          />
        </div>
      </div>

      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            className="collectionInput"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phone"
            className="collectionInput"
            placeholder="547895461"
          />
        </div>
      </div>

      <div className="flex  flex-col gap-1">
        <label>Collection Address*</label>
        <textarea
          name="address"
          className="collectionInput min-h-[120px] "
          placeholder="collection address"
        ></textarea>
      </div>

      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>Post Code*</label>
          <input
            type="text"
            name="postcode"
            className="collectionInput"
            placeholder="4521"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Skip size*</label>
          <select name="skip_size" className="collectionInput">
            <option value="">--Select Skip size--</option>
            <option value="4 Yard Skip">4 Yard Skip</option>
            <option value="6 Yard Skip">6 Yard Skip</option>
            <option value="8 Yard Skip">8 Yard Skip</option>
            <option value="12 Yard Skip">12 Yard Skip</option>
            <option value="14 Yard Skip">14 Yard Skip</option>
            <option value="½ Mixed Load (8 Yard)">½ Mixed Load (8 Yard)</option>
            <option value="Full Mixed Load (16 Yard)">
              Full Mixed Load (16 Yard)
            </option>
          </select>
        </div>
      </div>

      <button type="submit" className="text-white-1 mt-4 rounded-xl bg-primary p-2">
        Submit
      </button>
    </form>
  );
}
