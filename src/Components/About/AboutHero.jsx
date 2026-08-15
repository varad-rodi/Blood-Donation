import React from "react";
import {
  FaUsers,
  FaShieldAlt,
  FaHeart,
  FaTint,
} from "react-icons/fa";

function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-red-50 via-white to-red-50">

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full text-sm font-semibold">
            <FaUsers />
            About BloodConnect
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-gray-900">
            Connecting Hearts.
            <br />
            <span className="text-red-600">
              Saving Lives.
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-7 max-w-xl">
            BloodConnect is a unified platform that connects blood donors,
            patients, and hospitals in real-time. Our mission is to ensure
            that no one suffers due to the unavailability of blood.
          </p>


          {/* HERO FEATURES */}
          <div className="grid sm:grid-cols-3 gap-5 mt-8">

            <HeroFeature
              icon={<FaTint />}
              title="Real-time"
              text="Connect in real-time when it matters most."
            />

            <HeroFeature
              icon={<FaShieldAlt />}
              title="Verified & Safe"
              text="All donors and hospitals are verified."
            />

            <HeroFeature
              icon={<FaHeart />}
              title="Human First"
              text="Built with empathy, driven by purpose."
            />

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80"
            alt="Blood Donation"
            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}


/* HERO FEATURE */

function HeroFeature({ icon, title, text }) {
  return (
    <div className="flex gap-3">

      <div className="min-w-11 w-11 h-11 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
        {icon}
      </div>

      <div>

        <h3 className="font-bold text-sm">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 leading-5">
          {text}
        </p>

      </div>

    </div>
  );
}

export default AboutHero;