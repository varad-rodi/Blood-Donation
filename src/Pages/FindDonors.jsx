import React, { useState } from "react";
import { 
  FaSearch, 
  FaUndo, 
  FaMapMarkerAlt, 
  FaCrosshairs, 
  FaClock, 
  FaFilter, 
  FaUser, 
  FaChevronRight, 
  FaChevronLeft, 
  FaThLarge, 
  FaList 
} from "react-icons/fa";

const FindDonors = () => {
  const [searchFilters, setSearchFilters] = useState({
    bloodGroup: "O+",
    location: "Pune, Maharashtra",
    radius: "10 km",
    availability: "Available Now"
  });

  const [sidebarFilters, setSidebarFilters] = useState({
    availability: "now",
    gender: "all",
    donorType: [],
    sortBy: "nearest"
  });

  const donorsData = [
    { id: 1, name: "Rahul Patil", distance: "2.4 km away", status: "Available Now", statusColor: "text-green-600 bg-green-50 border-green-100", group: "O+", age: 26, gender: "Male", type: "Regular Donor" },
    { id: 2, name: "Priya Sharma", distance: "3.1 km away", status: "Available Now", statusColor: "text-green-600 bg-green-50 border-green-100", group: "O+", age: 24, gender: "Female", type: "Regular Donor" },
    { id: 3, name: "Amit Verma", distance: "4.2 km away", status: "Available Now", statusColor: "text-green-600 bg-green-50 border-green-100", group: "O+", age: 30, gender: "Male", type: "Regular Donor" },
    { id: 4, name: "Sagar Bhise", distance: "4.8 km away", status: "Available in 2 hrs", statusColor: "text-amber-600 bg-amber-50 border-amber-100", group: "O+", age: 28, gender: "Male", type: "Regular Donor" },
    { id: 5, name: "Neha Kulkarni", distance: "5.6 km away", status: "Available in 5 hrs", statusColor: "text-amber-600 bg-amber-50 border-amber-100", group: "O+", age: 27, gender: "Female", type: "Regular Donor" },
    { id: 6, name: "Vikram Singh", distance: "6.3 km away", status: "Available in 6 hrs", statusColor: "text-amber-600 bg-amber-50 border-amber-100", group: "O+", age: 31, gender: "Male", type: "First Time Donor" }
  ];

  const handleReset = () => {
    setSearchFilters({ bloodGroup: "O+", location: "Pune, Maharashtra", radius: "10 km", availability: "Available Now" });
    setSidebarFilters({ availability: "now", gender: "all", donorType: [], sortBy: "nearest" });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans pb-16 pt-30">
      
      <section className="bg-neutral-50/60 border-b border-neutral-100 py-12 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden md:block">
          <svg width="400" height="100" viewBox="0 0 400 100" className="text-red-600 stroke-current fill-none stroke-[2]">
            <path d="M0,50 L120,50 L140,20 L160,80 L180,45 L190,55 L200,50 L400,50" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight flex items-center gap-2">
                Find Donors. <span className="text-red-600">Save Lives.</span>
              </h1>
              <p className="text-sm text-neutral-500 mt-1">Search for verified blood donors near you and connect in real time.</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/20 text-white text-xl shrink-0">
              <FaSearch />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 bg-white p-4 rounded-2xl border border-neutral-200/80 shadow-sm">
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Blood Group</label>
              <select 
                value={searchFilters.bloodGroup}
                onChange={(e) => setSearchFilters({...searchFilters, bloodGroup: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500"
              >
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Location</label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-red-600 text-xs" />
                <input 
                  type="text" 
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-8 pr-8 py-2.5 text-sm font-semibold outline-none focus:border-red-500"
                />
                <FaCrosshairs className="absolute right-3.5 top-3.5 text-neutral-400 text-xs cursor-pointer hover:text-red-600 transition" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Radius</label>
              <select 
                value={searchFilters.radius}
                onChange={(e) => setSearchFilters({...searchFilters, radius: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500"
              >
                {["5 km", "10 km", "20 km", "50 km"].map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Availability</label>
              <select 
                value={searchFilters.availability}
                onChange={(e) => setSearchFilters({...searchFilters, availability: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500"
              >
                {["Available Now", "Available in 24 Hours", "Available in 7 Days"].map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <div className="flex gap-2 items-end">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-md shadow-red-600/10">
                <FaSearch /> Search Donors
              </button>
              <button onClick={handleReset} className="border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-bold p-3 rounded-xl text-xs transition shrink-0" title="Reset Filters">
                <FaUndo />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-3 space-y-6 bg-white p-5 border border-neutral-200 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                <FaFilter className="text-xs text-neutral-500" /> Filters
              </span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Availability</label>
              <div className="space-y-2 pt-1">
                {[
                  { label: "Available Now", value: "now" },
                  { label: "Available in Next 24 Hours", value: "24h" },
                  { label: "Available in Next 7 Days", value: "7d" }
                ].map(item => (
                  <label key={item.value} className="flex items-center gap-2.5 text-xs font-medium text-neutral-600 cursor-pointer select-none">
                    <input 
                      type="radio" 
                      name="availability-filter"
                      checked={sidebarFilters.availability === item.value}
                      onChange={() => setSidebarFilters({...sidebarFilters, availability: item.value})}
                      className="w-4 h-4 accent-red-600 cursor-pointer" 
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-100">
              <label className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Gender</label>
              <div className="space-y-2 pt-1">
                {[
                  { label: "All", value: "all" },
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" }
                ].map(item => (
                  <label key={item.value} className="flex items-center gap-2.5 text-xs font-medium text-neutral-600 cursor-pointer select-none">
                    <input 
                      type="radio" 
                      name="gender-filter"
                      checked={sidebarFilters.gender === item.value}
                      onChange={() => setSidebarFilters({...sidebarFilters, gender: item.value})}
                      className="w-4 h-4 accent-red-600 cursor-pointer" 
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-100">
              <label className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Donor Type</label>
              <div className="space-y-2 pt-1">
                {["Regular Donor", "First Time Donor"].map(type => (
                  <label key={type} className="flex items-center gap-2.5 text-xs font-medium text-neutral-600 cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={sidebarFilters.donorType.includes(type)}
                      onChange={(e) => {
                        const updated = e.target.checked 
                          ? [...sidebarFilters.donorType, type]
                          : sidebarFilters.donorType.filter(t => t !== type);
                        setSidebarFilters({...sidebarFilters, donorType: updated});
                      }}
                      className="w-4 h-4 accent-red-600 rounded cursor-pointer" 
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-100">
              <label className="text-xs font-bold tracking-wider text-neutral-900 uppercase">Sort By</label>
              <select 
                value={sidebarFilters.sortBy}
                onChange={(e) => setSidebarFilters({...sidebarFilters, sortBy: e.target.value})}
                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2 text-xs font-semibold outline-none focus:border-red-500 mt-1"
              >
                <option value="nearest">Nearest First</option>
                <option value="available">Availability First</option>
              </select>
            </div>

            <button onClick={handleReset} className="w-full border border-red-200 hover:bg-red-50 text-red-600 font-bold py-2.5 rounded-xl text-xs transition mt-2">
              Clear All Filters
            </button>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-neutral-900">
                <span className="text-red-600 mr-1">125</span> Donors Found
              </div>
              <div className="flex items-center gap-1 bg-neutral-50 border border-neutral-200 rounded-xl p-1 text-xs">
                <button className="p-2 rounded-lg bg-white text-red-600 border border-neutral-100 shadow-sm" title="Grid View"><FaThLarge /></button>
                <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600" title="List View"><FaList /></button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {donorsData.map((donor) => (
                <div key={donor.id} className="bg-white border border-neutral-200 rounded-2xl p-5 relative group hover:border-red-500/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${donor.statusColor}`}>
                      ● {donor.status}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-red-50 border border-red-100 text-red-600 flex items-center justify-center font-black text-xs">
                      {donor.group}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center text-neutral-400 text-xl shrink-0 group-hover:border-red-200 transition">
                      <FaUser />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 group-hover:text-red-600 transition text-base">{donor.name}</h3>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5"><FaMapMarkerAlt className="text-red-500" /> {donor.distance}</p>
                      <p className="text-xs text-neutral-400 flex items-center gap-1 mt-0.5"><FaClock className="text-green-500" /> {donor.status}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center mt-4 pt-3 border-t border-neutral-100 text-xs font-semibold text-neutral-400">
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider">Age & Sex</span>
                      <span className="text-neutral-800 font-bold block mt-0.5">{donor.age} yrs · {donor.gender}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-400 uppercase tracking-wider">Donor Status</span>
                      <span className="text-red-600 font-bold block mt-0.5">{donor.type}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <button className="border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-bold py-2.5 rounded-xl text-xs transition">
                      View Profile
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm shadow-red-600/10">
                      Send Request
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-6 text-xs font-bold">
              <button className="p-2.5 rounded-xl border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 transition shrink-0"><FaChevronLeft /></button>
              <button className="w-9 h-9 rounded-xl bg-red-600 text-white shadow-md shadow-red-600/10">1</button>
              <button className="w-9 h-9 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 transition">2</button>
              <button className="w-9 h-9 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 transition">3</button>
              <span className="px-1 text-neutral-400">...</span>
              <button className="w-9 h-9 rounded-xl border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 transition">9</button>
              <button className="p-2.5 rounded-xl border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-50 transition shrink-0"><FaChevronRight /></button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FindDonors;
