import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bc09167b-2ec5-4926-b7ed-78b73a82a962.avif';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                {/* Animated mesh gradient */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Decorative floating shapes */}
            <div className="absolute top-20 right-[15%] w-20 h-20 border border-blue-200 rounded-full animate-float opacity-60" />
            <div className="absolute bottom-32 left-[10%] w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg rotate-45 animate-float animation-delay-2000 opacity-40" />
            <div className="absolute top-1/2 left-[5%] w-8 h-8 border-2 border-indigo-300 rounded-full animate-pulse opacity-50" />

            {/* Glowing orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                
                {/* Left Content: Spans 7 columns on desktop */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
                >
                    {/* Badge */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm mb-8"
                    >
                       
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                        VEERTRONS
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                            ENGINEERING SALES AND SERVICES LLP.
                        </span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Master industry-standard <span className="font-semibold text-blue-600">PCB Fabrication</span> and <span className="font-semibold text-blue-600">IoT</span> through immersive, hands-on internships guided by industry experts.
                    </p>

                    {/* Stats Cards */}
                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                        <div className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">50+</p>
                                <p className="text-xs text-slate-500">Students Enrolled for Internships</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">4+</p>
                                <p className="text-xs text-slate-500">Sales and Services Provided</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Link 
                            to="/services/internships" 
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Internship
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                            
                        <Link 
                            to="/services/sales-engineering" 
                            className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg active:scale-95"
                        >
                            <span className="flex items-center gap-2">
                                Sales & Services
                                <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual: Spans 5 columns on desktop */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative"
                >
                    {/* Decorative circle behind image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full transform scale-90 opacity-50" />
                    
                    <div className="relative">
                        <img
                            src={heroImage}
                            alt="Hero Illustration"
                            className="w-full h-auto max-w-[320px] md:max-w-[400px] object-contain relative z-10"
                        />
                        {/* Floating badge */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Industry Ready</p>
                                    <p className="text-xs text-slate-500">Certificate Program</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-400 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
