import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, MonitorCheck, PlusCircle, HelpCircle, Award, PackageCheck } from 'lucide-react';

const HomePage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 lg:pr-10"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Build Your Perfect PC <span className="text-cyan-400">Without The Confusion</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                ForgePC guides you through building a computer that's perfect for your needs,
                with clear explanations and guaranteed component compatibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/builder"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent
                            text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500
                            transition-colors duration-300 ease-in-out"
                >
                  Start Building
                  <PlusCircle className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700
                            text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-800
                            transition-colors duration-300 ease-in-out"
                >
                  Learn More
                  <HelpCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 mt-10 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg"
                alt="PC Building"
                className="rounded-lg shadow-2xl object-cover w-full h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800 rounded-xl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose ForgePC?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a PC should be accessible to everyone, not just tech enthusiasts.
              We've simplified the process while keeping you informed.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-slate-700 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Simplified Education</h3>
              <p className="text-gray-300">
                Learn about computer components in plain language without technical jargon.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="bg-slate-700 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Perfect Compatibility</h3>
              <p className="text-gray-300">
                Our intelligent system ensures that all components you select work seamlessly together.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="bg-slate-700 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <MonitorCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Use-Appropriate Choices</h3>
              <p className="text-gray-300">
                Receive recommendations based on your specific use case, whether it's gaming, design, or work.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              className="bg-slate-700 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <div className="h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                <PackageCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Confident Decisions</h3>
              <p className="text-gray-300">
                Make informed choices with clear explanations about each component's purpose and importance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building your dream PC is just a few simple steps away
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 */}
            <motion.div className="text-center" variants={fadeIn}>
              <div className="w-16 h-16 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tell Us Your Needs</h3>
              <p className="text-gray-300">
                Answer a few simple questions about what you'll use your computer for, and we'll guide you toward the right components.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="text-center" variants={fadeIn}>
              <div className="w-16 h-16 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Select Components</h3>
              <p className="text-gray-300">
                Browse through our curated list of compatible components with easy-to-understand explanations of each part.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="text-center" variants={fadeIn}>
              <div className="w-16 h-16 bg-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Review Your Build</h3>
              <p className="text-gray-300">
                Get a comprehensive overview of your selected components, compatibility confirmation, and estimated performance metrics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-slate-800 rounded-xl">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream PC?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Start your journey to a custom-built PC that perfectly matches your needs and budget.
            </p>
            <Link
              to="/builder"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent
                        text-base font-bold rounded-md text-slate-900 bg-cyan-400 hover:bg-cyan-300
                        shadow-lg transition-colors duration-300 ease-in-out"
            >
              Begin Your PC Build
              <Cpu className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;