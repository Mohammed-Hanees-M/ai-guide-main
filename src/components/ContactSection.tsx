import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_j6z98wq",        // 🔴 replace
        "template_vjj9m3q",       // 🔴 replace
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ZH2hoSXLp4rdp85Dn"         // 🔴 replace
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-mono text-primary mb-4 block">
            Get in Touch
          </span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 gradient-border">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:haneeshaneesmullakkal@gmail.com"
                  className="hover:text-primary"
                >
                  haneeshaneesmullakkal@gmail.com
                </a>
              </div>
            </div>

            <div className="glass rounded-xl p-6 gradient-border">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+918156953080">+91 8156953080</a>
              </div>
            </div>

            <div className="glass rounded-xl p-6 gradient-border">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <p>Christ University, Bangalore</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-8 gradient-border">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
