import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaTools, FaProjectDiagram } from 'react-icons/fa';

const Services = () => {
    const navigate = useNavigate();
    
    const handleExplore = (linkId) => {
        if (linkId === 'internships') {
            navigate('/services/internships');
        } else if (linkId === 'sales-services') {
            navigate('/services/sales-engineering');
        }
    };

    const testimonials = [
        {
            id: 1,
            name: "Vishalakshi Angadi ",
            initials: "VA",
            role: "Advanced IoT Intern",
            testimonial: "Wonderful , got to learn so many things I'm glad I joined Veertrons.",
            rating: 5
        },
        {
            id: 2,
            name: "Goutami ",
            initials: "GM",
            role: "ML for Engineers Intern",
            testimonial: "Teaching staff is good  , we  are learning new things every day. ",
            rating: 5
        },
        {
            id: 3,
            name: "Rahul R Kamble ",
            initials: "RK",
            role: "IoT Intern",
            testimonial: "Easy to understand ",
            rating: 5
        },
        {
            id: 4,
            name: "Anand Raj Bandhu",
            initials: "AB",
            role: "IoT Intern",
            testimonial: "So interactive session are conducted ",
            rating: 5
        }
    ];

    const services = [
        {
            id: 1,
            title: "Student Internships",
            category: "Education & Training",
            description: "Industry-aligned programs specializing in PCB Fabrication, IoT, and Embedded Systems. We provide students with the practical skills and hands-on experience needed to thrive in the modern engineering landscape. Internships for BCA & MCA BE(EC,EE,CS,ME).Diploma (EC,EE,ME). The intership domains are [PCB Fabrication, IoT, Embedded Systems, IoT, Advanced IoT, ML, PLC].",
            features: ["Professional Certified Modules", "Live Industrial Projects", "Hands-on Lab Training", "Career & Placement Support"],
            icon: FaGraduationCap,
            color: "from-blue-600 to-indigo-700",
            linkId: "internships"
        },
        {
            id: 2,
            title: "Sales & Engineering Services",
            category: "Industrial Solutions",
            description: "Comprehensive supply and maintenance of high-precision engineering equipment. From technical consultancy to custom prototype development, we support R&D labs and industrial operations with elite hardware solutions.",
            features: ["Equipment Sales & Supply", "System Maintenance & Repair", "Technical Consultancy", "Custom Engineering Prototypes"],
            icon: FaTools,
            color: "from-slate-800 to-slate-950",
            linkId: "sales-services"
        }
    ];

    return (
        <section id="services" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
            />

            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Core Services</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Empowering future engineers and providing world-class technical support to the industry.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.linkId}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative group bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full"
                        >
                            {/* Icon & Badge */}
                            <div className="flex justify-between items-start mb-10">
                                <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl shadow-2xl text-white transform group-hover:rotate-6 transition-transform duration-500`}>
                                    <service.icon />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                                    {service.category}
                                </span>
                            </div>

                            <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{service.title}</h4>
                            <p className="text-slate-600 mb-10 flex-grow text-lg leading-relaxed italic border-l-4 border-blue-50 pl-6">
                                "{service.description}"
                            </p>

                            {/* Feature List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => handleExplore(service.linkId)}
                                className="w-full py-5 rounded-2xl font-black text-white bg-gradient-to-r from-slate-900 to-slate-800 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200 group-hover:shadow-blue-200 flex items-center justify-center gap-2 group/btn"
                            >
                                Explore Service
                                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    
                </motion.div>

                {/* Testimonial Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32"
                >
                    {/* Background decoration */}
                    <div className="relative mb-16">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 rounded-full blur-3xl opacity-50" />
                        <div className="text-center relative z-10">
                            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Student Stories</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">What Our Interns Say</h3>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 relative overflow-hidden group"
                            >
                                {/* Decorative gradient blob */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Quote Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/25">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                    </svg>
                                </div>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                        </svg>
                                    ))}
                                </div>
                                
                                {/* Testimonial Text */}
                                <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
                                    "{item.testimonial}"
                                </p>
                                
                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{item.name}</p>
                                        <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;