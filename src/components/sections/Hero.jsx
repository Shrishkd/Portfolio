import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const typingTexts = [
  'ML Developer',
  'Full-Stack Developer',
  'Problem Solver',
  'Trader'
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={profileImage}
              alt="Shrish"
              className="w-72 h-72 rounded-full object-cover border-4 border-primary shadow-purple"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary"
              animate={{ 
                boxShadow: [
                  '0 0 20px hsl(270 95% 75% / 0.3)',
                  '0 0 40px hsl(270 95% 75% / 0.6)',
                  '0 0 20px hsl(270 95% 75% / 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-gradient mb-4">
            Shrish
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            AI/ML Enthusiast | Full Stack Developer
          </h2>

          {/* Typing Animation */}
          <div className="text-lg md:text-xl text-primary font-medium h-8">
            <TypingAnimation texts={typingTexts} />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I'm Shrish — Computer Science student at VIT Bhopal with a strong interest in 
          AI, ML, full stack development, and fintech. I love solving real-world problems through code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-purple hover:shadow-glow transition-all duration-300"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1IdLZr6cqbp7KYciJFFPAWjYTz1HRKXpX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>



          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://github.com/Shrishkd" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/shrish-das-44ba5a27b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
