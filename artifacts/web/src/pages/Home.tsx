import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import logo from "@assets/noBgColor_1773620670918.png";

export default function Home() {
  return (
    <div className="bg-black text-foreground min-h-screen font-sans flex items-center justify-center relative overflow-hidden selection:bg-white/20 selection:text-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 0%, rgba(30,30,30,0.5) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(20,20,20,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 70%, rgba(25,25,25,0.3) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.img
          src={logo}
          alt="Echoverse Collective"
          className="w-64 md:w-80 mb-8 drop-shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        />

        <motion.div
          className="text-base md:text-lg lg:text-xl font-light tracking-[0.15em] uppercase text-white/60 mb-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span>Shaping a future</span>
          <FlipWords
            words={["Trusted", "Powered"]}
            duration={3000}
            className="text-white font-normal"
          />
          <span>with AI</span>
        </motion.div>

        <motion.a
          href="mailto:hello@echoversecollective.com"
          className="px-8 py-3.5 rounded-full border border-white/20 text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
}
