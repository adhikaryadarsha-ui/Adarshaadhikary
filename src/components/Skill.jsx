import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";
import { FaPhp, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from "react-icons/tb";
import { MdAccessibility, MdDevices } from "react-icons/md";
import { AiOutlineLayout } from "react-icons/ai";

import {
  SiPostgresql,
  SiTailwindcss,
  SiJquery,

} from "react-icons/si";
import { useEffect, useState } from "react";

const Skills = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100; // total projects example

    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 40);
  }, []);

  return (
    <>
      <section className="py-20 bg-gray-50 rounded-edge mt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl text-center font-black mb-16">
            My <span className="font-bold text-orange-600">Skills</span>
          </h1>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<FaHtml5 className="text-blue-500" />}
              name="HTML5"
              percent="95%"
            />
            <SkillCard
              icon={<FaCss3Alt className="text-blue-500" />}
              name="CSS3"
              percent="90%"
            />
            <SkillCard
              icon={<FaJs className="text-yellow-500" />}
              name="JavaScript"
              percent="85%"
            />
            <SkillCard
              icon={<FaReact className="text-blue-500" />}
              name="React.js"
              percent="80%"
            />
            <SkillCard
              icon={<FaLaravel className="text-red-500" />}
              name="Laravel"
              percent="40%"
            />
            <SkillCard
              icon={<SiTailwindcss className="text-blue-500" />}
              name="Tailwind CSS"
              percent="85%"
            />
            <SkillCard
              icon={<FaBootstrap className="text-blue-500" />}
              name="Bootstrap"
              percent="90%"
            />
            <SkillCard
              icon={<SiJquery className="text-pink-600" />}
              name="jQuery"
              percent="80%"
            />
          </div>

          {/* Animated Counter Section */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
            <Counter number="6+" text="Years Experience" />
            <Counter number={count} text="Projects Completed" />
            <Counter number="65+" text="Web Designs" />
            <Counter number="5+" text="Govt Projects" />
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl text-center font-black mb-16">
            Additional <span className="font-bold text-orange-600">Skills</span>
          </h1>
          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Knowledge */}
            <div className="skill-box">
              <h3 className="skill-title text-xl mb-5">Backend Knowledge</h3>

              <SkillItem
                icon={<FaLaravel className="text-red-500" />}
                text="Basic Laravel"
              />
              <SkillItem
                icon={<FaPhp className="text-indigo-500" />}
                text="Basic PHP"
              />
              <SkillItem
                icon={<SiPostgresql className="text-blue-600" />}
                text="PostgreSQL (Basic)"
              />
            </div>

            {/* Design Tools */}
            <div className="skill-box">
              <h3 className="skill-title text-xl mb-5">Design Tools</h3>

              <SkillItem
                icon={<TbBrandAdobePhotoshop className="text-blue-500" />}
                text="Adobe Photoshop"
              />
              <SkillItem
                icon={<TbBrandAdobeIllustrator className="text-orange-500" />}
                text="Adobe Illustrator"
              />
            </div>

            {/* Other Skills */}
            <div className="skill-box">
              <h3 className="skill-title text-xl mb-5">Other Skills</h3>

              <SkillItem
                icon={<MdAccessibility className="text-green-600" />}
                text="WCAG Accessibility Guidelines"
              />
              <SkillItem
                icon={<FaDatabase className="text-purple-600" />}
                text="GIGW Guidelines"
              />
              <SkillItem
                icon={<MdDevices className="text-blue-600" />}
                text="Cross-Browser Compatibility"
              />
              <SkillItem
                icon={<AiOutlineLayout className="text-pink-500" />}
                text="UI/UX Implementation"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

const SkillCard = ({ icon, name, percent }) => {
  return (
    <div className="bg-white p-6  rounded-xl shadow-md hover:shadow-2xl transition transform hover:rotate-1 hover:-translate-y-2">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-3">{name}</h3>
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-orange-400 h-2 rounded"
          style={{ width: percent }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{percent}</p>
    </div>
  );
};

const Counter = ({ number, text }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
      <h3 className="text-3xl font-bold text-gray-600">{number}</h3>
      <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
};

const SkillItem = ({ icon, text }) => {
  return (
    <div className="flex items-center border-1 border-gray-300 mb-3 gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
      <div className="text-xl">{icon}</div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};
