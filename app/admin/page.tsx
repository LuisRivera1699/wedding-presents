"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { GiftsAdmin } from "@/components/admin/GiftsAdmin";
import { ContributionsTable } from "@/components/admin/ContributionsTable";

export default function AdminPage() {
  const { user, signOut, isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-wedding-beige/30">
      <header className="bg-wedding-cream border-b border-wedding-gray/20 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-display text-xl text-wedding-deep">
            Panel Admin – Boda
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-wedding-gray">
              {user?.email}
            </span>
            <Link
              href="/"
              className="font-body text-sm text-wedding-soft hover:underline"
            >
              Ver web
            </Link>
            <button
              type="button"
              onClick={() => signOut()}
              className="font-body text-sm text-wedding-gray hover:text-wedding-deep"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <GiftsAdmin />
        <section>
          <h2 className="font-display text-2xl text-wedding-deep mb-4">
            Aportes
          </h2>
          <ContributionsTable />
        </section>
      </main>
    </div>
  );
}
