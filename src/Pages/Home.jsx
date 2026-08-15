<<<<<<< HEAD
import React from 'react'
import Hero from '../Components/Home/Hero'
import WhyDonate from '../Components/Home/WhyDonate'
 
const Home = () => {
  return (
    
    <>
    <Hero/>
    <WhyDonate/>
 
    </> 
     
     
  )
}
=======
import React from "react";
import { Link } from "react-router-dom";
import { 
  Droplet, 
  Clock, 
  Users, 
  Activity, 
  Layers, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-red-500 selection:text-white">
>>>>>>> 8966f35fc17aabf47aeafeb9d28571362012aa44

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6 animate-pulse">
              🩸 Every Drop Can Save a Life
            </span>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Give Blood.
              <span className="text-red-500 block">
                Give Hope.
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              Connect blood donors with people in need. Find a suitable
              donor, request blood, and help save lives in your community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-red-600 hover:bg-red-700 px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-red-600/20"
              >
                🩸 Donate Blood
              </Link>
              <Link
                to="/requests"
                className="border border-white/15 hover:bg-white/5 px-7 py-3.5 rounded-xl font-semibold transition"
              >
                Need Blood?
              </Link>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center">
                <div className="w-52 h-52 md:w-72 md:h-72 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                  <div className="drop-shadow-[0_0_35px_rgba(220,38,38,0.6)]">
                    <Droplet className="w-24 h-24 md:w-32 md:h-32 text-red-500 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-12 bg-slate-900/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-red-500 leading-none">100+</p>
                  <p className="text-xs text-slate-400 mt-1">Active Donors</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-12 bg-slate-900/90 backdrop-blur border border-white/10 rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400 leading-none">24/7</p>
                  <p className="text-xs text-slate-400 mt-1">Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center group hover:border-red-500/30 transition">
            <Users className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-white">500+</h3>
            <p className="text-sm text-slate-400 mt-1">Registered Donors</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center group hover:border-red-500/30 transition">
            <Activity className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-white">250+</h3>
            <p className="text-sm text-slate-400 mt-1">Lives Helped</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center group hover:border-red-500/30 transition">
            <Layers className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-white">8</h3>
            <p className="text-sm text-slate-400 mt-1">Blood Groups</p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center group hover:border-red-500/30 transition">
            <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="text-sm text-slate-400 mt-1">Emergency Requests</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-red-500 font-semibold tracking-wider uppercase text-xs">How It Works</p>
            <h2 className="text-4xl font-bold mt-2">Help Someone in 3 Simple Steps</h2>
            <p className="text-slate-400 mt-4">Our platform makes blood donation and blood requests simple.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mt-6">Register</h3>
              <p className="text-slate-400 mt-3">Create your profile and provide your blood group and location.</p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mt-6">Find or Request</h3>
              <p className="text-slate-400 mt-3">Search for available donors or create an urgent blood request.</p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold mt-6">Save a Life</h3>
              <p className="text-slate-400 mt-3">Connect with the donor and help provide blood when it matters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 md:p-16 shadow-xl shadow-red-950/50 relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight relative z-10">
            One Donation Can Make <br className="hidden md:inline" /> a Difference.
          </h2>
          <p className="mt-4 text-red-100 max-w-md mx-auto text-base relative z-10">
            Join our lifesaving registry today. Registration takes less than 5 minutes and saves up to three lives.
          </p>
          <div className="mt-8 flex justify-center relative z-10">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-red-700 hover:bg-slate-100 px-8 py-3.5 rounded-xl font-semibold transition"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-slate-950 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BloodCare. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Made with <CheckCircle className="w-4 h-4 text-red-500" /> to protect communities.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
