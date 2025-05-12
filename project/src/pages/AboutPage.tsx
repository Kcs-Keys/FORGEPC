import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Medal, BookOpen, Lightbulb, Code, Cpu } from 'lucide-react';

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About ForgePC</h1>
        <p className="text-xl text-gray-300">
          Empowering everyone to build the perfect computer for their needs
        </p>
      </motion.div>

      {/* Our Mission */}
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-center mb-6">
          <Medal className="h-8 w-8 text-cyan-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        </div>
        <div className="bg-slate-800 rounded-lg p-6">
          <p className="text-gray-300 text-lg mb-4">
            ForgePC was created with a simple yet powerful mission: to democratize access to custom PC building by removing the technical barriers that intimidate newcomers.
          </p>
          <p className="text-gray-300 text-lg">
            We believe that everyone should be able to experience the benefits of a computer perfectly tailored to their specific needs, without requiring advanced technical knowledge or navigating complex compatibility issues.
          </p>
        </div>
      </motion.section>

      {/* Why We Exist */}
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-center mb-6">
          <Lightbulb className="h-8 w-8 text-cyan-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Why We Exist</h2>
        </div>
        <div className="bg-slate-800 rounded-lg p-6">
          <p className="text-gray-300 text-lg mb-6">
            According to research by the Nielsen Norman Group, only 5% of the population in developed countries possesses advanced computer skills. This leaves the vast majority without the knowledge to confidently select computer components that align with their needs and budget.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700 p-5 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-300">
                Our platform democratizes PC building, allowing anyone to create a custom machine that fits their specific needs.
              </p>
            </div>
            
            <div className="bg-slate-700 p-5 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Education</h3>
              <p className="text-gray-300">
                We explain technical concepts in plain language, contributing to digital literacy and empowerment.
              </p>
            </div>
            
            <div className="bg-slate-700 p-5 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Economic Efficiency</h3>
              <p className="text-gray-300">
                We help users make smart choices based on performance needs, avoiding unnecessary expenses.
              </p>
            </div>
            
            <div className="bg-slate-700 p-5 rounded-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Digital Inclusion</h3>
              <p className="text-gray-300">
                With more accessible custom PCs, more people can participate in digital work, education, and creativity.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How We Help */}
      <motion.section 
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-center mb-6">
          <BookOpen className="h-8 w-8 text-cyan-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">How We Help</h2>
        </div>
        <div className="bg-slate-800 rounded-lg p-6">
          <p className="text-gray-300 text-lg mb-6">
            ForgePC tackles the common challenges faced by non-technical users when trying to build their own computers:
          </p>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-cyan-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">Simplified Component Education</h3>
                <p className="text-gray-300">
                  We explain what each component does in simple, jargon-free language that anyone can understand.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-cyan-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">Automated Compatibility Checking</h3>
                <p className="text-gray-300">
                  Our system ensures that all the components you select will work together seamlessly, preventing costly mistakes.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-cyan-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">Purpose-Based Recommendations</h3>
                <p className="text-gray-300">
                  We guide users toward components that match their specific use case, whether that's gaming, work, or content creation.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-cyan-600 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-white font-semibold text-lg">Visual Performance Indicators</h3>
                <p className="text-gray-300">
                  We provide clear performance ratings to help users understand how their choices will affect their computing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="bg-gradient-to-r from-cyan-900 to-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Perfect PC?</h2>
          <p className="text-gray-200 text-lg mb-6">
            Start exploring our PC Builder tool and create a machine that's perfectly tailored to your needs.
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 
                     text-slate-900 font-bold rounded-lg transition-colors"
          >
            <Cpu className="mr-2 h-5 w-5" />
            Launch PC Builder
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;