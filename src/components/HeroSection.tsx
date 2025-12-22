import {
  ArrowDown,
  FileText,
  Linkedin,
  Github,
  Database,
  Brain,
  BarChart3,
  Code2,
  Cpu,
  Network,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import profilePlaceholder from "@/assets/profile-placeholder.png";

const floatingIcons = [
  { Icon: Database, delay: 0, x: "10%", y: "20%" },
  { Icon: Brain, delay: 1, x: "85%", y: "15%" },
  { Icon: BarChart3, delay: 2, x: "15%", y: "70%" },
  { Icon: Code2, delay: 3, x: "80%", y: "65%" },
  { Icon: Cpu, delay: 4, x: "5%", y: "45%" },
  { Icon: Network, delay: 5, x: "90%", y: "40%" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary/20 top-20 -left-48" />
      <div
        className="floating-orb w-80 h-80 bg-accent/20 bottom-20 -right-40"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute hidden md:block animate-float opacity-20 hover:opacity-40 transition-opacity"
          style={{
            left: x,
            top: y,
            animationDelay: `${delay}s`,
            animationDuration: `${4 + delay}s`,
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
      ))}

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* ================= PROFILE IMAGE ================= */}
          <div className="relative inline-block mb-8 animate-fade-in">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto">

              {/* Glow Ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-70 blur-sm"
                style={{ animationDuration: "8s" }}
              />

              {/* Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden glass">
                <img
                  src={profilePlaceholder}
                  alt="Mohammed Hanees M"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "50% 18%",
                    transform: "scale(1.05)",
                  }}
                />
              </div>

              {/* Status Dot */}
              <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center glow-primary">
                <span className="w-3 h-3 rounded-full bg-primary-foreground animate-pulse" />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-muted-foreground">
              CLASS 2024 – 26
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Mohammed Hanees M
          </h1>

          {/* Subtitle */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <h2 className="text-xl md:text-2xl font-mono text-gradient">
              Master of Science in Data Science
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 animate-fade-in">
            Aspiring Data Scientist with expertise in Python, ML, and AI.
            Building scalable solutions from chatbots to recommendation systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in">
            {/* RESUME BUTTON */}
            <a
              href="https://drive.google.com/file/d/1NjtwSvHXK6mWOnXxTrnIauvt4e1SYBZi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-primary"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-hanees-m-696040277/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-secondary/50 transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Mohammed-Hanees-M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-secondary/50 transition-all"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          {/* Scroll */}
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float"
          >
            <span className="text-xs font-mono">Scroll to explore</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
