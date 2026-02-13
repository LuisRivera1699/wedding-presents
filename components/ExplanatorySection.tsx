"use client";

import { motion } from "framer-motion";

export function ExplanatorySection() {
  return (
    <motion.section
      id="explicacion"
      className="py-20 sm:py-28 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-wedding-gray text-lg sm:text-xl leading-relaxed">
          En lugar de regalos físicos, hemos preparado una lista de sueños que
          queremos cumplir juntos. Si deseas acompañarnos con un aporte, puedes
          hacerlo aquí 💙
        </p>
      </div>
    </motion.section>
  );
}
