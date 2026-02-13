import { Timestamp } from "firebase/firestore";

export const COLLECTIONS = {
  gifts: "wedding_gifts",
  contributions: "wedding_contributions",
} as const;

export type ContributionStatus = "pending" | "approved" | "rejected";

export interface Gift {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  totalCost: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Contribution {
  id: string;
  name: string;
  amount: number;
  paymentMethod: string;
  proofImageUrl: string;
  status: ContributionStatus;
  giftId: string;
  createdAt: Timestamp;
}

export const PAYMENT_METHODS = [
  "Yape Sofía",
  "Yape Luis",
  "Interbank",
] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];
