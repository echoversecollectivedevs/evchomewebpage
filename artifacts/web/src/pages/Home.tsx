import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import logo from "@assets/noBgColor_1773620670918.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 201) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.message || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Unable to connect. Please try again.");
      setStatus("error");
    }
  };

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

      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-xl">
        <motion.img
          src={logo}
          alt="Echoverse Collective"
          className="w-64 md:w-80 mb-8 drop-shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
        />

        <motion.div
          className="text-base md:text-lg lg:text-xl font-light tracking-[0.15em] uppercase text-white/60 mb-6 flex items-center justify-center"
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

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.p
              key="success"
              className="text-sm tracking-widest uppercase text-white/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              You're in. Watch your inbox.
            </motion.p>
          ) : (
            <motion.div
              key="form"
              className="w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-xs md:text-sm text-white/40 mb-4 tracking-wide">
                Subscribe to our daily AI briefing — curated insights delivered to your inbox
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="w-full sm:flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
                />
                <HoverBorderGradient
                  as="button"
                  containerClassName="border-white/10 shrink-0"
                  className="px-6 py-2.5 text-sm font-medium tracking-widest uppercase"
                  {...({ type: "submit", disabled: status === "loading" } as any)}
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </HoverBorderGradient>
              </form>

              {status === "error" && (
                <motion.p
                  className="text-xs text-red-400/70 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {errorMessage}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
