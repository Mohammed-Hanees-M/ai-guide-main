import { Award } from "lucide-react";

const certifications = [
  {
    title: "SQL for Data Analysis",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    title: "Applied Machine Learning: Ensemble Learning",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    year: "2024",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="floating-orb w-72 h-72 bg-primary/15 -left-36 top-1/3" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary mb-4 block">Achievements</span>
          <h2 className="section-title">My Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass rounded-xl p-6 gradient-border hover:bg-secondary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <span className="text-xs font-mono text-primary mt-2 block">({cert.year})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
