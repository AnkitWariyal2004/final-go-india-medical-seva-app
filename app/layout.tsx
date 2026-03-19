import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Go India & Medical Seva Apps",
  description:
    "Explore Go India for travel and Medical Seva for healthcare services. Download now and enjoy seamless services.",
  keywords: [
    "Go India App",
    "Medical Seva App",
    "Travel App India",
    "Healthcare App India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}