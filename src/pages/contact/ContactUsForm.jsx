"use client";

import { useState } from "react";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function ContactUsForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", data: form }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log("✅ Sent:", data);

      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const PRIMARY_BG_LIGHT = "bg-primary/10";
  const PRIMARY_TEXT = "text-primary";
  const PRIMARY_BG = "bg-primary";
  const PRIMARY_BG_HOVER = "hover:bg-primary-dark";

  const PHONE_NUMBER = "0208 574 6333";
  const CONTACT_INFO = [
    { icon: IconMail, title: "Email us", email: "info@csserv.uk" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="h3 font-semibold text-gray-900 text-center mb-12">
          Ready to start? Let’s connect!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10 lg:pt-4">
            <div className="flex gap-4">
              <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shadow-sm`}>
                <IconPhone stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1">
                  Call Our Office
                </h4>
                <Link
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className={` font-medium hover:opacity-80`}
                >
                  {PHONE_NUMBER}
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shadow-sm`}>
                <IconMapPin stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
              </div>
              <div>
                <h4 className="text-xl font-semibold  mb-1 text-primary">
                  Visit Our Main Office
                </h4>
                <Link
                  href="https://www.google.com/maps?q=GK+Depot,+Trout+Road,+West+Drayton,+UB7+7SN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left"
                >
                  GK Depot, Trout Road, West Drayton, UB7 7SN
                </Link>
              </div>
            </div>

            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shadow-sm`}>
                  <item.icon stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold  mb-1 text-primary ">
                    {item.title}
                  </h4>
                  <Link
                    href={`mailto:${item.email}`}
                    className={` font-medium hover:opacity-80`}
                  >
                    {item.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={submitHandler}
            className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="input bg-white px-5 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="input bg-white px-5 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="input bg-white px-5 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="input bg-white px-5 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project or question..."
              rows={4}
              required
              className="w-full bg-white px-5 py-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary resize-y"
            />

            {/* Status Feedback */}
            {status === "success" && (
              <p className="mt-4 text-green-600 font-medium">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-medium">❌ Failed to send message.</p>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 text-lg font-bold rounded-xl text-white-1 ${PRIMARY_BG} ${PRIMARY_BG_HOVER} shadow-md transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.01]"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
