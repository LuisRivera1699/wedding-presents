"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WEDDING_DATE_PLACEHOLDER = "07 de Marzo, 2026";

export function Hero() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-wedding-deep"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/atmo-67f01.firebasestorage.app/o/bg.jpg?alt=media&token=ff6d168b-4d41-44e3-b241-90ba9dfb3bbe"
          alt="Wedding"
          fill
          className="object-cover md:object-contain"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wedding-deep/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.p
          className="font-display text-wedding-cream/90 text-sm sm:text-base tracking-[0.3em] uppercase mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Nos casamos
        </motion.p>
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wedding-cream font-medium tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Sofía & Luis
        </motion.h1>
        <motion.p
          className="font-body text-wedding-cream/95 text-lg sm:text-xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {WEDDING_DATE_PLACEHOLDER}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#sueños"
            className="inline-block rounded-full bg-wedding-cream text-wedding-deep font-body font-medium px-8 py-3 shadow-lg hover:bg-wedding-beige transition-colors duration-300"
          >
            Ver nuestros sueños
          </a>
        </motion.div>
      </div>
    </section>
  );
}
