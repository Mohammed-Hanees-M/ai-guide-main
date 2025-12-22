import { useState, useEffect } from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  BarChart3, 
  Eye, 
  Wrench,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const skills = [
  {
    name: "Python",
    subtitle: "Pandas, NumPy, Scikit-learn",
    level: 90,
    icon: Code2,
    color: "from-primary to-cyan-400"
  },
  {
    name: "Machine Learning & AI",
    subtitle: "TensorFlow, PyTorch",
    level: 85,
    icon: Brain,
    color: "from-accent to-purple-400"
  },
  {
    name: "Databases",
    subtitle: "MySQL, PostgreSQL, MongoDB",
    level: 80,
    icon: Database,
    color: "from-emerald-500 to-teal-400"
  },
  {
    name: "Data Visualization",
    subtitle: "Power BI, Tableau",
    level: 90,
    icon: BarChart3,
    color: "from-orange-500 to-amber-400"
  },
  {
    name: "NLP & Computer Vision",
    subtitle: "Text & Image Processing",
    level: 75,
    icon: Eye,
    color: "from-pink-500 to-rose-400"
  },
  {
    name: "Development Tools",
    subtitle: "Git, Docker, Flask",
    level: 70,
    icon: Wrench,
    color: "from-blue-500 to-indigo-400"
  }
];

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSkills = skills.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSkills);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSkills]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSkills);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + totalSkills) % totalSkills;
    const normalizedDiff = diff > totalSkills / 2 ? diff - totalSkills : diff;
    
    const angle = normalizedDiff * 60;
    const radius = 400;
    const zOffset = Math.cos((angle * Math.PI) / 180) * radius;
    const xOffset = Math.sin((angle * Math.PI) / 180) * radius;
    const scale = 0.6 + (Math.cos((angle * Math.PI) / 180) + 1) * 0.2;
    const opacity = Math.abs(normalizedDiff) <= 2 ? 1 - Math.abs(normalizedDiff) * 0.3 : 0;
    const blur = Math.abs(normalizedDiff) * 2;

    return {
      transform: `translateX(${xOffset}px) translateZ(${zOffset}px) rotateY(${-angle}deg) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex: Math.round(zOffset + 1000),
    };
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-mono mb-4 animate-fade-in">
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Technical Proficiencies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Mastering the tools and technologies that drive data-driven solutions
          </p>
        </div>

        {/* 3D Carousel */}
        <div 
          className="relative h-[500px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Track */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const style = getCardStyle(index);
              
              return (
                <div
                  key={skill.name}
                  className="absolute w-72 md:w-80 transition-all duration-700 ease-out cursor-pointer"
                  style={style}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                >
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    
                    {/* Card */}
                    <div className="relative glass rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
                      {/* Icon */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-center mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mb-6">{skill.subtitle}</p>

                      {/* Circular Progress */}
                      <div className="relative w-28 h-28 mx-auto">
                        <svg className="w-full h-full transform -rotate-90">
                          {/* Background Circle */}
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted/20"
                          />
                          {/* Progress Circle */}
                          <circle
                            cx="56"
                            cy="56"
                            r="48"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${skill.level * 3.02} 302`}
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
                      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-primary to-accent' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
