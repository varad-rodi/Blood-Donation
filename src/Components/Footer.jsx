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
    <footer className="bg-gray-950 text-white pt-12 pb-6">

       
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <FaTint className="text-white text-xl" />
              </div>

              <h2 className="text-2xl font-bold">
                Life<span className="text-red-600">Drop</span>
              </h2>
            </div>

            <p className="text-gray-400 mt-4 leading-6 text-sm max-w-xs">
              Connecting blood donors, hospitals and patients through
              a secure, fast and reliable digital platform.
            </p>
 
            <div className="flex gap-3 mt-5">

              <div className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center cursor-pointer transition duration-300">
                <FaFacebookF className="text-sm" />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center cursor-pointer transition duration-300">
                <FaInstagram className="text-sm" />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center cursor-pointer transition duration-300">
                <FaLinkedinIn className="text-sm" />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center cursor-pointer transition duration-300">
                <FaGithub className="text-sm" />
              </div>

            </div>
          </div>

 
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-gray-300 text-sm">

              <li className="hover:text-red-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Donate
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Blood Stock
              </li>

              <li className="hover:text-red-500 cursor-pointer transition">
                Contact
              </li>

            </ul>
          </div>

 
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-red-500 mt-1 shrink-0" />
                <p className="text-gray-300">
                  +91 8767956920
                </p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-red-500 mt-1 shrink-0" />
                <p className="text-gray-300 break-all">
                  waghmarepranav46@gmail.com
                </p>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 shrink-0" />
                <p className="text-gray-300">
                  Ahilyanagar, Maharashtra, India
                </p>
              </div>

            </div>
          </div>

 
          <div>
            <div className="bg-red-600 rounded-2xl p-6">

              <FaHeart className="text-white text-4xl mb-4" />

              <h2 className="text-xl font-bold">
                Emergency Blood
              </h2>

              <p className="mt-3 text-red-100 leading-6 text-sm">
                Need blood urgently?
                Contact us anytime. We are available 24×7 to help save lives.
              </p>

              <button className="mt-5 bg-white text-red-600 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition duration-300">
                Request Blood
              </button>

            </div>
          </div>

        </div>


   
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          

          

        </div>

      </div>

    </footer>
  );
}

export default Footer;