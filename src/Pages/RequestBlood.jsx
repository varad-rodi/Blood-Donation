import React, { useState } from "react";
import { 
  FaPlusSquare, 
  FaUser, 
  FaCalendarAlt, 
  FaHospital, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaCommentAlt, 
  FaBell, 
  FaUndo, 
  FaPaperPlane, 
  FaTint, 
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle
} from "react-icons/fa";

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    unitsRequired: "",
    urgencyLevel: "",
    hospitalName: "",
    location: "",
    contactNumber: "",
    neededBy: "",
    additionalMessage: ""
  });

  const handleReset = () => {
    setFormData({
      patientName: "", age: "", gender: "", bloodGroup: "", unitsRequired: "",
      urgencyLevel: "", hospitalName: "", location: "", contactNumber: "", neededBy: "", additionalMessage: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting emergency blood request:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 font-sans pb-20 pt-32">
      
      {/* Top Hero Layout with Ambulance Grid Design */}
      <section className="bg-neutral-50/70 border-b border-neutral-100 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100 text-xs font-bold uppercase tracking-wider">
              <FaPlusSquare className="text-sm" /> Every Second Counts
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Request Blood. <span className="text-red-600">Save a Life.</span>
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl leading-relaxed">
              Create an emergency blood request and instantly broadcast it to verified matching donors in your city.
            </p>
          </div>

          {/* Premium Ambulance & Graphic Simulation Column */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative">
            <div className="flex items-center gap-6 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1idWxhbmNlfGVufDB8fDB8fHww" 
                alt="Emergency Ambulance" 
                className="w-56 h-36 object-cover rounded-2xl border-4 border-white shadow-xl shadow-neutral-200/80 transform -rotate-2"
              />
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center text-white text-3xl shadow-xl shadow-red-600/30 transform animate-bounce">
                <span className="font-sans font-black">+</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 opacity-40 pointer-events-none">
              <svg className="w-full h-12 text-red-500 stroke-current fill-none absolute -top-6" viewBox="0 0 300 50">
                <path strokeWidth="2" d="M0,25 L100,25 L110,5 L120,45 L130,20 L135,30 L140,25 L300,25" />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* Main Request Form & Grid Panel Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Block (8 Columns) */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
              <FaPlusSquare className="text-red-600 text-lg" />
              <h2 className="text-lg font-bold text-neutral-900">Create Emergency Blood Request</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Patient Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                  <input 
                    type="text" required placeholder="Enter patient name"
                    value={formData.patientName} onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Age *</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                  <input 
                    type="number" required placeholder="Enter age"
                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Gender *</label>
                <select 
                  required value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Blood Group Needed *</label>
                <select 
                  required value={formData.bloodGroup} onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                >
                  <option value="">Select blood group</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Units Required *</label>
                <select 
                  required value={formData.unitsRequired} onChange={(e) => setFormData({...formData, unitsRequired: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                >
                  <option value="">Select units</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(u => <option key={u} value={u}>{u} {u === 1 ? "Unit" : "Units"}</option>)}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Urgency Level *</label>
                <select 
                  required value={formData.urgencyLevel} onChange={(e) => setFormData({...formData, urgencyLevel: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                >
                  <option value="">Select urgency</option>
                  <option value="High">High (Within 2 Hours)</option>
                  <option value="Medium">Medium (Within 6 Hours)</option>
                  <option value="Low">Low (Within 24 Hours)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Hospital Name *</label>
              <div className="relative">
                <FaHospital className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                <input 
                  type="text" required placeholder="Enter hospital name and branch description"
                  value={formData.hospitalName} onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Location *</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-red-600 text-xs" />
                  <input 
                    type="text" required placeholder="Enter city or hospital area"
                    value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Contact Number *</label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                  <input 
                    type="tel" required placeholder="Enter contact number"
                    value={formData.contactNumber} onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Needed By *</label>
                <div className="relative">
                  <FaClock className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                  <input 
                    type="datetime-local" required
                    value={formData.neededBy} onChange={(e) => setFormData({...formData, neededBy: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition text-neutral-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wide">Additional Message (Optional)</label>
                <div className="relative">
                  <FaCommentAlt className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                  <input 
                    type="text" placeholder="Any additional details or requirements..."
                    value={formData.additionalMessage} onChange={(e) => setFormData({...formData, additionalMessage: e.target.value})}
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-semibold outline-none focus:border-red-500 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Verification Broadcaster Alert Box */}
            <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-red-600/10">
                <FaBell className="text-xs animate-swing" />
              </div>
              <div>
                <p className="text-xs font-bold text-red-600">Your request will be shared with nearby verified donors.</p>
                <p className="text-[11px] text-red-500/80 mt-0.5">Please ensure the contact number and location fields are perfectly accurate for faster coordination responses.</p>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <button 
                type="button" onClick={handleReset}
                className="inline-flex items-center gap-2 border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-bold py-3 px-6 rounded-xl text-xs transition"
              >
                <FaUndo /> Reset
              </button>
              <button 
                type="submit"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-xs transition shadow-md shadow-red-600/10"
              >
                <FaPaperPlane /> Submit Request
              </button>
            </div>
          </form>

          {/* Right Layout Info Panel Blocks (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Synchronized Request Summary Card */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-neutral-900 border-b border-neutral-100 pb-2.5">Request Summary</h3>
              <div className="divide-y divide-neutral-100 text-xs font-medium text-neutral-600 mt-2">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><FaTint className="text-red-600" /> Blood Group</span>
                  <span className="font-bold text-neutral-900">{formData.bloodGroup || "-"}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><FaPlusSquare className="text-neutral-400" /> Units Required</span>
                  <span className="font-bold text-neutral-900">{formData.unitsRequired ? `${formData.unitsRequired} Units` : "-"}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><FaExclamationTriangle className="text-neutral-400" /> Urgency Level</span>
                  <span className={`font-bold ${formData.urgencyLevel === "High" ? "text-red-600" : formData.urgencyLevel === "Medium" ? "text-amber-500" : "text-neutral-900"}`}>{formData.urgencyLevel || "-"}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-neutral-400" /> Location</span>
                  <span className="font-bold text-neutral-900 max-w-[150px] truncate">{formData.location || "-"}</span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="flex items-center gap-1.5"><FaClock className="text-neutral-400" /> Needed By</span>
                  <span className="font-bold text-neutral-900 max-w-[150px] truncate">{formData.neededBy ? new Date(formData.neededBy).toLocaleDateString() : "-"}</span>
                </div>
              </div>
            </div>

            {/* Urgency Matrix Matrix Guide Card */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-bold text-neutral-900 border-b border-neutral-100 pb-2.5">Urgency Guide</h3>
              <div className="space-y-3.5 mt-4 text-xs font-medium">
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-neutral-900">High Urgency</p>
                    <p className="text-neutral-400 text-[11px] mt-0.5">Immediate action / Dispatch within 2 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-neutral-900">Medium Urgency</p>
                    <p className="text-neutral-400 text-[11px] mt-0.5">Required within 6 hours timeline window</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-neutral-900">Low Urgency</p>
                    <p className="text-neutral-400 text-[11px] mt-0.5">Stable patient status / Needed within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Tips Block Card */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <FaInfoCircle className="text-blue-600" /> Tips for a Successful Request
              </h3>
              <ul className="space-y-2.5 mt-3 text-xs font-medium text-blue-800/90">
                <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" /> Provide accurate hospital branch address.</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" /> Keep your contact line clear and active.</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" /> High urgency alerts broadcast instantly.</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" /> Share only verified information blocks.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RequestBlood;
