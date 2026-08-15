import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Contact <span className="text-red-500">BloodConnect</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-slate-400 text-lg">
            Have a question, need help or want to partner with us?
            Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold">
              Let's Connect
            </h2>

            <p className="text-slate-400 mt-3 leading-relaxed">
              Whether you are a donor, patient, hospital or organization,
              feel free to reach out to us.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <Mail />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">
                    support@bloodconnect.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <Phone />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <MapPin />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                  <Clock />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Support</p>
                  <p className="font-medium">
                    Available 24/7
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <form className="mt-7 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3.5 outline-none focus:border-red-500 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3.5 outline-none focus:border-red-500 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3.5 outline-none focus:border-red-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-5 py-3.5 outline-none focus:border-red-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3.5 rounded-xl font-semibold transition"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;