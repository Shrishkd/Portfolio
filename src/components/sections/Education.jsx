import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';
import { Card } from '@/components/ui/card';

const educationData = [
  {
    institution: "VIT Bhopal University",
    degree: "B.Tech Computer Science Engineering (AI/ML)",
    period: "2023 - Present",
    cgpa: "8.4",
    icon: GraduationCap,
    description: "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications."
  },
  {
    institution: "Resonance International School",
    degree: "Class 12",
    period: "2021 - 2022",
    cgpa: null,
    icon: Award,
    description: "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics."
  },
  {
    institution: "DAV Public School",
    degree: "Class 10",
    period: "2019 - 2020",
    cgpa: null,
    icon: School,
    description: "Foundation in core subjects with excellent academic performance."
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gradient mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and the foundations that shaped my technical expertise
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 md:p-8 bg-card border-border shadow-lg hover:shadow-purple transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            {edu.institution}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-2">
                            {edu.degree}
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{edu.period}</span>
                          </div>
                          {edu.cgpa && (
                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                              CGPA: {edu.cgpa}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
