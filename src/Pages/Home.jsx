import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import { 
  ShieldCheck, 
  Zap, 
  Heart, 
  Bell, 
  Droplet, 
  ArrowRight, 
  Users, 
  Activity, 
  Clock, 
  Search 
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      title: "Verified & Secure",
      desc: "Your data and health records are encrypted and safely stored."
    },
    {
      icon: <Zap className="w-5 h-5 text-red-600" />,
      title: "Quick Registration",
      desc: "Join our community and become an active lifesaver in under 2 minutes."
    },
    {
      icon: <Heart className="w-5 h-5 text-red-600 fill-current animate-pulse" />,
      title: "Be a Hero",
      desc: "A single donation can make a massive difference and save up to three lives."
    },
    {
      icon: <Bell className="w-5 h-5 text-red-600" />,
      title: "Real-time Alerts",
      desc: "Get instantly notified when someone in your nearby city requests blood."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 font-sans relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-8 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 border border-red-100 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              Join Our Life-Saving Community
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Connecting Donors,<br />
              <span className="text-red-600 drop-shadow-sm">Saving Lives Together</span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl">
              BloodCare bridges the gap between voluntary blood donors and people in medical emergencies. Search for available groups, create requests, and give hope.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-bold transition shadow-lg shadow-red-600/10 hover:shadow-red-600/20 text-sm"
              >
                <Droplet className="w-4 h-4 fill-current" /> Donate Blood Now
              </Link>
              <Link
                to="/requests"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-7 py-4 rounded-xl font-bold transition text-sm"
              >
                Need Urgent Blood?
              </Link>
            </div>

            {/* Feature List Cards */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              {features.map((item, index) => (
                <div key={index} className="flex gap-3 items-start group">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end animate-[fadeInUp_1.2s_ease-out]">
            <div className="relative">
              
              {/* Premium Geometric Circular Frames */}
              <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/10 flex items-center justify-center relative">
                <div className="w-60 h-60 md:w-[320px] md:h-[320px] rounded-full bg-red-50 border border-red-100/50 flex items-center justify-center shadow-inner">
                  <div className="drop-shadow-[0_15px_30px_rgba(220,38,38,0.25)] transition-transform duration-500 hover:scale-105 cursor-pointer">
                    <Droplet className="w-32 md:w-44 h-32 md:h-44 text-red-600 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Performance Indicator Cards */}
              <div className="absolute -left-6 top-16 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-xl shadow-slate-100 flex items-center gap-3 animate-[bounce_4s_infinite]">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">500+</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Active Donors</p>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-xl shadow-slate-100 flex items-center gap-3 animate-[bounce_5s_infinite]">
                <div className="p-2.5 rounded-xl bg-green-50 border border-green-100 text-green-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">24/7</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Instant Support</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Analytics Counter Banner Section */}
      <section className="bg-white border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["8", "Blood Groups Provided"],
            ["500+", "Verified Lifesavers"],
            ["250+", "Successful Donations"],
            ["15 Mins", "Average Matching Time"]
          ].map(([metric, text], i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl font-black text-red-600 tracking-tight">{metric}</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern High-Impact Call To Action */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[32px] p-8 md:p-16 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-3xl rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight relative z-10">
            One Small Drop Can Create <br className="hidden md:inline" /> an Ocean of Hope.
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto text-sm md:text-base relative z-10 leading-relaxed">
            Your single contribution has the capability to save lives. Join our transparent, tech-driven coordination grid now.
          </p>
          <div className="mt-8 flex justify-center relative z-10">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg shadow-red-600/10 text-sm"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default Home;
