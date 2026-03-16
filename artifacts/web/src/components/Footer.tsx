import { Instagram, Twitter, Youtube, Disc } from "lucide-react";
import logo from "@assets/image_1773618990427.png";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 flex flex-col items-start">
            <img 
              src={logo} 
              alt="Echoverse Collective Logo" 
              className="h-16 object-contain mb-6 opacity-90"
            />
            <p className="text-white/50 max-w-sm font-sans leading-relaxed">
              We are a creative audio collective dedicated to shaping immersive sonic landscapes for modern brands, artists, and experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Disc size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <p>&copy; {new Date().getFullYear()} Echoverse Collective. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
