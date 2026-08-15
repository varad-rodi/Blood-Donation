import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm h-full">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
          <FaHeadset />
        </div>

        <h2 className="text-lg font-bold text-gray-900">
          Contact Information
        </h2>
      </div>

      <ContactItem
        icon={<FaPhone />}
        title="Phone"
        text="+91 98765 43210"
      />

      <ContactItem
        icon={<FaEnvelope />}
        title="Email"
        text="support@bloodconnect.com"
      />

      <ContactItem
        icon={<FaMapMarkerAlt />}
        title="Address"
        text={
          <>
            BloodConnect Headquarters,
            <br />
            Pune, Maharashtra 411001,
            <br />
            India
          </>
        }
      />

      <ContactItem
        icon={<FaClock />}
        title="Working Hours"
        text="Mon - Sun : 24/7"
        last
      />

    </div>
  );
}

function ContactItem({ icon, title, text, last }) {
  return (
    <div
      className={`flex gap-3 py-4 ${
        !last ? "border-b border-gray-100" : ""
      }`}
    >

      <div className="min-w-9 w-9 h-9 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-sm">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold">
          {title}
        </h3>

        <p className="text-xs text-gray-500 mt-1 leading-5">
          {text}
        </p>
      </div>

    </div>
  );
}

export default ContactInfo;