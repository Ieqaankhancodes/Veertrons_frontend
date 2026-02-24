import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaTimes, FaSearchPlus, FaRobot, FaWifi, FaMicrochip } from 'react-icons/fa';
import robotics from '../assets/robotics.jpg';
import plc from '../assets/plc.jpg';
import iot from '../assets/iot.avif';

const AddOnLabs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Add-on Labs data
  const addOnLabs = [
    { 
      id: 1, 
      src: robotics, 
      title: 'Robotics', 
      icon: FaRobot,
      description: 'Hands-on robotics training at our company. Students learn to build, program, and control robots including robotic arms, mobile robots, and automation systems.',
      features: ['Robot Programming', 'Sensor Integration', 'Motor Control', 'Line Follower Robots', 'Obstacle Avoidance', 'Gesture Controlled Robots']
    },
    { 
      id: 2, 
      src: iot, 
      title: 'Advanced IoT', 
      icon: FaWifi,
      description: 'Comprehensive IoT training at our facility. Students get practical experience with sensors, wireless communication modules, cloud connectivity, and building smart applications.',
      features: ['Sensor Programming', 'Wi-Fi & BLE Modules', 'Cloud Data Logging', 'Smart Home Projects', 'Remote Monitoring', 'MQTT Protocol']
    },
    { 
      id: 3, 
      src: plc, 
      title: 'PLC', 
      icon: FaMicrochip,
      description: 'Industrial automation training at our company. Students learn ladder logic, SCADA, and control system design for real-world industrial applications.',
      features: ['Ladder Logic Programming', 'PLC Configuration', 'HMI Interface', 'Industrial Automation', 'Motor Control Systems', 'SCADA Basics']
    },
  ];

  return (
    <>
      <Helmet>
        <title>Add on Labs | Veertrons Engineering</title>
        <meta name="description" content="We support add-on labs including Robotics, Advanced IoT, and PLC. Complete lab setup solutions for educational institutions." />
        <meta property="og:title" content="Add on Labs | Veertrons Engineering" />
        <meta property="og:description" content="Enhance your laboratory with our specialized add-on labs - Robotics, Advanced IoT, and PLC solutions." />
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
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Training Programs</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">We Support Add on Labs</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide specialized add-on lab training at our company. Students can join our training programs in Robotics, Advanced IoT, and PLC systems to gain hands-on experience with cutting-edge industrial technologies at our facility.
            </p>
          </motion.div>

          {/* Labs Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {addOnLabs.map((lab, index) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300"
              >
                {/* Image Section */}
                <div 
                  className="relative h-64 cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedImage(lab.src)}
                >
                  <img 
                    src={lab.src} 
                    alt={lab.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <lab.icon className="text-xl" />
                      </div>
                      <h3 className="text-white font-bold text-2xl">{lab.title}</h3>
                    </div>
                  </div>
                  {/* Search Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <FaSearchPlus className="text-blue-600 text-lg" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {lab.description}
                  </p>
                  
                  {/* Features List */}
                  <div>
                    <h4 className="text-slate-900 font-bold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {lab.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Syllabus Info Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[3rem] p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">We Provide Syllabus for Add on Labs</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We provide comprehensive syllabus for Robotics, Advanced IoT, and PLC add-on labs. Our curriculum is designed to give students practical knowledge and hands-on experience with industry-relevant technologies.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 md:p-12 text-center">
              <h2 className="text-3xl font-black text-white mb-4">Join Our Training Programs</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Students can enroll for add-on lab training at our company. We provide expert trainers, hands-on projects, and practical experience with real industrial equipment.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Enroll Now
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

export default AddOnLabs;
