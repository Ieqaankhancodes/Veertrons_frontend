import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaLightbulb, FaGithub, FaLinkedin, FaEye, FaBullseye } from 'react-icons/fa';
import about from '../assets/about.avif';
import project1 from '../assets/b7670e83-a46b-436a-a207-275f067a7343.avif';
import project2 from '../assets/bc09167b-2ec5-4926-b7ed-78b73a82a962.avif';
import temp from '../assets/default.jpg';
import { motion } from "framer-motion";

const About = () => {
    const navigate = useNavigate();
    const story = {
        vision: "To be a global leader in engineering innovation, bridging the gap between academia and industry by delivering cutting-edge solutions in IoT, Embedded Systems, and PCB Design while nurturing the next generation of engineers.",
        mission: "To provide hands-on, industry-relevant training through real-world projects, supply high-quality electronic components, and offer expert engineering services that empower students and businesses to achieve technological excellence."
    };

    const stats = [
        { label: "Projects Started", value: "2+" },
        { label: "Students Trained", value: "50+" },
        { label: "Years Experience", value: "2+" },
    ];

    const team = [
        {
            name: "Mr.Viraj J",
            role: "CEO , MD, Founder & Director",
            image: temp,
            bio: "Expert in Embedded Systems with 15 years in Industrial Automation."
        },
        {
            name: "Mr.Shivanand Pattar",
            role: "CTO, CO-Founder & Director",
            image: temp,
            bio: "Specializes in IoT architecture and sustainable hardware design."
        },
        {
            name: "Mr.Sourabh Koli",
            role: "COO, Director",
            image: temp,
            bio: "Passionate about bridging the gap between academia and industry."
        }
    ];

    const projects = [
        {
            title: "EV Charging Station",
            tag: "Industrial",
            desc: "A state-of-the-art electric vehicle charging solution designed for commercial and residential use.",
            image: project1
        },
        {
            title: "Solar Panels",
            tag: "Sustainable Energy",
            desc: "High-efficiency solar panels engineered for maximum energy capture and durability in diverse environments.",
            image: project2
        }
    ];

    return (
        <section id="about" className="bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl" />
            
            {/* 1. Brief Company Info */}
            <div className="py-24 max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Engineering Excellence</span>
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Founded on the principles of precision and innovation, VEERTRONS has evolved from a specialized consultancy into a multi-disciplinary engineering powerhouse. We bridge the gap between complex industrial requirements and next-generation talent.
                        </p>

                        {/* Vision Section */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <FaEye className="text-2xl" />
                                <h4 className="text-lg font-bold">Our Vision</h4>
                            </div>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                {story.vision}
                            </p>
                        </div>

                        {/* Mission Section */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
                            <div className="flex items-center gap-3 mb-3">
                                <FaBullseye className="text-2xl" />
                                <h4 className="text-lg font-bold">Our Mission</h4>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {story.mission}
                            </p>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <img 
                            src={about}
                            alt="Engineering Lab" 
                            className="rounded-[3rem] shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>

            {/* 2. Team Members */}
            <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-black text-slate-900">The Minds Behind Veertrons</h3>
                        <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {team.map((member, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 text-center border border-slate-100"
                            >
                                <img src={member.image} className="w-24 h-24 rounded-2xl mx-auto mb-6 object-cover shadow-lg" alt={member.name} />
                                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                                <p className="text-blue-600 text-sm font-bold mb-4 uppercase tracking-tighter">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.bio}</p>
                                <div className="flex justify-center gap-4 text-slate-400">
                                    <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors" />
                                    <FaGithub className="hover:text-slate-900 cursor-pointer transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button 
                            onClick={() => navigate('/about')}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30"
                        >
                            View Full Team
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Featured Projects */}
            <div className="py-24 max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h3 className="text-4xl font-black text-slate-900 mb-4">Innovation in Action</h3>
                        <p className="text-slate-600">A glimpse into the systems and hardware we've pioneered for our industrial clients and partners.</p>
                    </div>
                    <button 
                        onClick={() => navigate('/projects')}
                        className="mt-8 md:mt-0 px-8 py-3 border-2 border-slate-900 font-bold rounded-xl hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-800 hover:text-white transition-all"
                    >
                        View All Projects
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div 
                            key={i}
                            className="group relative h-[400px] overflow-hidden rounded-[3rem] cursor-pointer"
                        >
                            <img src={project.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-10">
                                <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                                    {project.tag}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-slate-300 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default About;