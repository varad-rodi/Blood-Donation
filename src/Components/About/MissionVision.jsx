import React from "react";
import {
  FaBullseye,
  FaEye,
} from "react-icons/fa";

function MissionVision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="grid lg:grid-cols-2 gap-6">

        {/* MISSION */}
        <div className="border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
            <FaBullseye />
          </div>

          <h2 className="text-xl font-bold mt-5">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-3 leading-6">
            To create a reliable and accessible platform that bridges the
            gap between blood donors, recipients, and hospitals. We aim to
            promote voluntary blood donation and save as many lives as
            possible.
          </p>

        </div>


        {/* VISION */}
        <div className="border border-red-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xl">
            <FaEye />
          </div>

          <h2 className="text-xl font-bold mt-5">
            Our Vision
          </h2>

          <p className="text-gray-600 mt-3 leading-6">
            A world where every person in need of blood gets it on time.
            We envision a strong community of generous donors and
            responsive healthcare systems working together for a healthier
            and safer tomorrow.
          </p>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;