import { motion } from "framer-motion";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import logo from "@assets/Color_logo_with_background_1773620190899.png";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans flex items-center justify-center relative overflow-hidden selection:bg-white/20 selection:text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.img
          src={logo}
          alt="Echoverse Collective"
          className="w-72 md:w-96 mb-8 drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
        />

        <motion.div
          className="w-full h-[60px] md:h-[80px] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <VaporizeTextCycle
            texts={["ECHOVERSE COLLECTIVE"]}
            font={{
              fontFamily: "Syne, sans-serif",
              fontSize: "36px",
              fontWeight: 700,
            }}
            color="rgb(255, 255, 255)"
            spread={5}
            density={5}
            animation={{
              vaporizeDuration: 2.5,
              fadeInDuration: 1.2,
              waitDuration: 1,
            }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.H1}
          />
        </motion.div>

        <motion.p
          className="text-white/50 text-lg md:text-xl font-light tracking-wide max-w-md mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Shaping sonic landscapes for the next generation of sound.
        </motion.p>

        <motion.a
          href="mailto:hello@echoversecollective.com"
          className="px-8 py-3.5 rounded-full border border-white/20 text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white hover:border-white/50 transition-all duration-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </div>
  );
}
