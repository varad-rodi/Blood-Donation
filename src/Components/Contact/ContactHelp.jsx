import React from "react";
import {
  FaHeadphones,
  FaTint,
} from "react-icons/fa";

function ContactHelp() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-8">

      <div className="bg-red-50 border border-red-100 rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center text-xl shadow-sm">
            <FaHeadphones />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Need Immediate Help?
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              For urgent blood requests or emergencies, every second counts!
            </p>
          </div>

        </div>

        {/* Button */}
        <button className="border border-red-500 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition">
          <FaTint />
          Request Blood Now
        </button>

      </div>

    </section>
  );
}

export default ContactHelp;