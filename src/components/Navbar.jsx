import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import veertronslogo from "../assets/veertrons-logo.png";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
];

const serviceLinks = [
    { name: "Internship", path: "/services/internships" },
    { name: "Sales & Services", path: "/services/sales-engineering" },
    { name: "Add on Labs", path: "/services/add-on-labs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled 
                ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-3" 
                : "bg-gradient-to-b from-white/90 to-transparent py-6"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
                {/* Logo Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="relative">
                        <img src={veertronslogo} alt="Logo" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:rotate-[360deg]" />
                        <div className="absolute -inset-1 bg-blue-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900 tracking-tighter leading-none">VEERTRONS</span>
                        <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Engineering</span>
                    </div>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
                    {navLinks.map((item) => (
                        <li key={item.name} className="relative">
                            <Link
                                to={item.path}
                                className={`px-6 py-2 text-sm font-bold transition-all duration-300 rounded-xl ${
                                    isActive(item.path)
                                    ? "text-blue-600" 
                                    : "text-slate-500 hover:text-slate-900"
                                }`}
                            >
                                {item.name}
                            </Link>
                            {isActive(item.path) && (
                                <motion.div 
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white shadow-sm rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </li>
                    ))}

                    {/* Services Dropdown */}
                    <li className="relative">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            onMouseEnter={() => setServicesOpen(true)}
                            className={`px-6 py-2 text-sm font-bold transition-all duration-300 rounded-xl flex items-center gap-2 ${
                                isActive('/services')
                                ? "text-blue-600" 
                                : "text-slate-500 hover:text-slate-900"
                            }`}
                        >
                            Services
                            <svg 
                                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    onMouseLeave={() => setServicesOpen(false)}
                                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
                                >
                                    <div className="py-2">
                                        {serviceLinks.map((service) => (
                                            <Link
                                                key={service.name}
                                                to={service.path}
                                                onClick={() => setServicesOpen(false)}
                                                className={`block px-6 py-3 text-sm font-bold transition-all duration-300 ${
                                                    isActive(service.path)
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                                }`}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {isActive('/services') && (
                            <motion.div 
                                layoutId="nav-pill"
                                className="absolute inset-0 bg-white shadow-sm rounded-xl -z-10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </li>

                    {/* Contact */}
                    <li className="relative">
                        <Link
                            to="/contact"
                            className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-all duration-300 rounded-xl"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-5 h-4 relative flex flex-col justify-between">
                        <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-slate-900 rounded-full origin-left transition-all" />
                        <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-slate-900 rounded-full transition-all" />
                        <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-slate-900 rounded-full origin-left transition-all" />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden"
                        >
                            <div className="py-4">
                                {/* Main Navigation Links */}
                                {navLinks.map((item, i) => (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => {
                                            navigate(item.path);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full px-6 py-4 text-left text-base font-semibold transition-all border-b border-slate-100 ${
                                            isActive(item.path) 
                                                ? "bg-blue-50 text-blue-600" 
                                                : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}

                                {/* Services Collapsible Section */}
                                <div className="border-b border-slate-100">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="w-full px-6 py-4 text-left text-base font-semibold text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-between"
                                    >
                                        <span>Services</span>
                                        <motion.svg
                                            animate={{ rotate: servicesOpen ? 180 : 0 }}
                                            className="w-5 h-5 text-slate-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-50"
                                            >
                                                {serviceLinks.map((service, i) => (
                                                    <motion.button
                                                        key={service.name}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.03 }}
                                                        onClick={() => {
                                                            navigate(service.path);
                                                            setIsOpen(false);
                                                        }}
                                                        className={`w-full px-10 py-3 text-left text-sm font-medium transition-all ${
                                                            isActive(service.path) 
                                                                ? "bg-blue-50 text-blue-600" 
                                                                : "text-slate-600 hover:bg-slate-100"
                                                        }`}
                                                    >
                                                        {service.name}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Contact */}
                                <motion.button 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (navLinks.length + 1) * 0.05 }}
                                    onClick={() => {
                                        navigate('/contact');
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-6 py-4 text-left text-base font-semibold transition-all ${
                                        isActive("/contact") 
                                            ? "bg-blue-50 text-blue-600" 
                                            : "text-slate-700 hover:bg-slate-50"
                                    }`}
                                >
                                    Contact
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
