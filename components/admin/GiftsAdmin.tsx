"use client";

import { useState } from "react";
import Image from "next/image";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { COLLECTIONS } from "@/lib/types";
import { useGifts } from "@/hooks/useGifts";
import { useAllContributions } from "@/hooks/useContributions";
import { totalApprovedByGiftId } from "@/hooks/useContributions";
import { GiftFormModal } from "./GiftFormModal";
import type { Gift } from "@/lib/types";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&q=80";

export function GiftsAdmin() {
  const { gifts, loading } = useGifts();
  const { contributions } = useAllContributions();
  const [editingGift, setEditingGift] = useState<Gift | null>(null);
  const [showForm, setShowForm] = useState(false);

  async function handleDelete(gift: Gift) {
    if (!confirm(`¿Eliminar "${gift.name}"?`)) return;
    try {
      await deleteDoc(doc(db, COLLECTIONS.gifts, gift.id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error al eliminar");
    }
  }

  if (loading) {
    return <p className="font-body text-wedding-gray">Cargando regalos...</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-display text-2xl text-wedding-deep">Regalos</h2>
        <button
          type="button"
          onClick={() => {
            setEditingGift(null);
            setShowForm(true);
          }}
          className="rounded-xl bg-wedding-deep text-wedding-cream font-body font-medium px-4 py-2 hover:bg-wedding-soft"
        >
          Crear regalo
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gifts.map((gift) => {
          const totalRaised = totalApprovedByGiftId(contributions, gift.id);
          const percentage =
            gift.totalCost > 0
              ? Math.min(100, (totalRaised / gift.totalCost) * 100)
              : 0;
          return (
            <div
              key={gift.id}
              className="bg-wedding-cream rounded-xl border border-wedding-gray/20 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video bg-wedding-beige">
                <Image
                  src={gift.imageUrl || PLACEHOLDER_IMAGE}
                  alt={gift.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-display text-lg text-wedding-deep">
                  {gift.name}
                </h3>
                <p className="font-body text-wedding-gray text-sm line-clamp-2 mt-1">
                  {gift.description}
                </p>
                <p className="font-body text-sm mt-2">
                  S/ {totalRaised.toLocaleString("es-PE")} / S/{" "}
                  {gift.totalCost.toLocaleString("es-PE")} ({percentage.toFixed(0)}
                  %)
                </p>
                <div className="flex gap-2 mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingGift(gift);
                      setShowForm(true);
                    }}
                    className="flex-1 rounded-lg border border-wedding-soft text-wedding-deep font-body text-sm py-2 hover:bg-wedding-soft/20"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(gift)}
                    className="rounded-lg border border-red-200 text-red-600 font-body text-sm py-2 hover:bg-red-50"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {(showForm || editingGift) && (
        <GiftFormModal
          gift={editingGift}
          onClose={() => {
            setShowForm(false);
            setEditingGift(null);
          }}
          onSaved={() => {
            setShowForm(false);
            setEditingGift(null);
          }}
        />
      )}
    </div>
  );
}
