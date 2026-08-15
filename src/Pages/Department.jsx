import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Droplet, 
  Activity, 
  Users, 
  FileText, 
  Home as CampIcon, 
  HelpCircle, 
  Search, 
  ArrowRight,
  AlertTriangle
} from "lucide-react";

const Department = () => {
  const [search, setSearch] = useState("");

  const departments = [
    {
      name: "Blood Bank",
      icon: <Droplet className="w-7 h-7 text-red-500 fill-current" />,
      description: "Manage blood collection, storage, testing and real-time blood availability.",
      status: "Available",
      tag: "Core Service",
    },
    {
      name: "Emergency Care",
      icon: <Activity className="w-7 h-7 text-red-500" />,
      description: "Handle urgent blood requirements and connect patients with available donors.",
      status: "24/7 Active",
      tag: "Emergency",
    },
    {
      name: "Donor Management",
      icon: <Users className="w-7 h-7 text-red-500" />,
      description: "Register donors, maintain donor profiles and track their donation history.",
      status: "Active",
      tag: "Donors",
    },
    {
      name: "Blood Requests",
      icon: <FileText className="w-7 h-7 text-red-500" />,
      description: "Create, manage and track blood requests from patients and hospitals.",
      status: "Active",
      tag: "Requests",
    },
    {
      name: "Donation Camps",
      icon: <CampIcon className="w-7 h-7 text-red-500" />,
      description: "Discover and organize upcoming blood donation camps in your area.",
      status: "Upcoming",
      tag: "Events",
    },
    {
      name: "Support Center",
      icon: <HelpCircle className="w-7 h-7 text-red-500" />,
      description: "Get assistance and answers to your questions about blood donation.",
      status: "Available",
      tag: "Support",
    },
  ];

  const bloodGroups = [
    { group: "A+", units: 18, status: "Available" },
    { group: "A-", units: 7, status: "Available" },
    { group: "B+", units: 24, status: "Available" },
    { group: "B-", units: 5, status: "Low Stock" },
    { group: "AB+", units: 12, status: "Available" },
    { group: "AB-", units: 3, status: "Low Stock" },
    { group: "O+", units: 31, status: "Available" },
    { group: "O-", units: 2, status: "Critical" },
  ];

  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-red-500 selection:text-white relative overflow-hidden font-sans">
    <div
  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&auto=format&fit=crop&q=85')] bg-cover bg-center bg-no-repeat pointer-events-none opacity-[0.18] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/75 to-red-950/80 pointer-events-none" />

{/* Red Glow */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(239,68,68,0.20),transparent_55%)] pointer-events-none" />

{/* Bottom Fade */}
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-40 -left-40 w-72 h-72 bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl transform transition-all duration-1000 animate-[fadeIn_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium backdrop-blur-md">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              BloodCare Services
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-7 leading-[1.05]">
              Everything You Need
              <span className="block text-red-500 drop-shadow-[0_0_35px_rgba(220,38,38,0.3)]">
                To Save A Life.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Explore our blood donation services, find available blood
              groups, connect with donors and get emergency support when
              every second matters.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
              >
                <Droplet className="w-5 h-5 fill-current" /> Find Blood
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-[fadeInUp_1.2s_ease-out]">
            {[
              ["8", "Blood Groups"],
              ["500+", "Registered Donors"],
              ["250+", "Lives Helped"],
              ["24/7", "Emergency Support"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="p-5 rounded-2xl bg-slate-950/40 border border-white/5 backdrop-blur-md hover:border-red-500/20 hover:bg-slate-900/60 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <h3 className="text-3xl font-bold text-red-500 group-hover:scale-105 transition-transform duration-300">
                  {number}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-red-500 font-bold text-sm tracking-widest">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Explore Departments
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl">
              Choose the service you need and get connected with the right
              resources.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl pl-5 pr-11 py-3 outline-none focus:border-red-500/50 transition-all backdrop-blur-md placeholder:text-slate-600 text-sm"
            />
            <span className="absolute right-4 top-3.5 text-slate-500">
              <Search className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map((department) => (
            <div
              key={department.name}
              className="group relative overflow-hidden rounded-3xl bg-slate-950/40 border border-white/5 p-7 hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-900/40 backdrop-blur-md transition-all duration-300"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-red-600/10 blur-[70px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                  {department.icon}
                </div>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 backdrop-blur-sm">
                  ● {department.status}
                </span>
              </div>

              <p className="text-xs text-red-400 font-medium mt-7">
                {department.tag}
              </p>
              <h3 className="text-2xl font-bold mt-2 group-hover:text-red-400 transition-colors duration-300">
                {department.name}
              </h3>
              <p className="text-slate-400 mt-3 leading-relaxed text-sm">
                {department.description}
              </p>

              <div className="mt-7 pt-5 border-t border-white/5">
                <Link
                  to="/contact"
                  className="flex items-center justify-between text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-300"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 relative">
        <div className="mb-8">
          <p className="text-red-500 font-bold text-sm tracking-widest uppercase">Inventory Status</p>
          <h2 className="text-3xl font-bold mt-1">Live Blood Stock</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {bloodGroups.map((item) => (
            <div 
              key={item.group} 
              className="bg-slate-950/40 border border-white/5 backdrop-blur-md rounded-2xl p-5 text-center group hover:border-red-500/30 hover:bg-slate-900/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">{item.group}</div>
              <div className="text-xl font-bold mt-2 text-slate-300">{item.units} Units</div>
              <div className={`text-[10px] uppercase font-bold tracking-wider mt-3 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full backdrop-blur-sm ${
                item.status === "Critical" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                item.status === "Low Stock" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                "bg-green-500/10 text-green-400 border border-green-500/20"
              }`}>
                {item.status === "Critical" && <AlertTriangle className="w-2.5 h-2.5 mr-1 animate-pulse" />}
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Department;
