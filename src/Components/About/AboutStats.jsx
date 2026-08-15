import React from "react";
import {
  FaUsers,
  FaTint,
  FaHospital,
  FaHeart,
} from "react-icons/fa";

function AboutStats() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-8">

      <div className="bg-red-50 border border-red-100 rounded-2xl p-6">

        <div className="grid grid-cols-2 md:grid-cols-4">

          <Stat
            icon={<FaUsers />}
            number="12,540+"
            text="Registered Donors"
          />

          <Stat
            icon={<FaTint />}
            number="3,214+"
            text="Blood Requests"
          />

          <Stat
            icon={<FaHospital />}
            number="1,250+"
            text="Hospitals"
          />

          <Stat
            icon={<FaHeart />}
            number="8,956+"
            text="Lives Impacted"
          />

        </div>

      </div>

    </section>
  );
}


/* STAT COMPONENT */

function Stat({ icon, number, text }) {
  return (
    <div className="text-center p-4 border-red-200">

      <div className="text-red-600 text-xl flex justify-center">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mt-2 text-gray-900">
        {number}
      </h3>

      <p className="text-xs text-gray-600 mt-1">
        {text}
      </p>

    </div>
  );
}

export default AboutStats;