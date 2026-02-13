"use client";

import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { COLLECTIONS } from "@/lib/types";
import type { Gift } from "@/lib/types";

function snapshotToGifts(snapshot: QuerySnapshot<DocumentData>): Gift[] {
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt,
    updatedAt: doc.data().updatedAt,
  })) as Gift[];
}

export function useGifts() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, COLLECTIONS.gifts),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setGifts(snapshotToGifts(snapshot));
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

  return { gifts, loading, error };
}
