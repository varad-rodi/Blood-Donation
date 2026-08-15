import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContactMap() {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm h-full">

      <div className="relative h-[380px] bg-gray-100">

        <iframe
          title="BloodConnect Location"
          src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>

        {/* Location Card */}
        <div className="absolute bottom-3 left-3 right-3 bg-white rounded-lg shadow-lg p-3">

          <div className="flex gap-3 items-center">

            <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-sm font-bold">
                BloodConnect Headquarters
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Pune, Maharashtra 411001
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ContactMap;