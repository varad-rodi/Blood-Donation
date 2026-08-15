import React from 'react';
import {
  FaTint,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-neutral-600 border-t border-neutral-100 pt-16 pb-8 relative overflow-hidden font-sans">
      
      {/* Soft red background glow that melts perfectly into the white screen */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-500/[0.03] blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-neutral-100">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/20">
                <FaTint className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
                Life<span className="text-red-600">Drop</span>
              </h2>
            </div>
            
            <p className="text-neutral-500 mt-4 leading-relaxed text-sm max-w-xs">
              Connecting blood donors, hospitals and patients through a secure, fast and reliable digital platform.
            </p>
            
            {/* Social Icons - Clean neutral styling for pure white screen */}
            <div className="flex gap-3 mt-6">
              <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/60 text-neutral-500 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center cursor-pointer transition duration-300 shadow-sm">
                <FaFacebookF className="text-xs" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/60 text-neutral-500 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center cursor-pointer transition duration-300 shadow-sm">
                <FaInstagram className="text-xs" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/60 text-neutral-500 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center cursor-pointer transition duration-300 shadow-sm">
                <FaLinkedinIn className="text-xs" />
              </div>
              <div className="w-9 h-9 rounded-xl bg-neutral-50 border border-neutral-200/60 text-neutral-500 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center cursor-pointer transition duration-300 shadow-sm">
                <FaGithub className="text-xs" />
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-900 mb-5 relative after:content-[''] after:block after:w-6 after:h-0.5 after:bg-red-500 after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-neutral-600 text-sm font-medium">
              <li className="hover:text-red-600 cursor-pointer transition flex items-center gap-1 hover:translate-x-1 duration-300">Home</li>
              <li className="hover:text-red-600 cursor-pointer transition flex items-center gap-1 hover:translate-x-1 duration-300">About</li>
              <li className="hover:text-red-600 cursor-pointer transition flex items-center gap-1 hover:translate-x-1 duration-300">Donate</li>
              <li className="hover:text-red-600 cursor-pointer transition flex items-center gap-1 hover:translate-x-1 duration-300">Blood Stock</li>
              <li className="hover:text-red-600 cursor-pointer transition flex items-center gap-1 hover:translate-x-1 duration-300">Contact</li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-neutral-900 mb-5 relative after:content-[''] after:block after:w-6 after:h-0.5 after:bg-red-500 after:mt-2">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-red-600 text-xs" />
                </div>
                <div className="mt-0.5">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Phone</p>
                  <a href="tel:+918767956920" className="text-neutral-800 hover:text-red-600 transition font-semibold">+91 87679 56920</a>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-red-600 text-xs" />
                </div>
                <div className="mt-0.5">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Email Address</p>
                  <a href="mailto:waghmarepranav46@gmail.com" className="text-neutral-800 hover:text-red-600 transition break-all font-semibold">waghmarepranav46@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-red-600 text-xs" />
                </div>
                <div className="mt-0.5">
                  <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Office</p>
                  <p className="text-neutral-800 font-semibold">Ahilyanagar, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency CTA Card Column - High-Contrast Pure White Card */}
          <div>
            <div className="bg-white border-2 border-red-600/90 text-neutral-800 rounded-2xl p-6 shadow-md relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-500/10 blur-xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <FaHeart className="text-red-600 text-3xl mb-4 animate-pulse fill-current" />
              <h2 className="text-lg font-bold text-neutral-900">Emergency Blood</h2>
              <p className="mt-2 text-neutral-500 leading-relaxed text-xs">
                Need blood urgently? Contact us anytime. We are available 24×7 to help save lives.
              </p>
              <button className="mt-5 w-full bg-red-600 text-white px-4 py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition duration-300 shadow-md shadow-red-600/10">
                Request Blood
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-wide text-neutral-400">
          <p>© {new Date().getFullYear()} LifeDrop. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full">
            Made with <FaHeart className="text-red-500 fill-current animate-pulse text-[10px]" /> for a better community
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
