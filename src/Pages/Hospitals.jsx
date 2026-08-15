// import React from "react";
// import { Link } from "react-router-dom";
// import { 
//   Hospital, 
//   CheckCircle2, 
//   MapPin, 
//   LayoutDashboard, 
//   Boxes, 
//   ClipboardList, 
//   UserPlus, 
//   CalendarCheck2, 
//   Users, 
//   BarChart3, 
//   Bell, 
//   UserCog, 
//   UserCheck, 
//   HelpCircle, 
//   Droplet, 
//   ChevronRight, 
//   Megaphone, 
//   PlusCircle
// } from "lucide-react";

// const HospitalDashboard = () => {
//   const sidebarLinks = [
//     { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, active: true },
//     { label: "Blood Inventory", icon: <Boxes className="w-4 h-4" /> },
//     { label: "Blood Requests", icon: <ClipboardList className="w-4 h-4" />, badge: 8 },
//     { label: "Donor Requests", icon: <UserPlus className="w-4 h-4" /> },
//     { label: "Appointments", icon: <CalendarCheck2 className="w-4 h-4" /> },
//     { label: "Donor Management", icon: <Users className="w-4 h-4" /> },
//     { label: "Reports & Analytics", icon: <BarChart3 className="w-4 h-4" /> },
//     { label: "Notifications", icon: <Bell className="w-4 h-4" />, badge: 5 },
//     { label: "Profile Settings", icon: <UserCog className="w-4 h-4" /> },
//     { label: "Staff Management", icon: <UserCheck className="w-4 h-4" /> },
//     { label: "Help & Support", icon: <HelpCircle className="w-4 h-4" /> },
//   ];

//   const stats = [
//     { label: "Total Units in Stock", value: "1,250", change: "+120 this week", color: "text-red-600 bg-red-50" },
//     { label: "Blood Requests", value: "58", change: "8 Pending", color: "text-blue-600 bg-blue-50" },
//     { label: "Donor Requests", value: "96", change: "24 New", color: "text-green-600 bg-green-50" },
//     { label: "Appointments Today", value: "34", change: "View Schedule", color: "text-amber-600 bg-amber-50", link: true },
//     { label: "Lives Impacted", value: "1,870", change: "This Month", color: "text-purple-600 bg-purple-50" },
//   ];

//   const bloodRequests = [
//     { group: "O+", reason: "Emergency Surgery", units: "10 Units", priority: "High Priority", pColor: "text-red-600 bg-red-50 border-red-100", time: "15 May 2024, 10:30 AM" },
//     { group: "B+", reason: "Accident Case", units: "6 Units", priority: "Medium Priority", pColor: "text-amber-600 bg-amber-50 border-amber-100", time: "15 May 2024, 12:45 PM" },
//     { group: "A-", reason: "Thalassemia Patient", units: "4 Units", priority: "Low Priority", pColor: "text-green-600 bg-green-50 border-green-100", time: "15 May 2024, 02:15 PM" },
//     { group: "AB+", reason: "Cancer Treatment", units: "8 Units", priority: "Medium Priority", pColor: "text-amber-600 bg-amber-50 border-amber-100", time: "15 May 2024, 03:30 PM" },
//   ];

//   const inventory = [
//     { group: "O+", units: 320 }, { group: "O-", units: 85 },
//     { group: "A+", units: 210 }, { group: "A-", units: 60 },
//     { group: "B+", units: 190 }, { group: "B-", units: 45 },
//     { group: "AB+", units: 90 }, { group: "AB-", units: 30 },
//   ];

//   const appointments = [
//     { name: "Rahul Patil", type: "Whole Blood Donation", time: "15 May 2024", hour: "09:30 AM", status: "Confirmed", sColor: "text-green-600 bg-green-50 border-green-100" },
//     { name: "Priya Sharma", type: "Platelet Donation", time: "15 May 2024", hour: "11:00 AM", status: "Confirmed", sColor: "text-green-600 bg-green-50 border-green-100" },
//     { name: "Amit Verma", type: "Whole Blood Donation", time: "15 May 2024", hour: "01:30 PM", status: "Scheduled", sColor: "text-blue-600 bg-blue-50 border-blue-100" },
//   ];

//   const quickActions = [
//     { label: "Request Blood", icon: <Droplet className="w-5 h-5 text-red-600" /> },
//     { label: "Post Announcement", icon: <Megaphone className="w-5 h-5 text-blue-600" /> },
//     { label: "Add Inventory", icon: <PlusCircle className="w-5 h-5 text-green-600" /> },
//     { label: "View Reports", icon: <BarChart3 className="w-5 h-5 text-indigo-600" /> },
//     { label: "Manage Staff", icon: <UserCheck className="w-5 h-5 text-purple-600" /> },
//     { label: "Help & Support", icon: <HelpCircle className="w-5 h-5 text-neutral-500" /> },
//   ];

//   return (
//     <div className="min-h-screen bg-neutral-50/50 text-neutral-800 font-sans flex relative overflow-hidden">
      
//       <aside className="w-64 bg-white border-r border-neutral-200 p-5 flex flex-col justify-between shrink-0 hidden lg:flex">
//         <div className="space-y-6">
//           <div className="flex gap-3 p-3 bg-neutral-50 rounded-2xl border border-neutral-100">
//             <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 text-xl shrink-0">
//               <Hospital className="w-6 h-6" />
//             </div>
//             <div className="min-w-0">
//               <h2 className="text-sm font-black text-neutral-900 truncate">City Care Hospital</h2>
//               <div className="flex items-center gap-1 text-[11px] text-green-600 font-bold mt-0.5">
//                 <CheckCircle2 className="w-3 h-3" /> Verified Hospital
//               </div>
//               <p className="text-[10px] text-neutral-400 flex items-center gap-0.5 mt-0.5 truncate">
//                 <MapPin className="w-3 h-3" /> Pune, Maharashtra
//               </p>
//             </div>
//           </div>

//           <nav className="space-y-1">
//             {sidebarLinks.map((link, i) => (
//               <button
//                 key={i}
//                 className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
//                   link.active 
//                     ? "bg-red-50 text-red-600 border border-red-100/50" 
//                     : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
//                 }`}
//               >
//                 <div className="flex items-center gap-3">
//                   {link.icon}
//                   <span>{link.label}</span>
//                 </div>
//                 {link.badge && (
//                   <span className="bg-red-600 text-white font-black px-1.5 py-0.5 rounded-full text-[9px]">
//                     {link.badge}
//                   </span>
//                 )}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-4 text-center mt-6 shadow-lg shadow-red-600/10">
//           <p className="text-xs font-black uppercase tracking-wider text-red-100">Every Drop Counts</p>
//           <p className="text-[11px] text-red-500 bg-white px-2 py-0.5 rounded-full font-bold inline-block mt-1">Campaign Active</p>
//           <button className="w-full bg-neutral-900 hover:bg-neutral-950 text-white font-bold py-2 rounded-xl text-[11px] mt-4 transition shadow-md">
//             Request Blood Now
//           </button>
//         </div>
//       </aside>

//       <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
        
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-200/60">
//           <div>
//             <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
//               Welcome back, City Care Hospital! 👋
//             </h1>
//             <p className="text-xs text-neutral-500 mt-0.5">Manage blood inventory, requests and connect with life savers.</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <span className="text-xs font-bold text-neutral-400 bg-white border border-neutral-200 px-3 py-1.5 rounded-xl">
//               Live Connection
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//           {stats.map((stat, i) => (
//             <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm group hover:shadow-md transition">
//               <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider truncate">{stat.label}</p>
//               <h3 className="text-2xl font-black text-neutral-900 mt-2 tracking-tight">{stat.value}</h3>
//               <p className={`text-[10px] font-bold mt-2 inline-block px-2 py-0.5 rounded-full ${stat.color} ${stat.link ? "cursor-pointer hover:underline" : ""}`}>
//                 {stat.change}
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-12 gap-6">
          
//           <div className="lg:col-span-7 space-y-6">
            
//             <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-black text-neutral-900 tracking-tight">Recent Blood Requests</h3>
//                 <button className="text-xs font-bold text-red-600 hover:underline">View All</button>
//               </div>

//               <div className="divide-y divide-neutral-100">
//                 {bloodRequests.map((req, i) => (
//                   <div key={i} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0 group cursor-pointer">
//                     <div className="flex items-center gap-3 min-w-0">
//                       <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-black text-xs shrink-0">
//                         {req.group}
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="text-xs font-black text-neutral-900 truncate group-hover:text-red-600 transition">{req.group} Blood Required</h4>
//                         <p className="text-[11px] text-neutral-400 truncate mt-0.5">{req.reason}</p>
//                       </div>
//                     </div>
//                     <div className="text-right shrink-0 flex items-center gap-4">
//                       <div>
//                         <p className="text-xs font-black text-neutral-900">{req.units}</p>
//                         <p className="text-[9px] text-neutral-400 mt-0.5">{req.time}</p>
//                       </div>
//                       <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${req.pColor} hidden sm:inline-block`}>
//                         {req.priority}
//                       </span>
//                       <ChevronRight className="text-neutral-300 w-3 h-3" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-black text-neutral-900 tracking-tight">Upcoming Appointments</h3>
//                 <button className="text-xs font-bold text-red-600 hover:underline">View Calendar</button>
//               </div>

//               <div className="divide-y divide-neutral-100">
//                 {appointments.map((app, i) => (
//                   <div key={i} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0 group cursor-pointer">
//                     <div className="flex items-center gap-3 min-w-0">
//                       <div className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 text-xs shrink-0 font-bold">
//                         {app.name.charAt(0)}
//                       </div>
//                       <div className="min-w-0">
//                         <h4 className="text-xs font-black text-neutral-900 truncate">{app.name}</h4>
//                         <p className="text-[11px] text-neutral-400 truncate mt-0.5">{app.type}</p>
//                       </div>
//                     </div>
//                     <div className="text-right shrink-0 flex items-center gap-4">
//                       <div>
//                         <p className="text-xs font-black text-neutral-900">{app.time}</p>
//                         <p className="text-[9px] text-neutral-400 mt-0.5">{app.hour}</p>
//                       </div>
//                       <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${app.sColor}`}>
//                         {app.status}
//                       </span>
//                       <ChevronRight className="text-neutral-300 w-3 h-3" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Right Grid Layout Panel (5 Columns) */}
//           <div className="lg:col-span-5 space-y-6">
            
//             <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-black text-neutral-900 tracking-tight">Blood Inventory <span className="text-xs text-neutral-400 font-medium">(Units in Stock)</span></h3>
//                 <button className="text-xs font-bold text-red-600 hover:underline">View All</button>
//               </div>

//               <div className="grid grid-cols-4 gap-3">
//                 {inventory.map((item, i) => (
//                   <div key={i} className="border border-neutral-100 rounded-xl p-2.5 text-center bg-neutral-50/40 group hover:border-red-200 transition">
//                     <div className="flex items-center justify-center gap-0.5 text-red-600 text-xs font-black">
//                       <Droplet className="w-2.5 h-2.5 fill-current" /> {item.group}
//                     </div>
//                     <div className="text-sm font-black text-neutral-900 mt-1.5 leading-none">{item.units}</div>
//                     <p className="text-[9px] text-neutral-400 mt-1">Units</p>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full border border-red-600 text-red-600 hover:bg-red-50 font-bold py-2.5 rounded-xl text-xs transition mt-2 shadow-sm">
//                 Manage Inventory
//               </button>
//             </div>

//             <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm space-y-4">
//               <h3 className="text-sm font-black text-neutral-900 tracking-tight">Quick Actions</h3>
              
//               <div className="grid grid-cols-3 gap-3">
//                 {quickActions.map((act, i) => (
//                   <button key={i} className="border border-neutral-100 rounded-xl p-3 flex flex-col items-center justify-center text-center bg-neutral-50/20 group hover:border-red-500/20 hover:bg-red-50/10 transition">
//                     <div className="w-9 h-9 rounded-xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
//                       {act.icon}
//                     </div>
//                     <span className="text-[10px] font-bold text-neutral-600 group-hover:text-neutral-900 transition mt-2 leading-tight">
//                       {act.label}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//       </main>
//     </div>
//   );
// };

// export default HospitalDashboard;






import React, { useState } from "react";
import { Droplet, Heart, Building2, Calendar, FileText, Bell, Settings, HelpCircle, Shield, Search, Phone, Mail, MapPin } from "lucide-react";

const bloodInventory = [
    { type: "O+", units: 320 },
    { type: "O-", units: 85 },
    { type: "A+", units: 210 },
    { type: "A-", units: 60 },
    { type: "B+", units: 190 },
    { type: "B-", units: 45 },
    { type: "AB+", units: 90 },
    { type: "AB-", units: 30 },
];

const requests = [
    {
        blood: "O+ Blood Required",
        reason: "Emergency Surgery",
        units: "10 Units",
        priority: "High Priority",
        date: "15 May 2024, 10:30 AM",
    },
    {
        blood: "B+ Blood Required",
        reason: "Accident Case",
        units: "6 Units",
        priority: "Medium Priority",
        date: "15 May 2024, 12:45 PM",
    },
    {
        blood: "A- Blood Required",
        reason: "Thalassemia Patient",
        units: "4 Units",
        priority: "Low Priority",
        date: "15 May 2024, 02:15 PM",
    },
    {
        blood: "AB+ Blood Required",
        reason: "Cancer Treatment",
        units: "8 Units",
        priority: "Medium Priority",
        date: "15 May 2024, 03:30 PM",
    },
];

const appointments = [
    {
        name: "Rahul Patil",
        type: "Whole Blood Donation",
        date: "15 May 2024",
        time: "09:30 AM",
        status: "Confirmed",
    },
    {
        name: "Priya Sharma",
        type: "Platelet Donation",
        date: "15 May 2024",
        time: "11:00 AM",
        status: "Confirmed",
    },
    {
        name: "Amit Verma",
        type: "Whole Blood Donation",
        date: "15 May 2024",
        time: "01:30 PM",
        status: "Scheduled",
    },
];

const menuItems = [
    { icon: "⌂", name: "Dashboard" },
    { icon: "♙", name: "Blood Inventory" },
    { icon: "▣", name: "Blood Requests", badge: 8 },
    { icon: "♧", name: "Donor Requests" },
    { icon: "□", name: "Appointments" },
    { icon: "♧", name: "Donor Management" },
    { icon: "▥", name: "Reports & Analytics" },
    { icon: "♧", name: "Notifications", badge: 5 },
    { icon: "⚙", name: "Profile Settings" },
    { icon: "♧", name: "Staff Management" },
    { icon: "?", name: "Help & Support" },
];

function Hospitals() {
    const [activeTab, setActiveTab] = useState("Dashboard");

    const renderContent = () => {
        switch (activeTab) {
            case "Dashboard":
                return <DashboardView setActiveTab={setActiveTab} />;
            case "Blood Inventory":
                return <BloodInventoryView />;
            case "Blood Requests":
                return <BloodRequestsView />;
            case "Donor Requests":
                return <DonorRequestsView />;
            case "Appointments":
                return <AppointmentsView />;
            case "Donor Management":
                return <DonorManagementView />;
            case "Reports & Analytics":
                return <ReportsAnalyticsView />;
            case "Notifications":
                return <NotificationsView />;
            case "Profile Settings":
                return <ProfileSettingsView />;
            case "Staff Management":
                return <StaffManagementView />;
            case "Help & Support":
                return <HelpSupportView />;
            default:
                return <DashboardView setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="flex gap-7 bg-[#fafafa] p-4 lg:p-7">
                {/* ================= SIDEBAR ================= */}
                <aside className="hidden w-[255px] shrink-0 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:block">
                    <div className="flex gap-3 border-b border-gray-200 pb-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-3xl">
                            🏥
                        </div>
                        <div>
                            <h3 className="mt-1 text-sm font-bold">City Care Hospital</h3>
                            <span className="mt-1 inline-block rounded-full bg-green-100 px-2 py-1 text-[9px] font-bold text-green-700">
                                ● Verified Hospital
                            </span>
                            <p className="mt-2 text-[10px] text-gray-600">Pune, Maharashtra</p>
                        </div>
                    </div>

                    <div className="mt-3">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                onClick={() => setActiveTab(item.name)}
                                className={`mb-1 flex h-10 cursor-pointer items-center gap-3 rounded-md px-3 text-xs font-semibold ${
                                    activeTab === item.name
                                        ? "bg-red-50 text-red-600"
                                        : "text-gray-800 hover:bg-gray-50"
                                }`}
                            >
                                <span className="w-5 text-center text-base">{item.icon}</span>
                                <span>{item.name}</span>
                                {item.badge && (
                                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[9px] text-white">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-4 text-center">
                        <div className="flex justify-center text-red-600">
                            <Droplet className="h-10 w-10 fill-red-600 text-red-600" />
                        </div>
                        <h4 className="mt-2 text-sm font-bold text-red-600">Every Drop Counts</h4>
                        <p className="mt-1 text-[11px] leading-5 text-gray-600">Together we can save more lives.</p>
                        <button 
                            onClick={() => setActiveTab("Blood Requests")}
                            className="mt-3 w-full rounded-md bg-red-600 py-2 text-[11px] font-bold text-white hover:bg-red-700 cursor-pointer"
                        >
                            Request Blood Now
                        </button>
                    </div>
                </aside>

                {/* ================= DYNAMIC MAIN CONTENT ================= */}
                <section className="min-w-0 flex-1">
                    {renderContent()}
                </section>
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="border-t border-gray-200 bg-white px-8 py-7 lg:px-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-7 items-center justify-center bg-red-600 text-white font-bold">
                                ♥
                            </div>
                            <div>
                                <h3 className="text-base font-bold">
                                    Blood<span>Connect</span>
                                </h3>
                                <p className="text-[8px]">Save Blood. Save Lives.</p>
                            </div>
                        </div>
                        <p className="mt-3 max-w-[220px] text-[9px] leading-5 text-gray-600">
                            A platform that connects blood donors with patients and hospitals in real-time during emergencies.
                        </p>
                    </div>

                    <FooterColumn title="Quick Links" items={["Home", "Find Donors", "Request Blood", "For Hospitals", "About Us", "Contact Us"]} />
                    <FooterColumn title="For Donors" items={["Donor Dashboard", "Donation History", "Eligibility", "Donor Guidelines", "Become a Donor"]} />
                    <FooterColumn title="Support" items={["Help Center", "FAQs", "Terms & Conditions", "Privacy Policy"]} />
                    <FooterColumn title="Contact Us" items={["+91 98765 43210", "support@bloodconnect.com", "Pune, Maharashtra, India"]} />
                </div>

                <div className="mt-7 border-t border-gray-200 pt-2 text-center text-[9px] text-gray-500">
                    © 2024 BloodConnect. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

{/* ================= SECTION VIEWS ================= */}

function DashboardView({ setActiveTab }) {
    return (
        <div>
            <div className="flex min-h-[112px] items-center justify-between overflow-hidden rounded-lg bg-gradient-to-r from-white via-white to-red-50 px-5 border border-gray-200">
                <div>
                    <h2 className="text-xl font-bold lg:text-2xl">
                        Welcome back, City Care Hospital! 👋
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Manage blood inventory, requests and connect with life savers.
                    </p>
                </div>
                <div className="hidden text-7xl opacity-80 md:block">🏥</div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    icon={<Droplet className="h-6 w-6 fill-red-600 text-red-600" />}
                    iconBg="bg-red-50"
                    value="1,250"
                    title="Total Units in Stock"
                    bottom="+120 this week"
                    bottomColor="text-green-600"
                />
                <StatCard
                    icon="▣"
                    iconBg="bg-blue-50"
                    value="58"
                    title="Blood Requests"
                    bottom="8 Pending"
                    bottomColor="text-orange-500"
                />
                <StatCard
                    icon="♧"
                    iconBg="bg-green-50"
                    value="96"
                    title="Donor Requests"
                    bottom="24 New"
                    bottomColor="text-green-600"
                />
                <StatCard
                    icon="▦"
                    iconBg="bg-yellow-50"
                    value="34"
                    title="Appointments Today"
                    bottom="View Schedule"
                    bottomColor="text-blue-600"
                />
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
                <div className="space-y-4">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <CardHeader title="Recent Blood Requests" onViewAll={() => setActiveTab("Blood Requests")} />
                        <div>
                            {requests.map((request) => (
                                <div
                                    key={request.blood}
                                    className="grid min-h-[68px] grid-cols-[40px_1fr_60px_15px] items-center gap-2 border-t border-gray-100 md:grid-cols-[43px_1.4fr_70px_100px_125px_15px]"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600">
                                        <Droplet className="h-5 w-5 fill-red-600 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-[11px] font-bold">{request.blood}</h4>
                                        <p className="mt-1 text-[9px] text-gray-500">{request.reason}</p>
                                    </div>
                                    <strong className="text-[10px]">{request.units}</strong>
                                    <Priority priority={request.priority} />
                                    <span className="hidden text-[8px] text-gray-500 md:block">{request.date}</span>
                                    <span className="text-2xl text-gray-500">›</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <CardHeader title="Upcoming Appointments" onViewAll={() => setActiveTab("Appointments")} />
                        {appointments.map((appointment, index) => (
                            <div
                                key={appointment.name}
                                className="grid min-h-[65px] grid-cols-[40px_1fr_15px] items-center gap-2 border-t border-gray-100 md:grid-cols-[42px_1.3fr_110px_75px_15px]"
                            >
                                <div className={`flex h-9 w-9 items-center justify-center rounded-full ${index === 0 ? "bg-green-50" : index === 1 ? "bg-blue-50" : "bg-purple-50"}`}>
                                    {index === 1 ? "👩" : "👨"}
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-bold">{appointment.name}</h4>
                                    <p className="mt-1 text-[9px] text-gray-500">{appointment.type}</p>
                                </div>
                                <div className="hidden text-[9px] md:flex md:flex-col">
                                    <strong>{appointment.date}</strong>
                                    <span className="mt-1">{appointment.time}</span>
                                </div>
                                <span className={`hidden w-fit rounded-full px-2 py-1 text-[8px] font-bold md:block ${appointment.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                                    {appointment.status}
                                </span>
                                <span className="text-2xl text-gray-500">›</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <CardHeader title="Blood Inventory (Units in Stock)" onViewAll={() => setActiveTab("Blood Inventory")} />
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {bloodInventory.map((blood) => (
                                <div key={blood.type} className="rounded-lg border border-gray-200 p-3">
                                    <div className="flex items-center gap-1 text-[11px] font-bold text-red-600">
                                        <Droplet className="h-3.5 w-3.5 fill-red-600 text-red-600" /> {blood.type}
                                    </div>
                                    <strong className="mt-3 block text-xl">{blood.units}</strong>
                                    <span className="text-[9px] text-gray-500">Units</span>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => setActiveTab("Blood Inventory")}
                            className="mt-3 w-full rounded-md border border-red-500 py-2 text-[11px] font-bold text-red-600 hover:bg-red-50 cursor-pointer"
                        >
                            Manage Inventory
                        </button>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <h3 className="mb-3 text-sm font-bold">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            <QuickAction icon={<Droplet className="h-5 w-5 fill-red-600 text-red-600" />} text="Request Blood" onClick={() => setActiveTab("Blood Requests")} />
                            <QuickAction icon="➤" text="Post Announcement" onClick={() => setActiveTab("Notifications")} />
                            <QuickAction icon={<Droplet className="h-5 w-5 fill-red-600 text-red-600" />} text="Add Inventory" onClick={() => setActiveTab("Blood Inventory")} />
                            <QuickAction icon="▥" text="View Reports" onClick={() => setActiveTab("Reports & Analytics")} />
                            <QuickAction icon="♧" text="Manage Staff" onClick={() => setActiveTab("Staff Management")} />
                            <QuickAction icon="◉" text="Help & Support" onClick={() => setActiveTab("Help & Support")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BloodInventoryView() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Blood Inventory Management</h2>
                    <p className="text-xs text-gray-600 mt-1">Track and manage available blood stock units across all blood groups.</p>
                </div>
                <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">+ Add Stock Units</button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {bloodInventory.map((blood) => (
                    <div key={blood.type} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1 text-sm font-bold text-red-600">
                                <Droplet className="h-4 w-4 fill-red-600 text-red-600" /> {blood.type}
                            </span>
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-bold text-green-700">Available</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{blood.units}</h3>
                        <p className="text-xs text-gray-500">Units in storage</p>
                        <div className="mt-4 flex gap-2">
                            <button className="flex-1 rounded-md border border-gray-200 py-1.5 text-[10px] font-bold hover:bg-gray-50 cursor-pointer">Update</button>
                            <button className="flex-1 rounded-md bg-red-50 py-1.5 text-[10px] font-bold text-red-600 hover:bg-red-100 cursor-pointer">Request More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BloodRequestsView() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Blood Requests</h2>
                    <p className="text-xs text-gray-600 mt-1">Active emergency blood requirements from patients and doctors.</p>
                </div>
                <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">+ New Blood Request</button>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-3">
                {requests.map((request, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                                <Droplet className="h-5 w-5 fill-red-600 text-red-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">{request.blood}</h4>
                                <p className="text-xs text-gray-500">{request.reason} • <strong className="text-gray-800">{request.units}</strong></p>
                                <span className="text-[10px] text-gray-400">{request.date}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                            <Priority priority={request.priority} />
                            <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">Fulfill Request</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DonorRequestsView() {
    const donorRequests = [
        { name: "Suresh Patil", blood: "O+", date: "15 May 2024", time: "10:00 AM", status: "Pending Approval" },
        { name: "Neha Kulkarni", blood: "B+", date: "15 May 2024", time: "11:30 AM", status: "Approved" },
    ];
    return (
        <div className="space-y-4">
            <div className="rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold">Donor Requests</h2>
                <p className="text-xs text-gray-600 mt-1">Review and approve verification or donation requests sent by individual donors.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-3">
                {donorRequests.map((req, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 text-lg">
                                🤝
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">{req.name} <span className="text-red-600">({req.blood})</span></h4>
                                <p className="text-xs text-gray-500">Requested slot: {req.date} at {req.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-bold text-orange-700">{req.status}</span>
                            <button className="rounded-md bg-green-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-green-700 cursor-pointer">Approve</button>
                            <button className="rounded-md bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-700 hover:text-white cursor-pointer">Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AppointmentsView() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Appointments Schedule</h2>
                    <p className="text-xs text-gray-600 mt-1">Manage donor check-ins, whole blood, and platelet collection slots.</p>
                </div>
                <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">+ Schedule Slot</button>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-3">
                {appointments.map((appt, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                👤
                            </div>
                            <div>
                                <h4 className="text-sm font-bold">{appt.name}</h4>
                                <p className="text-xs text-gray-500">{appt.type}</p>
                                <span className="text-[10px] text-gray-400">{appt.date} at {appt.time}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-700">{appt.status}</span>
                            <button className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-bold hover:bg-gray-50 cursor-pointer">Reschedule</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DonorManagementView() {
    const donors = [
        { name: "Rahul Patil", blood: "O+", phone: "+91 98765 43210", lastDonation: "3 months ago", totalDonations: 4 },
        { name: "Priya Sharma", blood: "A+", phone: "+91 91234 56789", lastDonation: "6 months ago", totalDonations: 2 },
        { name: "Amit Verma", blood: "B-", phone: "+91 99887 76655", lastDonation: "1 year ago", totalDonations: 5 },
    ];
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Donor Management</h2>
                    <p className="text-xs text-gray-600 mt-1">List of registered donors and their respective donation history.</p>
                </div>
                <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">Register Donor</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {donors.map((donor, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-2">
                        <div className="flex items-center justify-between">
                            <h4 className="font-bold text-sm">{donor.name}</h4>
                            <span className="rounded-full bg-red-100 text-red-600 font-bold px-2 py-0.5 text-xs">{donor.blood}</span>
                        </div>
                        <p className="text-xs text-gray-500">📞 {donor.phone}</p>
                        <p className="text-xs text-gray-500">🩸 Total Donations: {donor.totalDonations}</p>
                        <p className="text-xs text-gray-500">⏰ Last Donation: {donor.lastDonation}</p>
                        <button className="mt-2 w-full rounded-md border border-red-500 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50 cursor-pointer">View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ReportsAnalyticsView() {
    return (
        <div className="space-y-4">
            <div className="rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold">Reports & Analytics</h2>
                <p className="text-xs text-gray-600 mt-1">Overview of monthly blood consumption, donations, and emergency fulfillment stats.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="text-sm font-bold mb-3">Monthly Blood Collection Trend</h3>
                    <div className="h-48 flex items-end justify-between gap-2 pt-6 px-2 bg-gray-50 rounded-lg">
                        {[40, 65, 80, 55, 90, 75, 100].map((h, i) => (
                            <div key={i} className="w-full bg-red-500 rounded-t-md flex items-center justify-center text-[10px] text-white font-bold" style={{ height: `${h}%` }}>
                                {h}u
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500 mt-2 font-semibold">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                    </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <h3 className="text-sm font-bold mb-3">Request Fulfillment Rate</h3>
                    <div className="space-y-3 mt-4">
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Emergency Surgery Requests</span>
                                <span>95%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[95%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Accident Cases</span>
                                <span>88%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[88%]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                                <span>Thalassemia Patients</span>
                                <span>100%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[100%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotificationsView() {
    const notifs = [
        { title: "New Emergency Request", desc: "10 Units of O+ required for City Care Hospital emergency.", time: "10 mins ago", unread: true },
        { title: "Donor Appointment Confirmed", desc: "Rahul Patil booked a slot for Whole Blood Donation.", time: "1 hour ago", unread: true },
        { title: "Low Stock Alert", desc: "AB- blood stock has dropped below 30 units.", time: "Yesterday", unread: false },
    ];
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Notifications & Alerts</h2>
                    <p className="text-xs text-gray-600 mt-1">System updates, emergency alerts, and donor messages.</p>
                </div>
                <button className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-bold hover:bg-gray-50 cursor-pointer">Mark all as read</button>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-3">
                {notifs.map((n, i) => (
                    <div key={i} className={`flex items-start justify-between p-3 rounded-lg border ${n.unread ? "bg-red-50/50 border-red-100" : "bg-white border-gray-100"}`}>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold">{n.title}</h4>
                                {n.unread && <span className="h-2 w-2 rounded-full bg-red-600"></span>}
                            </div>
                            <p className="text-xs text-gray-600 mt-1">{n.desc}</p>
                            <span className="text-[10px] text-gray-400 mt-2 block">{n.time}</span>
                        </div>
                        <button className="text-xs text-red-600 font-bold hover:underline cursor-pointer">View</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProfileSettingsView() {
    return (
        <div className="space-y-4">
            <div className="rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold">Profile Settings</h2>
                <p className="text-xs text-gray-600 mt-1">Update your hospital details, address, emergency contact numbers, and login credentials.</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Hospital Name</label>
                        <input type="text" defaultValue="City Care Hospital" className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-red-600" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                        <input type="email" defaultValue="contact@citycarehospital.com" className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-red-600" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                        <input type="text" defaultValue="+91 98765 43210" className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-red-600" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">City / Location</label>
                        <input type="text" defaultValue="Pune, Maharashtra" className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-red-600" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Hospital Address</label>
                    <textarea rows="3" defaultValue="123 Healthcare Avenue, Near Central Mall, Pune, Maharashtra - 411001" className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:outline-red-600"></textarea>
                </div>
                <button className="rounded-md bg-red-600 px-5 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">Save Changes</button>
            </div>
        </div>
    );
}

function StaffManagementView() {
    const staff = [
        { name: "Dr. Ramesh Kulkarni", role: "Blood Bank Head", email: "ramesh@citycare.com", access: "Full Access" },
        { name: "Sunita Deshmukh", role: "Inventory Manager", email: "sunita@citycare.com", access: "Inventory & Requests" },
        { name: "Vikram Malhotra", role: "Receptionist / Coordinator", email: "vikram@citycare.com", access: "Appointments" },
    ];
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold">Staff Management</h2>
                    <p className="text-xs text-gray-600 mt-1">Manage hospital staff permissions and system access.</p>
                </div>
                <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 cursor-pointer">+ Add Staff Member</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {staff.map((s, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-2">
                        <h4 className="font-bold text-sm">{s.name}</h4>
                        <p className="text-xs text-red-600 font-semibold">{s.role}</p>
                        <p className="text-xs text-gray-500">✉️ {s.email}</p>
                        <p className="text-[10px] bg-gray-100 rounded px-2 py-1 w-fit font-bold text-gray-700">Access: {s.access}</p>
                        <div className="flex gap-2 pt-2">
                            <button className="flex-1 rounded-md border border-gray-200 py-1.5 text-[10px] font-bold hover:bg-gray-50 cursor-pointer">Edit</button>
                            <button className="flex-1 rounded-md bg-red-50 py-1.5 text-[10px] font-bold text-red-600 hover:bg-red-100 cursor-pointer">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HelpSupportView() {
    return (
        <div className="space-y-4">
            <div className="rounded-lg bg-white p-5 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold">Help & Support</h2>
                <p className="text-xs text-gray-600 mt-1">Get assistance, read guides, or reach out to the BloodConnect support team.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm space-y-3">
                    <h3 className="text-sm font-bold">Frequently Asked Questions</h3>
                    <div className="space-y-2 text-xs">
                        <details className="border-b border-gray-100 pb-2">
                            <summary className="font-bold cursor-pointer">How to update blood stock quantities?</summary>
                            <p className="text-gray-500 mt-1">Go to Blood Inventory section and click on 'Update' or 'Add Stock' button.</p>
                        </details>
                        <details className="border-b border-gray-100 pb-2">
                            <summary className="font-bold cursor-pointer">How do emergency requests work?</summary>
                            <p className="text-gray-500 mt-1">Emergency requests instantly broadcast notifications to nearby verified donors.</p>
                        </details>
                        <details className="pb-2">
                            <summary className="font-bold cursor-pointer">How to add new hospital staff?</summary>
                            <p className="text-gray-500 mt-1">Navigate to Staff Management and click on 'Add Staff Member'.</p>
                        </details>
                    </div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm space-y-3">
                    <h3 className="text-sm font-bold">Contact Support</h3>
                    <p className="text-xs text-gray-600">Facing technical difficulties or have questions? Our support team is available 24/7.</p>
                    <div className="space-y-2 text-xs text-gray-700">
                        <p>📞 <strong>Helpline:</strong> +91 1800-123-4567</p>
                        <p>✉️ <strong>Email:</strong> support@bloodconnect.com</p>
                    </div>
                    <button className="rounded-md bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700 mt-2 cursor-pointer">Raise a Ticket</button>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, iconBg, value, title, bottom, bottomColor }) {
    return (
        <div className="flex min-h-[105px] items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl ${iconBg}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold">{value}</h3>
                <p className="mt-1 text-[10px] text-gray-600">{title}</p>
                <span className={`mt-2 block text-[10px] font-semibold ${bottomColor}`}>{bottom}</span>
            </div>
        </div>
    );
}

function CardHeader({ title, onViewAll }) {
    return (
        <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold">{title}</h3>
            <button onClick={onViewAll} className="text-[11px] font-bold text-red-600 cursor-pointer">View All</button>
        </div>
    );
}

function Priority({ priority }) {
    let classes = "bg-green-100 text-green-700";
    if (priority === "High Priority") classes = "bg-red-100 text-red-600";
    if (priority === "Medium Priority") classes = "bg-orange-100 text-orange-600";

    return (
        <span className={`hidden w-fit rounded-full px-2 py-1 text-[8px] font-bold md:block ${classes}`}>
            {priority}
        </span>
    );
}

function QuickAction({ icon, text, onClick }) {
    return (
        <button onClick={onClick} className="flex h-16 flex-col items-center justify-center gap-1 rounded-md border border-gray-200 bg-white text-[9px] font-bold hover:border-red-200 hover:bg-red-50 cursor-pointer">
            <span className="text-xl text-red-600">{icon}</span>
            {text}
        </button>
    );
}

function FooterColumn({ title, items }) {
    return (
        <div className="flex flex-col gap-2">
            <h4 className="mb-1 text-xs font-bold">{title}</h4>
            {items.map((item) => (
                <a key={item} href="#" className="text-[9px] text-gray-600 hover:text-red-600">
                    {item}
                </a>
            ))}
        </div>
    );
}

export default Hospitals;