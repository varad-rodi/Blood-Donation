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
              </div>
            </div>

          </div>

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
