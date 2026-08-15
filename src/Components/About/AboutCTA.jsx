import React from "react";
import {
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";

function AboutCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-2xl px-7 py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-5">

          <div className="w-14 h-14 bg-white text-red-600 rounded-full flex items-center justify-center text-2xl">
            <FaHandsHelping />
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Be a Hero. Save a Life.
            </h2>

            <p className="text-red-100 mt-1">
              Your one donation can bring a smile to someone's life.
            </p>

          </div>

        </div>


        {/* BUTTON */}
        <button className="bg-white text-red-600 px-7 py-3 rounded-lg font-bold hover:bg-gray-100 transition">

          <span className="flex items-center gap-2">
            <FaHeart />
            Become a Donor
          </span>

        </button>

      </div>

    </section>
  );
}

export default AboutCTA;