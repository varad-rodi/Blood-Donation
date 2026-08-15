import React from "react";

import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactHelp from "../components/Contact/ContactHelp";

function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 mt-20">

      <ContactHero />

      <section className="max-w-7xl mx-auto px-6 py-5">
        <div className="grid lg:grid-cols-12 gap-4">

          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          <div className="lg:col-span-3">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactMap />
          </div>

        </div>
      </section>

      <ContactHelp />

    </div>
  );
}

export default Contact;