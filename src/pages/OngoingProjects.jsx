import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
// import { FaBolt, FaSun } from 'react-icons/fa';
import ev_project from '../assets/ev_project.jpg';
import solar_project from '../assets/solar_project.jpg';

const OngoingProjects = () => {
    const projects = [
        {
            id: 1,
            title: "EV Charging Station",
            category: "Electric Vehicles",
            description: "Smart electric vehicle charging station with real-time monitoring and automated billing system.",
            status: "In Progress",
            
            color: "from-blue-600 to-indigo-700",
            gradient: "from-blue-900 to-indigo-900",
            image: ev_project,

        },
        {
            id: 2,
            title: "Solar Panels",
            category: "Renewable Energy",
            description: "High-efficiency solar panel installation with energy storage solutions for sustainable power.",
            status: "Starting Soon",
            
            color: "from-amber-500 to-orange-600",
            gradient: "from-amber-900 to-orange-900",
            image: solar_project,

        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Helmet>
                <title>Ongoing Projects | Veertrons Engineering</title>
                <meta name="description" content="Explore Veertrons Engineering's ongoing projects in EV Charging and Solar Energy solutions." />
                <meta property="og:title" content="Ongoing Projects | Veertrons Engineering" />
                <meta property="og:description" content="Discover our cutting-edge engineering projects and innovations." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center bg-[#fafafa] overflow-hidden pt-28 pb-16">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-6 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                            Innovation in Progress
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                            Our Ongoing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">Projects</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Discover the cutting-edge engineering projects we're currently working on. 
                            From EV solutions to renewable energy, our team is building the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden group"
                            >
                                {/* Image Section */}
                                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                    {project.image ? (
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <project.icon className="text-white text-8xl opacity-90" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/20" />
                                    
                                    {/* Status Badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
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
                                    {/* Category */}
                                    <span className="inline-block text-xs font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 mb-4">
                                        {project.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20" />
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Interested in Collaborating?
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                            We're always looking for partners and interns to join our ongoing projects. 
                            Let's build the future together.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <a 
                                href="/contact" 
                                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-blue-700 active:scale-95 shadow-2xl shadow-blue-900/50"
                            >
                                <span className="relative z-10">Get in Touch</span>
                            </a>
                            <a 
                                href="/services/internships" 
                                className="group relative px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-slate-700 active:scale-95 shadow-2xl"
                            >
                                <span className="relative z-10">Join Our Team</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default OngoingProjects;
