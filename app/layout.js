import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

export const metadata = {
  title: "NExt Js tutorial",
  description: "A tutorial for Next.js",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-8 py-20 max-w-6xl mx-auto">
        <Providers>{children}</Providers>
      </main>
    </>
  );
}
