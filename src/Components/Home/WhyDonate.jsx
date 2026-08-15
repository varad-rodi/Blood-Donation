import { motion } from "framer-motion";
import aboutbgImage from "../../assets/aboutbg.png";
import {
  FaHeartbeat,
  FaTint,
  FaHospital,
  FaHandHoldingHeart,
} from "react-icons/fa";
function WhyDonate() {
  const cards = [
    {
      icon: <FaHeartbeat />,
      title: "Save Lives",
      text: "A single blood donation can save up to three lives during emergencies, surgeries, and critical treatments.",
    },
    {
      icon: <FaTint />,
      title: "Support Patients",
      text: "Blood is always needed for accident victims, cancer patients, and those undergoing major surgeries.",
    },
    {
      icon: <FaHospital />,
      title: "Help Hospitals",
      text: "Your contribution helps hospitals maintain a sufficient blood supply for emergencies.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Be a Hero",
      text: "One simple act of kindness can give someone another chance at life and inspire others to donate.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-red-50/40 to-white" style={{
                    backgroundImage: `url(${aboutbgImage})`,
                }}>
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold shadow">
            ❤️ Why Donate Blood?
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Your One Donation Can
            <span className="text-red-600"> Save Many Lives</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Blood cannot be manufactured. It can only come from generous
            donors. Every donation provides hope to patients fighting
            accidents, surgeries, cancer, and life-threatening illnesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              className="group relative overflow-hidden
              bg-white
              hover:bg-green-600
              rounded-3xl
              p-8
              border border-red-100
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-500"
            >

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-red-50 group-hover:bg-green-500 transition-all duration-500"></div>

              {/* Icon */}
              <div
                className="relative w-16 h-16 rounded-2xl
                bg-red-100
                text-red-600
                flex items-center justify-center
                text-3xl
                mb-6
                group-hover:bg-white
                group-hover:text-green-600
                transition-all
                duration-500"
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition duration-500">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7 group-hover:text-green-50 transition duration-500">
                {card.text}
              </p>

              {/* Bottom Line */}
              <div
                className="mt-8 h-1 w-10 bg-red-600 rounded-full
                group-hover:w-full
                group-hover:bg-white
                transition-all duration-500"
              ></div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyDonate;