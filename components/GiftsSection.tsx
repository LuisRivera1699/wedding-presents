"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGifts } from "@/hooks/useGifts";
import { useApprovedContributions } from "@/hooks/useContributions";
import { GiftCard } from "./GiftCard";
import { ContributionModal } from "./ContributionModal";
import type { Gift } from "@/lib/types";

export function GiftsSection() {
  const { gifts, loading, error } = useGifts();
  const { contributions } = useApprovedContributions();
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  return (
    <section id="sueños" className="py-20 sm:py-28 px-4 bg-wedding-beige/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-3xl sm:text-4xl text-wedding-deep text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Nuestros sueños
        </motion.h2>

        {loading && (
          <p className="text-center font-body text-wedding-gray">
            Cargando sueños...
          </p>
        )}
        {error && (
          <p className="text-center font-body text-red-600">
            No pudimos cargar los regalos. Revisa tu conexión.
          </p>
        )}
        {!loading && !error && gifts.length === 0 && (
          <p className="text-center font-body text-wedding-gray">
            Pronto compartiremos nuestros sueños aquí.
          </p>
        )}
        {!loading && !error && gifts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                contributions={contributions}
                onAportar={setSelectedGift}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedGift && (
          <ContributionModal
            gift={selectedGift}
            onClose={() => setSelectedGift(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
