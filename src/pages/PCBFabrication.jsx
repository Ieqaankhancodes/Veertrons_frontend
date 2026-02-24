import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaTimes, FaSearchPlus, FaMicrochip, FaCogs, FaDraftingCompass, FaIndustry } from 'react-icons/fa';
import pcbDesigning from '../assets/pcb_designing.webp';
import pcbManufacturing from '../assets/pcb_manufacturing.jpg';

const PCBFabrication = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>PCB Designing & Manufacturing | Veertrons Engineering</title>
        <meta name="description" content="Professional PCB designing and manufacturing services. We use industry-standard tools like Eagle and Circuit Wizard for schematic design and layout." />
        <meta property="og:title" content="PCB Designing & Manufacturing | Veertrons Engineering" />
        <meta property="og:description" content="Expert PCB design and fabrication services using Eagle and Circuit Wizard software." />
      </Helmet>
      
      <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">PCB Designing & Manufacturing</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide professional PCB designing and manufacturing services using industry-standard tools. From schematic design to finished board fabrication, we deliver high-quality custom PCBs for your electronics projects.
            </p>
          </motion.div>

          {/* PCB Design Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60 border border-slate-100"
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Design Image */}
                <div className="order-2 lg:order-1">
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => setSelectedImage(pcbDesigning)}
                  >
                    <img 
                      src={pcbDesigning} 
                      alt="PCB Design" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaSearchPlus className="text-white text-4xl" />
                    </div>
                  </div>
                </div>

                {/* Design Content */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl">
                      <FaDraftingCompass />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">PCB Designing</h2>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our expert team uses industry-standard PCB design software including <strong>Eagle</strong> and <strong>Circuit Wizard</strong> to create precise schematics and optimized board layouts. We ensure your PCB design meets all electrical and mechanical requirements for optimal performance.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Schematic Design & Capture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-medium">PCB Layout & Routing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Design Rule Check (DRC)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Gerber File Generation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Component Footprint Creation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PCB Manufacturing Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/60 border border-slate-100"
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Manufacturing Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl">
                      <FaIndustry />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">PCB Manufacturing</h2>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We offer complete PCB manufacturing services from prototype to production. Our facility is equipped to handle single-layer to multi-layer PCBs with precise quality control at every stage of the fabrication process.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Single, Double & Multi-layer PCBs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Through-hole & Surface Mount (SMD)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">PCB Etching & Drilling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Silkscreen & Solder Mask</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Gold/Nickel Surface Finishing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                      <span className="text-slate-700 font-medium">Quality Testing & Inspection</span>
                    </div>
                  </div>
                </div>

                {/* Manufacturing Image */}
                <div>
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                    onClick={() => setSelectedImage(pcbManufacturing)}
                  >
                    <img 
                      src={pcbManufacturing} 
                      alt="PCB Manufacturing" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaSearchPlus className="text-white text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tools We Use Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-10 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Design Tools We Use</h2>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                We utilize industry-leading PCB design software to ensure accuracy, efficiency, and compatibility with manufacturing standards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Eagle</h3>
                  <p className="text-slate-400 text-sm">Industry-standard PCB design software for schematic capture and board layout</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Circuit Wizard</h3>
                  <p className="text-slate-400 text-sm">Complete design suite for circuit simulation and PCB manufacturing</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 md:p-12 text-center">
              <h2 className="text-3xl font-black text-white mb-4">Need Custom PCB?</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Contact us for your PCB design and manufacturing requirements. We deliver quality products with competitive pricing and fast turnaround.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>

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
      </div>
    </>
  );
};

export default PCBFabrication;
