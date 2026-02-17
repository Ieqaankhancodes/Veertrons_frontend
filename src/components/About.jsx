import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

import about from "../assets/about.avif";
import project1 from "../assets/b7670e83-a46b-436a-a207-275f067a7343.avif";
import project2 from "../assets/bc09167b-2ec5-4926-b7ed-78b73a82a962.avif";
import temp from "../assets/default.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const hoverCard = {
  whileHover: { y: -10, transition: { duration: 0.3 } },
};

const About = () => {
  const navigate = useNavigate();

  const story = {
    vision:
      "To be a global leader in engineering innovation, bridging the gap between academia and industry.",
    mission:
      "To provide industry-relevant training, high-quality components, and expert engineering services.",
  };

  const team = [
    {
      name: "Mr. Viraj J",
      role: "CEO & Founder",
      image: temp,
      bio: "Expert in Embedded Systems with 15 years in Industrial Automation.",
    },
    {
      name: "Mr. Shivanand Pattar",
      role: "CTO & Co-Founder",
      image: temp,
      bio: "Specialist in IoT architecture and sustainable hardware design.",
    },
    {
      name: "Mr. Sourabh Koli",
      role: "COO & Director",
      image: temp,
      bio: "Focused on bridging academia and industry.",
    },
  ];

  const projects = [
    {
      title: "EV Charging Station",
      tag: "Industrial",
      desc: "Advanced EV charging infrastructure solution.",
      image: project1,
    },
    {
      title: "Solar Panels",
      tag: "Sustainable Energy",
      desc: "High-efficiency solar solutions for diverse environments.",
      image: project2,
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="py-24 max-w-7xl mx-auto px-6">

        {/* SECTION 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-bold uppercase text-sm mb-4">
              Our Story
            </h2>

            <h3 className="text-4xl font-black text-slate-900 mb-6">
              Engineering Excellence
            </h3>

            <p className="text-slate-600 mb-6">
              VEERTRONS is an engineering startup focused on IoT,
              Embedded Systems, and PCB Design.
            </p>

            {/* Vision */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white mb-4">
              <div className="flex items-center gap-3 mb-2">
                <FaEye />
                <h4 className="font-bold">Vision</h4>
              </div>
              <p className="text-sm">{story.vision}</p>
            </div>

            {/* Mission */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <FaBullseye />
                <h4 className="font-bold">Mission</h4>
              </div>
              <p className="text-sm text-slate-300">{story.mission}</p>
            </div>
          </motion.div>

          <div>
            <img
              src={about}
              alt="Engineering"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* SECTION 2 - TEAM */}
        <div className="mt-24">
          <h3 className="text-3xl font-black text-center mb-12">
            Our Team
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...hoverCard}
                className="bg-white p-8 rounded-3xl shadow-lg text-center border"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-xl mb-6 object-cover"
                />

                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-blue-600 text-sm font-semibold mb-4">
                  {member.role}
                </p>

                <p className="text-slate-500 text-sm mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-4 text-slate-400">
                  <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                  <FaGithub className="cursor-pointer hover:text-black" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 3 - PROJECTS */}
        <div className="mt-24">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-black">
              Featured Projects
            </h3>

            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-2 border font-bold rounded-xl hover:bg-black hover:text-white transition"
            >
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                {...hoverCard}
                className="relative h-80 rounded-3xl overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full text-white w-fit mb-2">
                    {project.tag}
                  </span>

                  <h4 className="text-white text-xl font-bold">
                    {project.title}
                  </h4>

                  <p className="text-slate-300 text-sm">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;