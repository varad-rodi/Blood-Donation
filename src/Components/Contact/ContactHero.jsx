import React from "react";
import {
  FaComments,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaPhone,
} from "react-icons/fa";

function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-red-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              <FaComments />
              Get In Touch
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mt-5 leading-tight text-gray-900">
              We're Here to Help.
              <br />
              <span className="text-red-600">
                Contact Us Anytime.
              </span>
            </h1>

            <p className="text-gray-600 mt-4 max-w-xl text-base leading-7">
              Have questions, suggestions, or need support? We'd love to hear
              from you. Reach out to us and we'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden md:flex justify-center items-center h-52">

            <div className="w-36 h-36 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-xl">
              <FaPhone className="text-white text-5xl" />
            </div>

            <div className="absolute top-0 left-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600">
              <FaEnvelope />
            </div>

            <div className="absolute top-2 right-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600">
              <FaMapMarkerAlt />
            </div>

            <div className="absolute bottom-2 left-28 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600">
              <FaHeart />
            </div>

            <div className="absolute bottom-2 right-28 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600">
              <FaComments />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactHero;