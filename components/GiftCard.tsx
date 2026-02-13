"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProgressBar } from "./ProgressBar";
import {
  totalApprovedByGiftId,
  countApprovedByGiftId,
} from "@/hooks/useContributions";
import type { Gift } from "@/lib/types";
import type { Contribution } from "@/lib/types";

interface GiftCardProps {
  gift: Gift;
  contributions: Contribution[];
  onAportar: (gift: Gift) => void;
}

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80";

export function GiftCard({ gift, contributions, onAportar }: GiftCardProps) {
  const totalRaised = totalApprovedByGiftId(contributions, gift.id);
  const contributorCount = countApprovedByGiftId(contributions, gift.id);
  const percentage =
    gift.totalCost > 0 ? (totalRaised / gift.totalCost) * 100 : 0;
  const isComplete = percentage >= 100;

  return (
    <motion.article
      className="bg-wedding-cream rounded-2xl shadow-md overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[4/3] bg-wedding-beige">
        <Image
          src={gift.imageUrl || PLACEHOLDER_IMAGE}
          alt={gift.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-wedding-deep mb-2">
          {gift.name}
        </h3>
        <p className="font-body text-wedding-gray text-sm mb-4 line-clamp-2 flex-1">
          {gift.description}
        </p>
        <p className="font-body text-wedding-gray text-sm mb-2">
          {contributorCount === 1
            ? "1 persona ha aportado"
            : `${contributorCount} personas han aportado`}
        </p>
        <ProgressBar
          totalCost={gift.totalCost}
          totalRaised={totalRaised}
          className="mb-4"
        />
        {isComplete ? (
          <p className="font-body text-wedding-deep font-medium text-center py-2">
            Completado 💙
          </p>
        ) : (
          <button
            type="button"
            onClick={() => onAportar(gift)}
            className="w-full rounded-xl bg-wedding-deep text-wedding-cream font-body font-medium py-3 hover:bg-wedding-soft transition-colors duration-300"
          >
            Aportar
          </button>
        )}
      </div>
    </motion.article>
  );
}
