import React from "react";
import {
  FaClock,
  FaShieldAlt,
  FaBell,
  FaMapMarkerAlt,
  FaLock,
  FaHandsHelping,
} from "react-icons/fa";

function WhyDifferent() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">

      {/* TITLE */}
      <div className="text-center mb-10">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What Makes Us Different
        </h2>

        <div className="w-12 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>

      </div>


      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <Feature
          icon={<FaClock />}
          title="Real-time Matching"
          text="We instantly match blood requests with available donors near you."
        />

        <Feature
          icon={<FaShieldAlt />}
          title="Verified Platform"
          text="Every donor and hospital is verified to ensure trust and safety."
        />

        <Feature
          icon={<FaBell />}
          title="Instant Alerts"
          text="Get notified immediately for urgent blood requirements."
        />

        <Feature
          icon={<FaMapMarkerAlt />}
          title="Wide Coverage"
          text="Connecting people and hospitals across cities and regions."
        />

        <Feature
          icon={<FaLock />}
          title="Secure & Private"
          text="Your data is safe with us. We value your privacy and security."
        />

        <Feature
          icon={<FaHandsHelping />}
          title="Community Driven"
          text="Built for the community and powered by compassion."
        />

      </div>

    </section>
  );
}


/* FEATURE COMPONENT */

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl hover:bg-red-50 transition">

      <div className="min-w-12 w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg">
        {icon}
      </div>

      <div>

        <h3 className="font-bold text-base">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-1 leading-6">
          {text}
        </p>

      </div>

    </div>
  );
}

export default WhyDifferent;