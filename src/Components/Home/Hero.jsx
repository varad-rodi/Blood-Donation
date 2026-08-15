import heroImage from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";
 
function Hero() {
  const navigate= useNavigate();
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat  "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
   
      <div className="absolute inset-0 bg-white/35"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-8">

        <div className="w-full md:w-1/2">

          <span className="inline-block bg-red-100 text-red-600 font-semibold px-5 py-2 rounded-full mb-6 shadow">
            ❤️ Donate Blood, Save Lives
          </span>

          <h1 className="text-5xl md:text-3xl font-extrabold leading-tight text-slate-900">
            Every
            <span className="text-red-600"> Drop </span>
            <br />
            Can Save Someone's Life.
          </h1>

          <p className="mt-8 text-xl text-gray-700 leading-9 max-w-xl">
            LifeDrop connects blood donors, hospitals, and patients through a
            modern digital platform. Donate blood, request blood, and help save
            lives with just a few clicks.
          </p>

          <div className="flex gap-6 mt-10">
            <button onClick={() => navigate("/donate")} className="px-6 py-2 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition duration-300">
              Donate Now
            </button>

            <button onClick={() => navigate("/blood-stock")} className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition">
              Request Blood
            </button>
          </div>

          <div className="flex gap-12 mt-14">

            <div>
              <h2 className="text-4xl font-bold text-red-600">1500+</h2>
              <p className="text-gray-700 font-medium">Registered Donors</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-600">800+</h2>
              <p className="text-gray-700 font-medium">Blood Units</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-red-600">3500+</h2>
              <p className="text-gray-700 font-medium">Lives Saved</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;