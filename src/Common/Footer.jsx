import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 pb-12 border-b border-white/5">
        
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center transition group-hover:scale-105">
              <HeartPulse className="w-5 h-5 text-white animate-pulse" />
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              Blood<span className="text-red-500">Care</span>
            </h2>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Our mission is to bridge the gap between blood donors and those in urgent need. Your small contribution can give someone a second chance at life.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-red-500 transition-colors p-2 bg-white/[0.03] border border-white/5 rounded-xl">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-red-500 transition-colors p-2 bg-white/[0.03] border border-white/5 rounded-xl">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-red-500 transition-colors p-2 bg-white/[0.03] border border-white/5 rounded-xl">
              <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
            <li><Link to="/donors" className="hover:text-red-400 transition-colors">Find a Donor</Link></li>
            <li><Link to="/requests" className="hover:text-red-400 transition-colors">Blood Requests</Link></li>
            <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/eligibility" className="hover:text-red-400 transition-colors">Eligibility Guidelines</Link></li>
            <li><Link to="/faq" className="hover:text-red-400 transition-colors">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-red-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-xs">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>Baner, Pune, Maharashtra</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-red-400 transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:support@bloodcare.com" className="hover:text-red-400 transition-colors">support@bloodcare.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide">
        <p>© {new Date().getFullYear()} BloodCare. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" /> for a better community.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
