import { Brain, Lightbulb, Rocket } from "lucide-react";
import DataVisualization from "./DataVisualization";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expert",
    description: "Deep expertise in machine learning, NLP, and computer vision",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Transforming complex data into actionable business insights",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Adapting quickly to new technologies and methodologies",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Neural Network Background */}
      <DataVisualization />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary mb-4 block">Personal Insight</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Mohammed Hanees</span>, an aspiring Data Scientist 
              currently pursuing my M.Sc. in Data Science. I have hands-on experience in delivering analytics 
              and automation solutions through real-world projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary">Python, SQL, machine learning, and data visualization</span>, 
              I have built scalable solutions like chatbots, recommendation systems, and AI assistants. I am a quick learner, 
              passionate about AI applications, and committed to delivering business-impacting insights through agile 
              collaboration and continuous learning.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-xl p-6 gradient-border hover:bg-secondary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
