import { motion } from "motion/react";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section className="c-space section-spacing" id="experience">
      <div className="mb-12">
        <h2 className="text-heading">Work Experience</h2>
        <p className="mt-3 text-lg text-neutral-400">
          My professional journey and contributions
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative overflow-hidden transition-all duration-300 border group rounded-2xl bg-gradient-to-br from-storm via-indigo to-navy border-white/10 hover:border-lavender/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lavender/10"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 transition-opacity duration-300 opacity-0 rounded-bl-full group-hover:opacity-100 bg-gradient-to-br from-lavender/20 to-transparent" />
            
            {/* Content Container */}
            <div className="relative p-6 md:p-8">
              {/* Header Section */}
              <div className="mb-6">
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-semibold rounded-full bg-lavender/10 text-lavender border border-lavender/20">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {experience.date}
                </div>

                {/* Title and Company */}
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-lavender" />
                  <p className="text-lg font-medium text-lavender">
                    {experience.job}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Responsibilities List */}
              <div className="space-y-4">
                {experience.contents.map((content, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    {/* Custom bullet */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lavender to-royal" />
                    </div>
                    
                    {/* Content */}
                    <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
                      {content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-transparent via-lavender/50 to-transparent group-hover:opacity-100" />
            </div>

            {/* Background glow effect */}
            <div className="absolute transition-opacity duration-500 opacity-0 pointer-events-none -bottom-10 -right-10 w-52 h-52 group-hover:opacity-20 bg-gradient-to-tl from-lavender to-royal blur-3xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;