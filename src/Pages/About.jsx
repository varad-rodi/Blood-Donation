import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Award, ShieldCheck, Heart, Sparkles, ArrowRight, Activity, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-red-500 fill-current" />,
      title: "Compassion First",
      description: "Everything we build is driven by our core desire to help people facing medical emergencies."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      title: "Trusted Network",
      description: "We strictly verify donor credentials to provide a safe, secure, and reliable support environment."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      title: "Seamless Innovation",
      description: "Using modern technology stack to match real-time blood requests with willing donors instantly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-red-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Animated Textures */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://unsplash.com')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.05] transform scale-105 animate-[pulse_12s_infinite]" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="transform transition-all duration-1000 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium backdrop-blur-md">
            <Award className="w-4 h-4" /> About BloodCare
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-6 leading-[1.05]">
            Bridging Hearts.
            <span className="block text-red-500 drop-shadow-[0_0_35px_rgba(220,38,38,0.3)]">
              Saving Lives.
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
            BloodCare is a modern healthcare community ecosystem engineered to simplify life-saving blood resource management. We bring voluntary donors and patients under a single unified responsive platform.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-600/20"
            >
              Join Our Mission <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Vision Branding Visual */}
        <div className="flex justify-center animate-[fadeInUp_1.2s_ease-out]">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-md flex items-center justify-center p-8 group hover:border-red-500/20 transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HeartPulse className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                  To eliminate blood scarcity emergencies by fostering an immediate network of digital-first community lifesavers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 relative">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold text-sm tracking-widest uppercase">The Pillars</p>
          <h2 className="text-3xl md:text-5xl font-black mt-2">Our Core Values</h2>
          <p className="text-slate-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
            We adhere to the highest standards of accountability to bring trust into emergency response.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-slate-950/40 border border-white/5 p-8 hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-900/40 backdrop-blur-md transition-all duration-300"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-red-600/5 blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-slate-400 mt-3 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Impact Statistics Wrapper */}
      <section className="max-w-5xl mx-auto px-6 py-16 mb-24 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl shadow-xl shadow-red-950/40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://unsplash.com')] bg-cover bg-center pointer-events-none mix-blend-overlay opacity-10" />
        
        <div className="relative z-10 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-4xl font-black text-white">100%</h4>
            <p className="text-sm text-red-100 mt-1 font-medium">Voluntary Network</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-4xl font-black text-white">Immediate</h4>
            <p className="text-sm text-red-100 mt-1 font-medium">Request Matching</p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <HeartPulse className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-4xl font-black text-white">0%</h4>
            <p className="text-sm text-red-100 mt-1 font-medium">Platform Charges</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
