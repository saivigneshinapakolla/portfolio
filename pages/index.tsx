import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaGraduationCap, FaFileDownload } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';
import { useState } from 'react';

export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDownload = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-dark-light text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Hi, I'm <span className="text-secondary">Aamer Bhankiwala</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">A Cloud Enthusiast and Microsoft Azure Certified Explorer</p>
          <p className="text-lg text-gray-300">Building the future on the cloud, one project at a time.</p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-dark-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-relaxed">
            Certified in Microsoft Azure (AZ-900) with real-world experience from a 2-month internship at a leading edtech company. 
            Skilled in cloud architecture fundamentals, cloud security, and scalable deployments. 
            Exploring the world of web development to merge the best of cloud and code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <SiMicrosoftazure className="text-4xl" />, text: "Cloud Computing (Microsoft Azure)" },
              { icon: <FaCode className="text-4xl" />, text: "Basics of Web Development (HTML, CSS, JS)" },
              { icon: <FaCloud className="text-4xl" />, text: "Internship Experience (Cloud-based solutions)" },
              { icon: <SiMicrosoftazure className="text-4xl" />, text: "Microsoft Azure Certified (AZ-900)" },
              { icon: <FaGraduationCap className="text-4xl" />, text: "Problem Solving" },
              { icon: <FaGraduationCap className="text-4xl" />, text: "Continuous Learning" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-light p-6 rounded-lg flex items-center space-x-4"
              >
                {skill.icon}
                <span>{skill.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-dark-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Projects</h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Internship Project</h3>
              <p>Designed and deployed cloud solutions to enhance learning platforms.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-dark p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Personal Projects</h3>
              <p>Created basic websites integrating cloud backend services.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaFileDownload className="inline-block mr-2" />
            Grab My CV
          </motion.button>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 text-secondary font-bold"
            >
              Thank you for downloading! 🚀
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
} 