import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaTools, FaCogs, FaIndustry, FaClipboardCheck, FaFlask, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaBuilding, FaStore, FaWrench, FaTimes, FaSearchPlus } from 'react-icons/fa';
import service1 from '../assets/service/1.jpeg';
import service2 from '../assets/service/2.jpeg';
import service3 from '../assets/service/3.jpeg';
import service4 from '../assets/service/4.jpeg';
import service2_1 from '../assets/service2/1.jpeg';
import service2_2 from '../assets/service2/2.jpeg';
import service2_3 from '../assets/service2/3.jpeg';
import service2_4 from '../assets/service2/4.jpeg';
import service2_5 from '../assets/service2/5.jpeg';
import service2_6 from '../assets/service2/6.jpeg';
import service2_7 from '../assets/service2/7.jpeg';
import service2_8 from '../assets/service2/8.jpeg';
import service2_9 from '../assets/service2/9.jpeg';
import service2_10 from '../assets/service2/10.jpeg';

const SalesServices = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: '',
    requirements: ''
  });

  const services = [
    {
      icon: FaTools,
      title: "Electronics Parts",
      description: "We supply a comprehensive range of electronic components including resistors, capacitors, transistors, integrated circuits, diodes, LEDs, connectors, sensors, microcontrollers, and various other passive and active components used in electronic circuits and devices."
    },
    {
      icon: FaCogs,
      title: "Electrical Parts",
      description: "Our electrical parts inventory includes circuit breakers, switches, relays, transformers, wires, cables, bus bars, terminals, fuses, contactors, and other essential components for electrical systems, installations, and power distribution applications."
    },
    {
      icon: FaIndustry,
      title: "Computer Parts",
      description: "We provide a wide selection of computer components including motherboards, processors, memory modules, storage devices, power supplies, cooling systems, graphic cards, network cards, and other hardware for building, repairing, or upgrading computer systems."
    },
    {
      icon: FaClipboardCheck,
      title: "Consumables Components",
      description: "VEERTRONS supplies essential consumable parts that require regular replacement including soldering materials, thermal pastes, cleaning supplies, fuses, filters, bearings, belts, lubricants, and other maintenance items for various electronic and electrical devices."
    },
    {
      icon: FaFlask,
      title: "Lab Setup Services",
      description: "We provide complete lab setup solutions including design, installation, and commissioning of electronics, electrical, and computer laboratories. From workbenches and equipment to power systems and networking, we create fully functional labs for educational institutions, R&D centers, and industrial testing facilities."
    },
    {
      icon: FaHome,
      title: "Home Automation",
      description: "Transform your living spaces into smart homes with our comprehensive home automation solutions. We offer smart lighting control, security systems, climate control, automated blinds, voice assistant integration, and IoT-enabled appliances management for residential properties."
    },
    {
      icon: FaBuilding,
      title: "B2B Solutions",
      description: "We provide tailored business-to-business solutions including industrial automation systems, enterprise IoT infrastructure, custom PCB manufacturing, component sourcing for manufacturing, and technical consultation for businesses looking to integrate advanced electronics into their operations."
    },
    {
      icon: FaStore,
      title: "B2C Solutions",
      description: "Our B2C services focus on delivering innovative consumer electronics and smart products directly to end users. From DIY electronics kits to ready-to-use smart home devices, we cater to individual customers seeking quality electronic solutions."
    }
  ];

  // Combined service images for gallery
  const serviceImages = [
    { id: 1, src: service1, title: 'CRO Servicing', category: 'Testing Equipment' },
    { id: 2, src: service2, title: 'Multimeter Calibration', category: 'Testing Equipment' },
    { id: 3, src: service3, title: 'Power Supply Repair', category: 'Power Equipment' },
    { id: 4, src: service4, title: 'DC Voltmeter Service', category: 'Measurement' },
    { id: 5, src: service2_1, title: 'Signal Generator', category: 'Testing Equipment' },
    { id: 6, src: service2_2, title: 'Lab Equipment Maintenance', category: 'Laboratory' },
    { id: 7, src: service2_3, title: 'Digital Oscilloscope', category: 'Testing Equipment' },
    { id: 8, src: service2_4, title: 'Circuit Board Repair', category: 'Electronics' },
    { id: 9, src: service2_5, title: 'Power Supply Unit', category: 'Power Equipment' },
    { id: 10, src: service2_6, title: 'Industrial Equipment', category: 'Industrial' },
    { id: 11, src: service2_7, title: 'Component Replacement', category: 'Electronics' },
    { id: 12, src: service2_8, title: 'Equipment Calibration', category: 'Testing Equipment' },
    { id: 13, src: service2_9, title: 'Laboratory Setup', category: 'Laboratory' },
    { id: 14, src: service2_10, title: 'Final Testing', category: 'Quality Check' },
  ];

  const serviceTypes = ['all', 'Testing Equipment', 'Power Equipment', 'Measurement', 'Laboratory', 'Electronics', 'Industrial', 'Quality Check'];

  const filteredImages = selectedServiceType === 'all' 
    ? serviceImages 
    : serviceImages.filter(img => img.category === selectedServiceType);

  const handleFilterChange = (type) => {
    setSelectedServiceType(type);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/sales`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          serviceType: '',
          requirements: ''
        });
      } else {
        alert('Failed to submit inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting inquiry. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sales & Services | Veertrons Engineering</title>
        <meta name="description" content="VEERTRONS sells electronics parts, electrical parts, computer parts, consumables, home automation, and B2B/B2C solutions. We also provide repair and maintenance services for all products we sell." />
        <meta property="og:title" content="Sales & Services | Veertrons Engineering" />
        <meta property="og:description" content="Wide range of components and equipment including electronics, electrical, computer parts, home automation, B2B and B2C solutions with repair services." />
      </Helmet>
      <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Animated Gradient Background - Hero Style */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
        />
        <div className="absolute top-1/2 left-[5%] w-6 h-6 border-2 border-indigo-300 rounded-full animate-pulse opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Components & Services</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Sales & Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            VEERTRONS is a trusted supplier of high-quality electronic, electrical, and computer components serving industries, businesses, and individual customers. Our extensive inventory ensures you find the right parts for any project. We also provide professional repair and maintenance services and complete lab setup solutions for educational institutions, R&D centers, and industrial testing facilities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center text-white text-xl mb-6">
                <service.icon />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Repair & Maintenance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl mx-auto mb-6">
              <FaTools />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Repair & Maintenance Services</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              In addition to selling components and equipment, VEERTRONS provides professional repair and maintenance services for all products we sell. Our experienced technicians can diagnose, repair, and service electronic devices, electrical equipment, and computer systems. We offer both in-house and on-site services, preventive maintenance programs, and emergency repair support to minimize downtime and ensure optimal performance of your valuable equipment.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold text-lg mb-2">Quick Turnaround</h4>
                <p className="text-slate-400 text-sm">Fast diagnosis and repair services to minimize your downtime</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold text-lg mb-2">Expert Technicians</h4>
                <p className="text-slate-400 text-sm">Skilled professionals with expertise in various electronic systems</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-white font-bold text-lg mb-2">Quality Parts</h4>
                <p className="text-slate-400 text-sm">We use genuine components for all repairs and replacements</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KLE Sheshgiri TECH University Service Gallery with Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto mb-24"
        >
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-[3rem] p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center mb-10">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-3xl mb-5 shadow-2xl shadow-blue-600/30">
                <FaWrench />
              </div>
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Servicing Gallery</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                Professional servicing and maintenance of digital equipment including CRO, Multimeters, DC Power Supplies, Signal Generators, and more at KLE Sheshgiri TECH University Belgaum
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {serviceTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange(type)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    selectedServiceType === type
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                >
                  {type === 'all' ? 'All Services' : type}
                </button>
              ))}
            </div>
            
            {/* Pinterest-style Masonry Grid Layout */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {filteredImages.map((img, index) => (
                <motion.div 
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(img.src)}
                >
                  {/* Image */}
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-sm">{img.title}</span>
                    <span className="text-blue-300 text-xs">{img.category}</span>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <FaSearchPlus className="text-blue-600 text-lg" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Count Badge */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-slate-100">
                <span className="text-slate-600 font-medium">Showing</span>
                <span className="text-blue-600 font-bold mx-2">{filteredImages.length}</span>
                <span className="text-slate-600 font-medium">of {serviceImages.length} service images</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors p-2 flex items-center gap-2"
              >
                <FaTimes className="text-2xl" />
                <span className="text-lg">Cancel</span>
              </button>
              <img
                src={selectedImage}
                alt="Full preview"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-medium">Click anywhere to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Lab Setup Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 text-2xl mx-auto mb-6">
              <FaFlask />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">Lab Setup Services</h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              VEERTRONS provides end-to-end laboratory setup solutions for educational institutions, R&D centers, and industrial testing facilities. From initial planning and design to installation, commissioning, and training, we create fully functional electronics, electrical, and computer laboratories tailored to your specific requirements.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-2">Design & Planning</h4>
                <p className="text-white/70 text-sm">Layout optimization and equipment selection</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-2">Installation</h4>
                <p className="text-white/70 text-sm">Professional setup of all lab equipment and systems</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-2">Commissioning</h4>
                <p className="text-white/70 text-sm">Testing and calibration for optimal performance</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-5">
                <h4 className="text-white font-bold mb-2">Training</h4>
                <p className="text-white/70 text-sm">Comprehensive user training and support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 rounded-[3rem] p-8 h-full">
                <h3 className="text-2xl font-black text-white mb-6">Get in Touch</h3>
                <p className="text-slate-400 mb-8">
                  Ready to source components, need repair services, or planning a new lab setup? Contact our team for personalized consultation, competitive pricing, and expert assistance with your requirements.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <FaPhone className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white font-bold">+91 9108500593</p>
                      <p className="text-white font-bold">+91 9421278091</p>
                     

                      
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <FaEnvelope className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white font-bold">veertrons@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <FaMapMarkerAlt className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Address</p>
                      <p className="text-white font-bold">Belgaum, Karnataka</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button 
                    onClick={() => navigate('/about')}
                    className="w-full py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-2xl transition-all duration-300"
                  >
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-6">Request a Quote</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Contact Person *</label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Enter contact person"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="electronics">Electronics Parts</option>
                      <option value="electrical">Electrical Parts</option>
                      <option value="computer">Computer Parts</option>
                      <option value="consumables">Consumables Components</option>
                      <option value="home-automation">Home Automation</option>
                      <option value="b2b">B2B Solutions</option>
                      <option value="b2c">B2C Solutions</option>
                      <option value="repair">Repair & Maintenance</option>
                      <option value="lab-setup">Lab Setup Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                      placeholder="Describe your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default SalesServices;
