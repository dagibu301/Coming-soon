import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Endless Commerce",
  description:
    "A composable commerce OS, designed for brand operators, by brand operators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed ">
          <div className="w-screen px-4 py-4 flex justify-between items-center">
            <a
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  text-white text-sm font-bold  rounded-xl transition duration-200"
              href="#"
            >
              Sign In
            </a>
            <a
              className="hidden lg:inline-block py-2 px-6 bg-gray-600 hover:bg-gray-700 text-sm text-white font-bold rounded-xl transition duration-200"
              href="#"
            >
              Sign up
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
