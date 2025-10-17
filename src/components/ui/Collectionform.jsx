"use client";

import { useState } from "react";
// import { cn } from "@/lib/utils";
import {cn} from "../../lib/resend"

export default function Collectionform({ className }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    skip_size: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  // ----------------------------
  // Input Handler
  // ----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ----------------------------
  // Form Submit Handler
  // ----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Basic validation
    if (!form.firstname || !form.email || !form.phone || !form.address) {
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "collection", data: form }),
      });

      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      console.log("✅ Form sent:", data);

      setStatus("success");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        skip_size: "",
      });
    } catch (err) {
      console.error("❌ Submit failed:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full flex-col gap-8", className)}
    >
      <h2 className="h2 !text-primary font-semibold">
        Request a Skip Pickup
      </h2>

      {/* Row 1 */}
      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>First Name*</label>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            placeholder="John"
            className="collectionInput"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            placeholder="Wick"
            className="collectionInput"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>Email Address*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@gmail.com"
            className="collectionInput"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="547895461"
            className="collectionInput"
            required
          />
        </div>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label>Collection Address*</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Collection address"
          className="collectionInput min-h-[120px]"
          required
        ></textarea>
      </div>

      {/* Row 3 */}
      <div className="collectionwrap">
        <div className="flex flex-col gap-1">
          <label>Post Code*</label>
          <input
            type="text"
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            placeholder="4521"
            className="collectionInput"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Skip size*</label>
          <select
            name="skip_size"
            value={form.skip_size}
            onChange={handleChange}
            className="collectionInput"
          >
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

      {/* Status Feedback */}
      {status === "success" && (
        <p className="text-green-600 font-medium">
          ✅ Request submitted successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">
          ❌ Please fill all required fields or try again later.
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`text-white mt-4 rounded-xl bg-primary p-3 font-semibold transition-all ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
