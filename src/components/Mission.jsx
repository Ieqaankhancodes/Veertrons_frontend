import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaTools, FaRocket, FaBolt, FaSun, FaArrowRight, FaEye, FaBullseye } from 'react-icons/fa';

const Mission = () => {
    const navigate = useNavigate();
    
    const values = [
        {
            title: "Expert Mentorship",
            desc: "Learn from industry veterans who have spent decades in electronics and embedded systems.",
            icon: FaGraduationCap
        },
        {
            title: "Hands-on Innovation",
            desc: "We don't just teach theory; we build real-world products using professional fabrication labs.",
            icon: FaTools
        },
        {
            title: "Future Ready",
            desc: "Our IoT and PCB modules are updated monthly to stay ahead of global tech trends.",
            icon: FaRocket
        }
    ];

    const projects = [
        {
            id: 1,
            title: "EV Charging Station",
            category: "Electric Vehicles",
            description: "Smart electric vehicle charging station with real-time monitoring and automated billing system.",
            status: "In Progress",
            icon: FaBolt,
            gradient: "from-blue-900 to-indigo-900"
        },
        {
            id: 2,
            title: "Solar Panels",
            category: "Renewable Energy",
            description: "High-efficiency solar panel installation with energy storage solutions for sustainable power.",
            status: "Starting Soon",
            icon: FaSun,
            gradient: "from-amber-900 to-orange-900"
        }
    ];

    return (
        <>
            <section id="mission" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    
                    {/* Section Header */}
                    <div className="max-w-3xl mb-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Our Mission
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                        >
                            Bridging the gap between <br />
                            <span className="text-blue-600">Academia and Industry.</span>
                        </motion.h3>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {values.map((val, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all group"
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform text-blue-600">
                                    <val.icon />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* The "Story" Section - Vision & Mission */}
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                                Our Vision & Mission
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                Driving Innovation Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">Vision & Purpose</span>
                            </h2>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Vision Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                        <FaEye />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                                    <p className="text-blue-100 leading-relaxed text-lg">
                                        To be a global leader in engineering innovation, bridging the gap between academia and industry by delivering cutting-edge solutions in IoT, Embedded Systems, and PCB Design while nurturing the next generation of engineers.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                        <FaBullseye />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        To provide hands-on, industry-relevant training through real-world projects, supply high-quality electronic components, and offer expert engineering services that empower students and businesses to achieve technological excellence.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Story Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Visual Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-video bg-blue-600 rounded-[2rem] overflow-hidden shadow-2xl relative">
                                {/* Replace with a real image of your lab or team */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1" />
                                    </button>
                                </div>
                            </div>
                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-50">
                                <p className="text-4xl font-black text-blue-600">10+</p>
                                <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">Years Experience</p>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                Innovative PCB Designing & <br />IoT Solutions
                            </h3>
                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    At VEERTRONS, we believe that the best way to learn technology is to build it. Our journey started with a simple goal: to provide students with the same tools and environments used by top global engineering firms.
                                </p>
                                <p>
                                    Whether it's complex 4-layer PCB fabrication or deploying sensor-to-cloud IoT architectures, our programs are designed to turn learners into creators.
                                </p>
                            </div>
                            
                            <div className="mt-10">
                                <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                                    <span>Meet our Technical Team</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Innovation in Action - Ongoing Projects */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                            Innovation in Action
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Our Ongoing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">Projects</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Discover the cutting-edge engineering projects we're currently working on.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group cursor-pointer"
                                onClick={() => navigate('/projects')}
                            >
                                {/* Image/Icon Section */}
                                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10"
                                    >
                                        <project.icon className="text-white text-7xl opacity-90" />
                                    </motion.div>
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            project.status === "In Progress" 
                                                ? "bg-amber-500 text-white" 
                                                : "bg-blue-500 text-white"
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <span className="inline-block text-xs font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mb-3">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <button
                            onClick={() => navigate('/projects')}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95 shadow-xl"
                        >
                            <span>View All Projects</span>
                            <FaArrowRight />
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Mission;
