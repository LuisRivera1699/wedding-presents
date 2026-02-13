"use client";

import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { COLLECTIONS } from "@/lib/types";
import type { Contribution } from "@/lib/types";

function snapshotToContributions(
  snapshot: QuerySnapshot<DocumentData>
): Contribution[] {
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt,
  })) as Contribution[];
}

/** All contributions (admin only) */
export function useAllContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, COLLECTIONS.contributions),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setContributions(snapshotToContributions(snapshot));
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err as Error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return { contributions, loading, error };
}

/** Approved contributions only (for public progress calculation) */
export function useApprovedContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, COLLECTIONS.contributions),
      where("status", "==", "approved")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setContributions(snapshotToContributions(snapshot));
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err as Error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return { contributions, loading, error };
}

export function totalApprovedByGiftId(
  contributions: Contribution[],
  giftId: string
): number {
  return contributions
    .filter((c) => c.giftId === giftId)
    .reduce((sum, c) => sum + c.amount, 0);
}

export function countApprovedByGiftId(
  contributions: Contribution[],
  giftId: string
): number {
  return contributions.filter((c) => c.giftId === giftId).length;
}
