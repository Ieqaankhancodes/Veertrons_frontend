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

      <div className="container mx-auto px-6 relative z-10">
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
            <div key={i} className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mb-6">0{i+1}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{m.title}</h3>
              <p className="text-slate-600 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          {/* Decorative gradient elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to start?</h2>
          <p className="mb-8 opacity-90 relative z-10">Apply now to join our next batch of student interns.</p>
          <Link to="/internship/apply" className="relative z-10 inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors shadow-lg">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Internships;