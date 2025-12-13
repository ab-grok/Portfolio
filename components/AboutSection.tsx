import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'GraphQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'CI/CD',
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://c.animaapp.com/mj2xtqbgWtXM5V/img/ai_2.png"
              alt="engineer portrait illustration"
              className="w-full h-auto rounded-lg neon-glow"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About <span className="text-gradient-1">Me</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              I'm a passionate software engineer specializing in building exceptional digital experiences. 
              With a focus on modern web technologies and clean architecture, I transform complex problems 
              into elegant, scalable solutions. My approach combines technical expertise with a deep 
              understanding of user needs to create products that truly make a difference.
            </p>

            <p className="text-lg text-gray-200 mb-12 leading-relaxed">
              I believe in writing code that is not only functional but also maintainable and accessible. 
              Every project is an opportunity to push boundaries and deliver excellence.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-6 py-3 bg-card text-card-foreground rounded-lg border border-primary/30 text-base hover:border-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
