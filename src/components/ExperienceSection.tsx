import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Data Science Intern",
    organization: "Seeroo IT Solutions",
    location: "Kerala, India",
    period: "Apr 2025 - May 2025",
    points: [
      "Developed an NLP-powered chatbot to extract answers from internal PDFs, improving support efficiency by 40%.",
      "Co-developed a product recommendation system using cosine similarity and feature embeddings.",
      "Completed a 100-hour internship focused on agile collaboration, user-centric delivery, and real-time problem-solving.",
    ],
  },
  {
    type: "education",
    title: "Master of Science in Data Science",
    organization: "Christ (Deemed to be University)",
    location: "Bangalore",
    period: "2024 - 2026",
    points: [],
  },
  {
    type: "education",
    title: "Bachelor of Science in Mathematics",
    organization: "With Data Science Focus",
    location: "",
    period: "Completed",
    points: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary mb-4 block">Experience & Education</span>
          <h2 className="section-title">My Journey</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${index}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-xl p-6 gradient-border hover:bg-secondary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {exp.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-primary" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>

                    <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                    <p className="text-primary text-sm mb-2">{exp.organization}</p>
                    {exp.location && (
                      <p className="text-muted-foreground text-xs mb-4">{exp.location}</p>
                    )}

                    {exp.points.length > 0 && (
                      <ul className="space-y-2">
                        {exp.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
