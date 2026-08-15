
import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaHeartPulse, 
  FaPaperPlane, 
  FaCircleQuestion,
  FaCircleCheck
} from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request for smooth animation effect
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Hide success message after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "How can I register as a blood donor?", a: "You can easily register by clicking on the Register button in the navigation bar and filling out your health and blood group details." },
    { q: "Is my personal information secure?", a: "Yes, we prioritize your privacy and ensure your contact details are only shared during verified emergency requests." },
    { q: "Who can donate blood?", a: "Any healthy individual aged 18-65 weighing above 45kg can donate blood safely every 3 months." }
  ];

  return (
    <div className="bg-gradient-to-br from-[#fff5f5] via-[#ffe3e3] to-[#ffd6d6] min-h-screen flex flex-col font-sans transition-all duration-500">

      {/* ================= MAIN CONTACT SECTION ================= */}
      <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
        
        {/* Animated Page Title */}
        <div className="text-center mb-16 transform transition-all duration-700 animate-fade-in">
          <span className="inline-block bg-red-100 text-red-600 text-xs font-extrabold uppercase px-4 py-1.5 rounded-full tracking-widest shadow-sm animate-pulse">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            We'd Love to <span className="text-red-600 underline decoration-red-300 decoration-wavy decoration-1">Hear From You</span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base leading-relaxed">
            Have questions about blood donation, finding a donor, or partnering with us? Reach out and our team will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Information & FAQ */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-red-100 space-y-8 transform hover:-translate-y-1 transition duration-300">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-500 text-sm">Fill out the form or connect with us directly using the details below.</p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="bg-red-100 text-red-600 p-4 rounded-2xl text-xl group-hover:bg-red-600 group-hover:text-white transition duration-300 shadow-md">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Us</h4>
                    <p className="text-gray-800 font-semibold text-lg group-hover:text-red-600 transition">+91 9876543210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="bg-red-100 text-red-600 p-4 rounded-2xl text-xl group-hover:bg-red-600 group-hover:text-white transition duration-300 shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</h4>
                    <p className="text-gray-800 font-semibold text-base group-hover:text-red-600 transition">LifeDrop@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="bg-red-100 text-red-600 p-4 rounded-2xl text-xl group-hover:bg-red-600 group-hover:text-white transition duration-300 shadow-md">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Our Location</h4>
                    <p className="text-gray-800 font-semibold text-base group-hover:text-red-600 transition">Jalna, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner with pulse animation */}
              <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 opacity-10 text-8xl group-hover:scale-110 transition duration-500">
                  <FaHeartPulse />
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <FaHeartPulse className="animate-bounce" /> Need Blood Urgently?
                  </h4>
                  <p className="text-sm text-red-100 mt-1">Our emergency helpline is active 24/7 to save lives instantly.</p>
                </div>
              </div>
            </div>

            {/* Extra Feature: Quick FAQ Section */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaCircleQuestion className="text-red-600" /> Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-4 py-3 font-semibold text-gray-800 bg-gray-50 hover:bg-red-50 flex justify-between items-center transition cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-red-600 font-bold">{openFaq === index ? '-' : '+'}</span>
                    </button>
                    {openFaq === index && (
                      <div className="px-4 py-3 text-sm text-gray-600 bg-white border-t border-gray-100 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Contact Form */}
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-red-100 relative overflow-hidden">
            
            {/* Success Overlay Banner */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
                <FaCircleCheck className="text-green-500 text-6xl mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-600 mt-2">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              Send Us a Message <span className="text-red-600 text-lg">✨</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com" 
                  required 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  required 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold py-4 rounded-xl shadow-lg hover:from-red-700 hover:to-rose-700 hover:shadow-red-500/30 hover:scale-[1.02] active:scale-[0.98] transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </main>

    </div>
  );
}