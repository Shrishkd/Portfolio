import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Car & Gold Price Prediction Web App",
    description: "A comprehensive full-stack web application that predicts car and gold prices based on user input. Features include user authentication, responsive design with loading animations, and a modern UI built with React and Tailwind CSS.",
    technologies: ["React.js", "Supabase", "Tailwind CSS", "Machine Learning", "Authentication"],
    githubUrl: "https://github.com/Shrishkd/Prise",
    liveUrl: "https://prise-1.onrender.com",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
  },
  {
    title: "Sentiment Analysis ML App",
    description: "An intelligent sentiment analysis application that classifies user reviews into 5 different sentiment categories. Built with Flask backend and BERT model for accurate sentiment classification, with support for bulk CSV uploads." ,
    technologies: ["Flask", "BERT", "Python", "HTML/CSS", "JavaScript", "Machine Learning"],
    githubUrl: "https://github.com/Shrishkd/Sentiment_Analysis",
    liveUrl: "https://sentiment-analysis-ndrx.onrender.com",
    featured: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in web development and machine learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border shadow-lg hover:shadow-purple transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground p-1">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="h-7 px-3 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>


                  {/* Action Buttons */}
                  <div className="flex gap-3">
                  {/* GitHub Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-11 px-5 py-2.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {/* Live Demo Button */}
                  <Button
                    size="sm"
                    className="flex-1 h-11 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-purple transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
</div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Shrishkd" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
