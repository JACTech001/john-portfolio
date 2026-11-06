import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abel John Chiemerie | Software Developer",
  description:
    "Portfolio of Abel John Chiemerie, a software developer and cybersecurity enthusiast building thoughtful digital experiences.",
  applicationName: "Abel John — Portfolio",
  openGraph: {
    title: "Abel John Chiemerie | Software Developer",
    description:
      "Software Developer and Cybersecurity Enthusiast. Explore selected projects, skills and experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
