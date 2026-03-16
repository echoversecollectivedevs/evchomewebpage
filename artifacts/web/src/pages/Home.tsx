import { motion, type Variants } from "framer-motion";
import { Headphones, Mic, Radio, Music, Speaker, Settings2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SoundWave } from "@/components/SoundWave";
import logo from "@assets/image_1773618990427.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const services = [
  {
    icon: <Headphones className="w-8 h-8 mb-4 text-white/80" />,
    title: "Music Production",
    description: "End-to-end production shaping raw ideas into polished, release-ready tracks."
  },
  {
    icon: <Settings2 className="w-8 h-8 mb-4 text-white/80" />,
    title: "Sound Design",
    description: "Bespoke sonic textures and foley for film, gaming, and digital experiences."
  },
  {
    icon: <Radio className="w-8 h-8 mb-4 text-white/80" />,
    title: "Audio Branding",
    description: "Developing unique sonic identities and audio logos that make your brand memorable."
  },
  {
    icon: <Mic className="w-8 h-8 mb-4 text-white/80" />,
    title: "Vocal Engineering",
    description: "Pristine vocal recording, editing, and mixing to ensure your message is heard."
  },
  {
    icon: <Speaker className="w-8 h-8 mb-4 text-white/80" />,
    title: "Live Events",
    description: "Immersive audio setups and live engineering for concerts and exhibitions."
  },
  {
    icon: <Music className="w-8 h-8 mb-4 text-white/80" />,
    title: "Artist Management",
    description: "Guiding emerging sonic artists with creative direction and industry strategy."
  }
];

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only submission
    const form = e.target as HTMLFormElement;
    const btn = form.querySelector('button');
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = "Message Transmitted!";
      btn.classList.add("bg-white", "text-black");
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove("bg-white", "text-black");
        form.reset();
      }, 3000);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-white/20 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Echoverse Collective Logo" 
              className="w-full max-w-md mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SoundWave bars={9} className="mb-8 opacity-80" />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient tracking-tight mb-6 uppercase">
              Shaping Sonic Landscapes
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
              We transcend traditional audio boundaries, crafting immersive auditory experiences that define the next generation of sound.
            </p>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              Discover Our Universe
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-sm font-display font-bold tracking-[0.3em] text-white/50 uppercase mb-4">The Collective</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
                Where Sound Meets <br />
                <span className="text-white/40">Imagination.</span>
              </h3>
              <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
                <p>
                  ECHOVERSE is more than a studio—it's a symposium of visionary producers, engineers, and sonic architects united by a singular obsession: the emotional resonance of sound.
                </p>
                <p>
                  Founded on the belief that audio is the unseen dimension of every great experience, we partner with boundary-pushing artists and forward-thinking brands to craft auditory worlds that captivate, communicate, and endure.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
                <div>
                  <p className="text-4xl font-display font-bold text-white mb-2">10+</p>
                  <p className="text-sm text-white/50 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-white mb-2">500+</p>
                  <p className="text-sm text-white/50 uppercase tracking-widest">Projects Mastered</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/abstract-sound.png`} 
                  alt="Abstract Sonic Landscape" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <SoundWave bars={5} className="justify-start mb-4 opacity-50" />
                  <p className="text-white/80 font-display font-medium tracking-wide">VISUALIZING FREQUENCIES</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white/[0.02] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-sm font-display font-bold tracking-[0.3em] text-white/50 uppercase mb-4">Our Arsenal</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Sonic Disciplines</h3>
            <p className="text-lg text-white/60 font-light">
              A comprehensive suite of audio services designed to elevate your project from concept to cultural impact.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden cursor-default"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-display font-semibold mb-3 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <SoundWave bars={5} className="mb-6 opacity-60" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Initiate Transmission</h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              Ready to construct your next auditory experience? Drop us a signal and our engineers will align with your frequency.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70 uppercase tracking-wider">Entity / Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/70 uppercase tracking-wider">Frequency / Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70 uppercase tracking-wider">Transmission / Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all resize-none"
                  placeholder="Describe your sonic vision..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl border border-white/20 bg-white/5 text-white font-display font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 uppercase"
              >
                Send Signal
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
