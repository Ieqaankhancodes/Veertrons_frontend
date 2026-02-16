import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaRocket, FaAward, FaUsers, FaCogs, FaGraduationCap, FaIndustry, FaLinkedin, FaGithub, FaCertificate, FaUniversity, FaHandshake, FaEye, FaBullseye } from 'react-icons/fa';
import aboutImg from '../assets/about.avif';
import mouImage from '../assets/MOU_BP.jpg';
import rcuImage from '../assets/rcu.jpg';
import vtu from '../assets/vtu.png';
import temp from '../assets/default.jpg';
// import shivanand from '../assets/shivanand.jpg';
// import sourabh from '../assets/sourabh.jpg';
// import vaishnavi from '../assets/vaishnavi.jpg';
// import saad from '../assets/saad.jpg';

const AboutUs = () => {
  const story = {
    vision: "To be a global leader in engineering innovation, bridging the gap between academia and industry by delivering cutting-edge solutions in IoT, Embedded Systems, and PCB Design while nurturing the next generation of engineers.",
    mission: "To provide hands-on, industry-relevant training through real-world projects, supply high-quality electronic components, and offer expert engineering services that empower students and businesses to achieve technological excellence."
  };

  const stats = [
    { label: "Projects Started", value: "2+", icon: FaCogs },
    { label: "Students Enrolled for Internships", value: "50+", icon: FaGraduationCap },
    { label: " Sales and Services provided", value: "4+", icon: FaIndustry },
  ];

  const team = [
    {
      name: "Mr.Viraj J",
      role: "CEO , MD , Founder & Director",
      image: temp,

      linkedin: "https://www.linkedin.com/in/viraj-t-jinagouda-395383221/"
    },
    {
      name: "Mr.Shivanand Pattar",
      role: "CTO , CO-Founder & Director",
      image: temp,
     
    },
    {
      name: "Mr.Sourabh Koli",
      role: "COO , Director",
      image: temp,
     
    },
     {
      name: "Ms.Vaishnavi Sanikop",
      role: "CIO",
      image: temp,
      bio: "Passionate about bridging the gap between academia and industry. Ensuring seamless operations and partnerships.",
      linkedin: "https://www.linkedin.com/in/vaishnavi-sanikoppa-2927883a6/"
    },
     {
      name: "Mr.Mohammad Saad",
      role: "Marketing Head",
      image: temp,
      
    },
     
  ];

  const values = [
    {
      icon: FaGraduationCap,
      title: "Expert Mentorship",
      desc: "Learn from industry veterans who have spent decades in electronics and embedded systems."
    },
    {
      icon: FaCogs,
      title: "Hands-on Innovation",
      desc: "We don't just teach theory; we build real-world products using professional fabrication labs."
    },
    {
      icon: FaRocket,
      title: "Future Ready",
      desc: "Our IoT and PCB modules are updated monthly to stay ahead of global tech trends."
    }
  ];

  const milestones = [
    { year: "2025", title: "Company Founded", desc: "Started with a vision to bridge academia and industry" },
    { year: "2025", title: "Sales and Services", desc: "Expanded our services to include sales and support for engineering products" },
    { year: "2025", title: "First Lab Setup", desc: "Established our first PCB fabrication laboratory" },
    { year: "2026", title: "Internships", desc: "Started offering internships to students" },
    { year: "2026", title: "Projects", desc: "Started EV-Charging-station project" }
  ];


  return (
    <>
      <Helmet>
        <title>About Us | Veertrons Engineering</title>
        <meta name="description" content="Learn about Veertrons Engineering - our mission, vision, and commitment to empowering the next generation of engineers through hands-on technical training." />
        <meta property="og:title" content="About Us | Veertrons Engineering" />
        <meta property="og:description" content="Learn about Veertrons Engineering and our mission to create industry-ready engineers." />
      </Helmet>
      <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">About Veertrons</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Engineering Excellence</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Founded on the principles of precision and innovation, Veertrons has evolved from a specialized consultancy into a multi-disciplinary engineering powerhouse. We bridge the gap between complex industrial requirements and next-generation talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                  <stat.icon className="text-2xl text-blue-600" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                From Vision to Reality
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At VEERTRONS, we believe that the best way to learn technology is to build it. Our journey started with a simple goal: to provide students with the same tools and environments used by top global engineering firms.
                </p>
                <p>
                  Whether it's complex 4-layer PCB fabrication or deploying sensor-to-cloud IoT architectures, our programs are designed to turn learners into creators.
                </p>
                <p>
                  Today, we stand as a trusted partner for both educational institutions and industrial clients, delivering cutting-edge solutions that shape the future of engineering.
                </p>
              </div>

              {/* Vision Section */}
              <div className="mt-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FaEye className="text-2xl" />
                  <h4 className="text-lg font-bold">Our Vision</h4>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {story.vision}
                </p>
              </div>

              {/* Mission Section */}
              <div className="mt-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <FaBullseye className="text-2xl" />
                  <h4 className="text-lg font-bold">Our Mission</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {story.mission}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={aboutImg}
                alt="Veertrons Engineering Lab" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Journey</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">Milestones of Success</h3>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-left' : 'pl-12 text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                      <span className="text-blue-600 font-black text-2xl">{milestone.year}</span>
                      <h4 className="text-xl font-bold text-slate-900 mt-1">{milestone.title}</h4>
                      <p className="text-slate-600 mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Values</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">What Drives Us</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-50 transition-all group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <value.icon />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VTU Registration Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            {/* VTU Logo */}
            <div className="mb-8">
              <img 
                src={vtu} 
                alt="VTU Logo" 
                className="h-24 mx-auto object-contain"
              />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">VTU Registration</span>
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Veertrons Engineering Equipment Sales and Services LLP, Belagavi is now officially registered with Visvesvaraya Technological University (VTU). This registration marks a major step forward in our commitment to supporting technical education and providing high-quality engineering solutions.
            </p>
          </motion.div>

          {/* Specialization Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">Precision Engineering</h4>
              <p className="text-slate-400 text-center leading-relaxed">State-of-the-art equipment and machinery for modern technical education and research requirements.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaHandshake className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">Sales & Support</h4>
              <p className="text-slate-400 text-center leading-relaxed">Comprehensive sales solutions with dedicated after-sales support for educational institutions.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">Technical Services</h4>
              <p className="text-slate-400 text-center leading-relaxed">Expert technical services and consultation tailored for universities and colleges.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              We look forward to collaborating with VTU and its affiliated colleges to empower the next generation of engineers.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-lg shadow-yellow-400/25"
            >
              <span>Connect With Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Strengthening Industry-Academia Ties - RCU Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <FaUniversity className="text-2xl text-white" />
              </div>
              <span className="text-indigo-300 font-bold tracking-widest uppercase text-sm">Strengthening Industry-Academia Ties</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Meeting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Rani Channamma University</span>
            </h3>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We are honoured to share that the team at Veertrons Equipment Sales & Services LLP recently had the privilege of meeting with the Registrar of Rani Channamma University (RCU), Shri Santosh Kamagouda Sir.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <FaHandshake className="text-4xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Insightful Session on Educational Infrastructure
                  </h4>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    It was an insightful session discussing the role of advanced equipment and technical services in enhancing educational infrastructure. We are deeply grateful to the Registrar and the University for recognizing our company's commitment to quality and service within the RCU community.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Local Industry Support</h5>
                        <p className="text-sm text-slate-400">Proudly supporting Belagavi institutions</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Quality Recognition</h5>
                        <p className="text-sm text-slate-400">Acknowledged by RCU leadership</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    As a Belagavi-based enterprise, we are proud to support our local institutions. We look forward to a meaningful association with Rani Channamma University and contributing to its mission of excellence.
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                      <span className="text-slate-900 font-bold">SK</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Shri Santosh Kamagouda</p>
                      <p className="text-sm text-slate-400">Registrar, Rani Channamma University</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-indigo-200 mb-4">
              Thank you, Santosh Kamagouda Sir, for your time and for encouraging local industry growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strengthening Industry-Academia Ties - MOU Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHandshake className="text-3xl text-blue-600" />
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Strengthening Industry-Academia Ties</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">MOU Signing Ceremony</h3>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* MOU Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src={mouImage} 
                    alt="MOU Signing - Veertrons & Bhartesh Polytechnic" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">
                    Veertrons & Bhartesh Polytechnic
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We are thrilled to announce that Veertrons Engineering Equipment Sales and Services LLP, Belagavi, has officially signed a Memorandum of Understanding (MOU) with Bhartesh Polytechnic, Belagavi.
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  At Veertrons, we believe that the bridge between theoretical knowledge and practical industry application is vital for the next generation of engineers. Through this partnership, we aim to:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="text-white text-lg" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Enhance Technical Skills</h5>
                      <p className="text-sm text-slate-600">Providing students with exposure to real-world engineering equipment and services.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <FaUniversity className="text-white text-lg" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Knowledge Exchange</h5>
                      <p className="text-sm text-slate-600">Bridging the gap between classroom learning and industrial demands.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <FaCogs className="text-white text-lg" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Skill Development</h5>
                      <p className="text-sm text-slate-600">Hosting workshops, training sessions, and internship opportunities.</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed pt-4 border-t border-slate-200">
                  We look forward to a fruitful collaboration that empowers the students of Bhartesh Polytechnic and contributes to the thriving engineering ecosystem in Belagavi.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Short RCU Section - After MOU */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUniversity className="text-2xl text-blue-600" />
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Strengthening Industry-Academia Ties in Belagavi</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Rani Channamma University Visit</h3>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/3"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                  <img 
                    src={rcuImage} 
                    alt="Veertrons Team with RCU Registrar" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-2/3 space-y-4"
              >
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are honoured to share that the team at Veertrons Equipment Sales & Services LLP recently had the privilege of meeting with the Registrar of Rani Channamma University (RCU), Shri Santosh Kamagouda Sir.
                </p>
                <p className="text-blue-600 font-semibold">
                  Thank you, Santosh Kamagouda Sir, for your time and for encouraging local industry growth.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">Meet Our Team</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 text-center border border-slate-100"
              >
                <img 
                  src={member.image} 
                  className="w-28 h-28 rounded-2xl mx-auto mb-6 object-cover shadow-lg" 
                  alt={member.name} 
                />
                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-blue-600 text-sm font-bold mb-4 uppercase tracking-tighter">{member.role}</p>
                
                <div className="flex justify-center gap-4">
                  <a href={member.linkedin} className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <FaLinkedin />
                  </a>
          
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Whether you're a student looking for internships or a company seeking engineering solutions, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/services/internships" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30">
                Explore Internships
              </a>
              <a href="/services/sales-engineering" className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
