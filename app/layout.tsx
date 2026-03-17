import "./globals.css";
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
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}