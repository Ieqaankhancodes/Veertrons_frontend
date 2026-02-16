import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Internships = () => {
  const modules = [
    { title: "PCB Fabrication", desc: "Design and manufacture professional-grade circuit boards." },
    { title: "IoT Ecosystems", desc: "Connecting hardware to the cloud using MQTT and HTTP." },
    { title: "Embedded Systems", desc: "Developing firmware for embedded devices and microcontrollers." },
    { title: "Advanced IoT", desc: "Integrating AI and edge computing into IoT solutions." },
    { title: "ML for Engineers", desc: "Applying machine learning techniques to engineering problems." },
    { title: "PLC Programming", desc: "Automating industrial processes with PLCs and SCADA systems." },
    { title: "Java Fullstack", desc: "Building end-to-end web applications using Java, Spring Boot, React, and database technologies." }
  ];

  return (
    <>
      <Helmet>
        <title>Student Internships | Veertrons Engineering</title>
        <meta name="description" content="Join our hands-on internship programs in PCB Fabrication, IoT Ecosystems, Embedded Systems, Java Fullstack and more. Get industry-ready engineering skills." />
        <meta property="og:title" content="Student Internships | Veertrons Engineering" />
        <meta property="og:description" content="Hands-on technical training in PCB Fabrication, IoT, Embedded Systems, Java Fullstack and more." />
      </Helmet>
      <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-6">Student Internships</h1>
          <p className="text-xl text-slate-600 mb-12">
            Hands-on technical training designed to turn students into industry-ready engineers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {modules.map((m, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold mb-6">0{i+1}</div>
              <h3 className="text-xl font-bold mb-3">{m.title}</h3>
              <p className="text-slate-600 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <p className="mb-8 opacity-90">Apply now to join our next batch of student interns.</p>
          <Link to="/internship/apply" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Internships;