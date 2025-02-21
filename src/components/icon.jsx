import { useState, useEffect } from "react";
import { FaRocket, FaUsers, FaSmile, FaClock } from "react-icons/fa";
import bgImage from "./bgparallax7.jpg"; // Add your background image

const counters = [
  { id: 1, icon: <FaRocket size={40} />, target: 1200, label: "Finishing Projects" },
  { id: 2, icon: <FaUsers size={40} />, target: 195, label: "Team Members" },
  { id: 3, icon: <FaSmile size={40} />, target: 850, label: "Happy Clients" },
  { id: 4, icon: <FaClock size={40} />, target: 26, label: "Years Experience" },
];

export default function CounterSection() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) =>
          count < counters[i].target ? count + Math.ceil(counters[i].target / 100) : counters[i].target
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }} // Background image
    >
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {counters.map((counter, index) => (
            <div key={counter.id} className="text-white p-6">
              <div className="flex justify-center mb-4">{counter.icon}</div>
              <span className="text-4xl font-bold">{counts[index]}+</span>
              <h3 className="text-lg mt-2">{counter.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
