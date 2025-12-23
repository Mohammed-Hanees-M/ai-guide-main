import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-mono text-xl font-bold text-gradient">
              <span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © 2024 Mohammed Hanees. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:haneeshaneesmullakkal@gmail.com"
              className="p-3 rounded-lg glass hover:bg-secondary/50 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-secondary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass hover:bg-secondary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
