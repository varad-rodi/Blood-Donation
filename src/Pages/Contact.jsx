<<<<<<< HEAD

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
=======
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
          setSubmitted(false);
      
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-red-500 selection:text-white relative overflow-hidden font-sans">
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://unsplash.com')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.04] transform scale-105 animate-[pulse_10s_infinite]" />

      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16 transform transition-all duration-1000 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium backdrop-blur-md">
            <MessageSquare className="w-4 h-4" /> Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6">
            We Are Here <span className="text-red-500 drop-shadow-[0_0_35px_rgba(220,38,38,0.3)]">To Help.</span>
          </h1>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            Have questions about donating blood, emergency requirements, or partnership camps? Reach out to our response team instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
          
          <div className="lg:col-span-5 space-y-6 animate-[fadeInUp_1s_ease-out]">
            
            <div className="p-6 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md hover:border-red-500/20 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Baner, Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md hover:border-red-500/20 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Emergency Hotline</h3>
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-red-400 transition-colors block">+91 98765 43210</a>
                <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-green-400" /> Available 24/7 for urgent requests
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md hover:border-red-500/20 transition-all duration-300 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Support</h3>
                <a href="mailto:support@bloodcare.com" className="text-sm text-slate-400 hover:text-red-400 transition-colors block">support@bloodcare.com</a>
                <a href="mailto:info@bloodcare.com" className="text-sm text-slate-400 hover:text-red-400 transition-colors block mt-0.5">info@bloodcare.com</a>
>>>>>>> 8966f35fc17aabf47aeafeb9d28571362012aa44
              </div>
            </div>

          </div>

<<<<<<< HEAD
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
=======
          <div className="lg:col-span-7 animate-[fadeInUp_1.2s_ease-out]">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-950/40 border border-white/5 backdrop-blur-md relative overflow-hidden">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-[scaleIn_0.4s_ease-out]">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto text-sm">
                    Thank you for contacting BloodCare. Our coordination team will review your query and respond within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe" 
                        className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-red-500/50 transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com" 
                        className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-red-500/50 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we assist you?" 
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-red-500/50 transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Message</label>
                    <textarea 
                      rows="4" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your description or emergency request details here..." 
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-red-500/50 transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 text-sm"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Contact;
>>>>>>> 8966f35fc17aabf47aeafeb9d28571362012aa44
