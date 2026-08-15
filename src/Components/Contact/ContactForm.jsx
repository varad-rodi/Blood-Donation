import React, { useState } from "react";
import {
  FaComments,
  FaUser,
  FaEnvelope,
  FaTag,
  FaPen,
  FaLock,
  FaPaperPlane,
} from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm h-full">

      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
          <FaComments />
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Send Us a Message
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Fill out the form below and we will get back to you.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-semibold mb-2">
              Your Name <span className="text-red-600">*</span>
            </label>

            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Your Email <span className="text-red-600">*</span>
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-200"
              />
            </div>
          </div>

        </div>

        {/* Subject */}
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            Subject <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-200"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-sm font-semibold mb-2">
            Your Message <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <FaPen className="absolute left-3 top-3 text-gray-400 text-sm" />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              rows="4"
              className="w-full border border-gray-200 rounded-lg py-2.5 pl-9 pr-3 text-sm outline-none resize-none focus:border-red-500 focus:ring-1 focus:ring-red-200"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">

          <p className="text-xs text-gray-500 flex items-center gap-2">
            <FaLock className="text-gray-400" />
            We respect your privacy.
          </p>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </div>

      </form>
    </div>
  );
}

export default ContactForm;