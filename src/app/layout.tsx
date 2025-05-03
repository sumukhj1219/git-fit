import "~/styles/globals.css";

import { type Metadata } from "next";
import {  Space_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Git Fit",
  description: "AI-powered commit messages, tailored to your diff",
  icons: [{ rel: "icon", url: "/git-fit.png" }],
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="bg-neutral-950">
        <TRPCReactProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
