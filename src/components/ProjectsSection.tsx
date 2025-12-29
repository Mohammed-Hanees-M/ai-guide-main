import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

import projectVoiceAssistant from '@/assets/project-voice-assistant.png';
import projectChatbot from '@/assets/project-chatbot.png';
import projectRecommendation from '@/assets/project-recommendation.png';
import projectBilling from '@/assets/project-billing.png';
import projectFaceRecognition from '@/assets/project-face-recognition.png';

const projects = [
  {
    title: "AI Voice Assistant",
    status: "Ongoing",
    description: "Developing a voice assistant with speech input, reminders, face recognition, and ChatGPT integration for task automation.",
    technologies: ["Python", "ChatGPT API", "Face Recognition", "Speech-to-Text"],
    image: projectVoiceAssistant,
    gradient: "from-purple-600 via-pink-500 to-cyan-400"
  },
  {
    title: "Client-Based Chatbot",
    status: "Completed",
    description: "Built a chatbot that answers business queries using internal PDF content, enhancing client accessibility and document utility.",
    technologies: ["NLP", "Python", "RAG", "LangChain"],
    image: projectChatbot,
    gradient: "from-cyan-500 via-blue-500 to-purple-600"
  },
  {
    title: "Product Recommendation Engine",
    status: "Completed",
    description: "Created a product discovery engine with intelligent similar-item suggestions using cosine similarity.",
    technologies: ["Cosine Similarity", "Feature Embeddings", "Python"],
    image: projectRecommendation,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500"
  },
  {
    title: "Fruit Billing Web Application",
    status: "Completed",
    description: "Built a full-stack billing app with Excel export, real-time pricing, and customer balance management.",
    technologies: ["Full-Stack", "Excel Integration", "Real-time"],
    image: projectBilling,
    gradient: "from-orange-500 via-amber-500 to-yellow-500"
  },
  {
    title: "Face Recognition Attendance",
    status: "Completed",
    description: "Automated attendance using OpenCV-based face detection and Excel integration for academic use.",
    technologies: ["OpenCV", "Face Detection", "Python", "Excel"],
    image: projectFaceRecognition,
    gradient: "from-pink-500 via-rose-500 to-red-500"
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const totalProjects = projects.length;

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, totalProjects]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const getCardTransform = (index: number) => {
    const diff = (index - currentIndex + totalProjects) % totalProjects;
    const normalizedDiff = diff > totalProjects / 2 ? diff - totalProjects : diff;

    const angle = normalizedDiff * 72;
    const radius = 500;
    const zOffset = Math.cos((angle * Math.PI) / 180) * radius;
    const xOffset = Math.sin((angle * Math.PI) / 180) * radius * 1.5;
    const rotateY = -normalizedDiff * 25;
    const scale = 0.5 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.25;
    const opacity = Math.abs(normalizedDiff) <= 2 ? 1 - Math.abs(normalizedDiff) * 0.35 : 0;

    return {
      transform: `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(zOffset + 1000),
    };
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        {/* Floating Code Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/10 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {['<>', '/>', '{}', '()', '[]', '&&', '||', '=>'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-mono mb-4 animate-fade-in">
            &lt;projects /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Portfolio of Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Showcasing innovative solutions in AI, Machine Learning, and Data Science
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative h-[600px] md:h-[700px] flex items-center justify-center max-w-full"
          style={{ perspective: '1600px' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 z-50 w-14 h-14 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 z-50 w-14 h-14 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Cards Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, index) => {
              const style = getCardTransform(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={project.title}
                  className="absolute w-[240px] md:w-[300px] transition-all duration-700 ease-out cursor-pointer"
                  style={style}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                >
                  <div className={`relative group ${isActive ? 'scale-105' : ''} transition-transform duration-500`}>
                    {/* Outer Glow */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

                    {/* Card Container */}
                    <div className="relative glass rounded-2xl overflow-hidden border border-white/10">
                      {/* Image Container with 3D Effect */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />

                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-50" />
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Ongoing'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            }`}>
                            {project.status}
                          </span>
                        </div>

                        {/* Corner Brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary text-sm font-medium hover:from-primary/30 hover:to-accent/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                            View Details
                          </button>
                          <button className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300">
                            <Github className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Gradient Line */}
                      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className="relative group"
              aria-label={`Go to project ${index + 1}`}
            >
              <div className={`w-12 h-1 rounded-full transition-all duration-500 ${index === currentIndex
                ? 'bg-gradient-to-r from-primary to-accent'
                : 'bg-muted-foreground/20 group-hover:bg-muted-foreground/40'
                }`} />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
