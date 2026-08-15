import React from "react";
import { Link } from "react-router-dom";
import { 
  Hospital, 
  CheckCircle2, 
  MapPin, 
  LayoutDashboard, 
  Boxes, 
  ClipboardList, 
  UserPlus, 
  CalendarCheck2, 
  Users, 
  BarChart3, 
  Bell, 
  UserCog, 
  UserCheck, 
  HelpCircle, 
  Droplet, 
  ChevronRight, 
  Megaphone, 
  PlusCircle
} from "lucide-react";

const HospitalDashboard = () => {
  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, active: true },
    { label: "Blood Inventory", icon: <Boxes className="w-4 h-4" /> },
    { label: "Blood Requests", icon: <ClipboardList className="w-4 h-4" />, badge: 8 },
    { label: "Donor Requests", icon: <UserPlus className="w-4 h-4" /> },
    { label: "Appointments", icon: <CalendarCheck2 className="w-4 h-4" /> },
    { label: "Donor Management", icon: <Users className="w-4 h-4" /> },
    { label: "Reports & Analytics", icon: <BarChart3 className="w-4 h-4" /> },
    { label: "Notifications", icon: <Bell className="w-4 h-4" />, badge: 5 },
    { label: "Profile Settings", icon: <UserCog className="w-4 h-4" /> },
    { label: "Staff Management", icon: <UserCheck className="w-4 h-4" /> },
    { label: "Help & Support", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const stats = [
    { label: "Total Units in Stock", value: "1,250", change: "+120 this week", color: "text-red-600 bg-red-50" },
    { label: "Blood Requests", value: "58", change: "8 Pending", color: "text-blue-600 bg-blue-50" },
    { label: "Donor Requests", value: "96", change: "24 New", color: "text-green-600 bg-green-50" },
    { label: "Appointments Today", value: "34", change: "View Schedule", color: "text-amber-600 bg-amber-50", link: true },
    { label: "Lives Impacted", value: "1,870", change: "This Month", color: "text-purple-600 bg-purple-50" },
  ];

  const bloodRequests = [
    { group: "O+", reason: "Emergency Surgery", units: "10 Units", priority: "High Priority", pColor: "text-red-600 bg-red-50 border-red-100", time: "15 May 2024, 10:30 AM" },
    { group: "B+", reason: "Accident Case", units: "6 Units", priority: "Medium Priority", pColor: "text-amber-600 bg-amber-50 border-amber-100", time: "15 May 2024, 12:45 PM" },
    { group: "A-", reason: "Thalassemia Patient", units: "4 Units", priority: "Low Priority", pColor: "text-green-600 bg-green-50 border-green-100", time: "15 May 2024, 02:15 PM" },
    { group: "AB+", reason: "Cancer Treatment", units: "8 Units", priority: "Medium Priority", pColor: "text-amber-600 bg-amber-50 border-amber-100", time: "15 May 2024, 03:30 PM" },
  ];

  const inventory = [
    { group: "O+", units: 320 }, { group: "O-", units: 85 },
    { group: "A+", units: 210 }, { group: "A-", units: 60 },
    { group: "B+", units: 190 }, { group: "B-", units: 45 },
    { group: "AB+", units: 90 }, { group: "AB-", units: 30 },
  ];

  const appointments = [
    { name: "Rahul Patil", type: "Whole Blood Donation", time: "15 May 2024", hour: "09:30 AM", status: "Confirmed", sColor: "text-green-600 bg-green-50 border-green-100" },
    { name: "Priya Sharma", type: "Platelet Donation", time: "15 May 2024", hour: "11:00 AM", status: "Confirmed", sColor: "text-green-600 bg-green-50 border-green-100" },
    { name: "Amit Verma", type: "Whole Blood Donation", time: "15 May 2024", hour: "01:30 PM", status: "Scheduled", sColor: "text-blue-600 bg-blue-50 border-blue-100" },
  ];

  const quickActions = [
    { label: "Request Blood", icon: <Droplet className="w-5 h-5 text-red-600" /> },
    { label: "Post Announcement", icon: <Megaphone className="w-5 h-5 text-blue-600" /> },
    { label: "Add Inventory", icon: <PlusCircle className="w-5 h-5 text-green-600" /> },
    { label: "View Reports", icon: <BarChart3 className="w-5 h-5 text-indigo-600" /> },
    { label: "Manage Staff", icon: <UserCheck className="w-5 h-5 text-purple-600" /> },
    { label: "Help & Support", icon: <HelpCircle className="w-5 h-5 text-neutral-500" /> },
  ];

  return (
    <div className="min-h-screen bg-neutral-50/50 text-neutral-800 font-sans flex relative overflow-hidden">
      
      <aside className="w-64 bg-white border-r border-neutral-200 p-5 flex flex-col justify-between shrink-0 hidden lg:flex">
        <div className="space-y-6">
          <div className="flex gap-3 p-3 bg-neutral-50 rounded-2xl border border-neutral-100">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-xl shrink-0">
              <Hospital className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-black text-neutral-900 truncate">City Care Hospital</h2>
              <div className="flex items-center gap-1 text-[11px] text-green-600 font-bold mt-0.5">
                <CheckCircle2 className="w-3 h-3" /> Verified Hospital
              </div>
              <p className="text-[10px] text-neutral-400 flex items-center gap-0.5 mt-0.5 truncate">
                <MapPin className="w-3 h-3" /> Pune, Maharashtra
              </p>
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((link, i) => (
              <button
                key={i}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  link.active 
                    ? "bg-red-50 text-red-600 border border-red-100/50" 
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="bg-red-600 text-white font-black px-1.5 py-0.5 rounded-full text-[9px]">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-4 text-center mt-6 shadow-lg shadow-red-600/10">
          <p className="text-xs font-black uppercase tracking-wider text-red-100">Every Drop Counts</p>
          <p className="text-[11px] text-red-500 bg-white px-2 py-0.5 rounded-full font-bold inline-block mt-1">Campaign Active</p>
          <button className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 rounded-xl text-[11px] mt-4 transition shadow-md">
            Request Blood Now
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-200/60">
          <div>
            <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
              Welcome back, City Care Hospital! 👋
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">Manage blood inventory, requests and connect with life savers.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-neutral-400 bg-white border border-neutral-200 px-3 py-1.5 rounded-xl">
              Live Connection
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm group hover:shadow-md transition">
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider truncate">{stat.label}</p>
              <h3 className="text-2xl font-black text-neutral-900 mt-2 tracking-tight">{stat.value}</h3>
              <p className={`text-[10px] font-bold mt-2 inline-block px-2 py-0.5 rounded-full ${stat.color} ${stat.link ? "cursor-pointer hover:underline" : ""}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-neutral-900 tracking-tight">Recent Blood Requests</h3>
                <button className="text-xs font-bold text-red-600 hover:underline">View All</button>
              </div>

              <div className="divide-y divide-neutral-100">
                {bloodRequests.map((req, i) => (
                  <div key={i} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0 group cursor-pointer">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-black text-xs shrink-0">
                        {req.group}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-black text-neutral-900 truncate group-hover:text-red-600 transition">{req.group} Blood Required</h4>
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{req.reason}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 flex items-center gap-4">
                      <div>
                        <p className="text-xs font-black text-neutral-900">{req.units}</p>
                        <p className="text-[9px] text-neutral-400 mt-0.5">{req.time}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${req.pColor} hidden sm:inline-block`}>
                        {req.priority}
                      </span>
                      <ChevronRight className="text-neutral-300 w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-neutral-900 tracking-tight">Upcoming Appointments</h3>
                <button className="text-xs font-bold text-red-600 hover:underline">View Calendar</button>
              </div>

              <div className="divide-y divide-neutral-100">
                {appointments.map((app, i) => (
                  <div key={i} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0 group cursor-pointer">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 text-xs shrink-0 font-bold">
                        {app.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-black text-neutral-900 truncate">{app.name}</h4>
                        <p className="text-[11px] text-neutral-400 truncate mt-0.5">{app.type}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 flex items-center gap-4">
                      <div>
                        <p className="text-xs font-black text-neutral-900">{app.time}</p>
                        <p className="text-[9px] text-neutral-400 mt-0.5">{app.hour}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${app.sColor}`}>
                        {app.status}
                      </span>
                      <ChevronRight className="text-neutral-300 w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Grid Layout Panel (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-neutral-900 tracking-tight">Blood Inventory <span className="text-xs text-neutral-400 font-medium">(Units in Stock)</span></h3>
                <button className="text-xs font-bold text-red-600 hover:underline">View All</button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {inventory.map((item, i) => (
                  <div key={i} className="border border-neutral-100 rounded-xl p-2.5 text-center bg-neutral-50/40 group hover:border-red-200 transition">
                    <div className="flex items-center justify-center gap-0.5 text-red-600 text-xs font-black">
                      <Droplet className="w-2.5 h-2.5 fill-current" /> {item.group}
                    </div>
                    <div className="text-sm font-black text-neutral-900 mt-1.5 leading-none">{item.units}</div>
                    <p className="text-[9px] text-neutral-400 mt-1">Units</p>
                  </div>
                ))}
              </div>

              <button className="w-full border border-red-600 text-red-600 hover:bg-red-50 font-bold py-2.5 rounded-xl text-xs transition mt-2 shadow-sm">
                Manage Inventory
              </button>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-neutral-900 tracking-tight">Quick Actions</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((act, i) => (
                  <button key={i} className="border border-neutral-100 rounded-xl p-3 flex flex-col items-center justify-center text-center bg-neutral-50/20 group hover:border-red-500/20 hover:bg-red-50/10 transition">
                    <div className="w-9 h-9 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {act.icon}
                    </div>
                    <span className="text-[10px] font-bold text-neutral-600 group-hover:text-neutral-900 transition mt-2 leading-tight">
                      {act.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default HospitalDashboard;
