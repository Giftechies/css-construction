"use client";

import { IconRuler, IconHammer, IconBuilding, IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";
import { Mail } from "lucide-react";
import Link from "next/link";

const ContactUsForm = () => {
  // Define custom classes for primary color usage
  const PRIMARY_BG_LIGHT = "bg-primary/10"; 
  const PRIMARY_TEXT = "text-primary";       
  const PRIMARY_BG = "bg-primary";         
  const PRIMARY_BG_HOVER = "hover:bg-primary-dark"; 

  // --- NEW CONTACT DETAILS ---
  const CONTACT_INFO = [
    { 
      icon: IconMail, 
      title: "Email us", 
      email: "info@csserv.uk" 
    },
  
  ];
  // --- NEW ADDRESS AND PHONE ---
  const PHONE_NUMBER = "0208 574 6333"; 
  

  return (
    <section className="py-20 md:py-32 bg-gray-50" id="scrollPosition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="">
          <h2 className="h3  font-semibold text-gray-900 text-center   ">
            Ready to start? Let’s connect!
          </h2>
       
        </div>

        {/* Content Grid: Contact Info & Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information (Col 1/3) */}
          <div className="lg:col-span-1 space-y-10 lg:pt-4">
            
            {/* 1. Phone Number */}
            <div className="flex gap-4">
                <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shrink-0 shadow-sm`}>
                    <IconPhone stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        Call Our Office
                    </h4>
                    <Link
                        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                        className={`${PRIMARY_TEXT} font-medium hover:opacity-80 transition-colors duration-200`}
                    >
                        {PHONE_NUMBER}
                    </Link>
                </div>
            </div>

            {/* 2. Office Address */}
            <div className="flex gap-4">
                <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shrink-0 shadow-sm`}>
                    <IconMapPin stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        Visit Our Main Office
                    </h4>
                    <Link
      href="https://www.google.com/maps?q=GK+Depot,+Trout+Road,+West+Drayton,+UB7+7SN"
      target="_blank"              // 🆕 opens in new tab
      rel="noopener noreferrer"   // 🔐 security best practice
      className="flex gap-5 items-start text-left"
    >
      
      GK Depot, Trout Road, West Drayton, UB7 7SN
    </Link>
                </div>
            </div>

            {/* 3. Email Contacts */}
            {CONTACT_INFO.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon Circle uses PRIMARY_BG_LIGHT */}
                <div className={`w-fit rounded-xl ${PRIMARY_BG_LIGHT} p-4 shrink-0 shadow-sm`}>
                  {/* Icon uses PRIMARY_TEXT */}
                  <item.icon stroke={1.5} className={`size-8 ${PRIMARY_TEXT}`} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  {/* Email Link uses PRIMARY_TEXT */}
                  <Link
                    href={`mailto:${item.email}`}
                    className={`${PRIMARY_TEXT} font-medium hover:opacity-80 transition-colors duration-200`}
                  >
                    {item.email}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form (Col 2/3) */}
          <form className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100">
            
            {/* Name Fields */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                required
                className={`w-full bg-white px-5 py-3 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-primary focus:border-primary transition duration-150`}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className={`w-full bg-white px-5 py-3 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-primary focus:border-primary transition duration-150`}
              />
            </div>

            {/* Contact Fields */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email Address"
                required
                className={`w-full bg-white px-5 py-3 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-primary focus:border-primary transition duration-150`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full bg-white px-5 py-3 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-primary focus:border-primary transition duration-150`}
              />
            </div>
            
            {/* Message Field */}
            <textarea
              placeholder="Tell us about your project or question..."
              required
              className={`w-full bg-white px-5 py-4 border border-gray-300 rounded-lg placeholder:text-gray-500 focus:ring-primary focus:border-primary outline-none transition duration-150 resize-y`}
              rows={4}
            />

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className={`w-full px-8 py-4 text-lg font-bold rounded-xl text-white-1 ${PRIMARY_BG} ${PRIMARY_BG_HOVER} shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.005]`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;