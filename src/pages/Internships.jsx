import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Internships = () => {
  const modules = [
    { title: "PCB Fabrication", desc: "Design and manufacture professional-grade circuit boards." },
    { title: "IoT Ecosystems", desc: "Connecting hardware to the cloud using MQTT and HTTP." },
    { title: "Embedded Systems", desc: "Developing firmware for embedded devices and microcontrollers." },
    { title: "Advanced IoT", desc: "Integrating AI and edge computing into IoT solutions." },
    { title: "AI ML using Python", desc: "Applying machine learning techniques to engineering problems." },
    { title: "PLC Programming and Automation", desc: "Automating industrial processes with PLCs and SCADA systems." },
    { title: "Java Fullstack (Upcoming)", desc: "Building end-to-end web applications using Java, Spring Boot, React, and database technologies." },
    { title: "ML using IoT(Upcoming Free)", desc: "Free module on applying machine learning techniques to IoT data for predictive analytics and smart decision-making." },
    { title: "Robotics in Construction(Upcoming Free)", desc: "Free module on the application of robotics and automation technologies in the construction industry, covering topics like autonomous machinery, drone surveying, and robotic bricklaying." },
    { title: "IoT for Road Construction(Upcoming Free)", desc: "Free module on leveraging artificial intelligence techniques to solve complex engineering challenges, including predictive maintenance, optimization, and intelligent control systems." },
    { title: "Firmware IoT (Upcoming)", desc: "In-depth training on developing firmware for IoT devices, covering real-time operating systems, low-level programming, and hardware interfacing." },
    { title: "Robotics with IoT (Upcoming)", desc: "Comprehensive training on integrating robotics with IoT technologies, covering topics like autonomous navigation, sensor integration, and robotic control systems." },
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
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-black text-slate-900 mb-6">Student Internships</h1>
          <p className="text-xl text-slate-600 mb-6">
            Hands-on technical training designed to turn students into industry-ready engineers.
          </p>
          <a 
            href="https://vtu.internyet.in/companies/veertrons-engineering-equipment-sales-services-llp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors mb-12"
          >
            Explore us on VTU Portal
          </a>
        </motion.div>

        {/* Modules Grid Section with Gradient */}
        <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 -z-10 mb-8">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 relative z-10">
            {modules.map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mb-6">{i+1}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{m.title}</h3>
                <p className="text-slate-600 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Offerings Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl -z-10" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 p-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Placement Assistance</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our internship program comes with guaranteed placement assistance and industry connections to kickstart your career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-400/80 to-emerald-600/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Job Placement Assistance</h3>
                <p className="text-white/80 text-sm">Direct interviews with leading engineering companies and startups in our network.</p>
              </div>

              

              

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-400/80 to-purple-600/80 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Career Guidance</h3>
                <p className="text-white/80 text-sm">One-on-one mentoring and career counseling to help you land your dream job.</p>
              </div>
            </div>

            
          </div>
        </motion.div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          {/* Decorative gradient elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to start?</h2>
          <p className="mb-8 opacity-90 relative z-10">Apply now to join our next batch of student interns.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/internship/apply" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors shadow-lg">
              Apply Now
            </Link>
            <a 
              href="https://vtu.internyet.in/companies/veertrons-engineering-equipment-sales-services-llp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore us on VTU Portal
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Internships;