import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 z-10 w-full bg-[#232936] p-6 text-center text-base text-white">
          <nav className="flex justify-around">
            <Link href="/">홈</Link>
            <Link href="/champions">챔피언 목록</Link>
            <Link href="/items">아이템 목록</Link>
            <Link href="/rotation">챔피언 로테이션</Link>
          </nav>
        </header>
        <main className="m-[120px]">{children}</main>
        <footer className="fixed bottom-0 z-10 w-full bg-[#232936] p-6 text-center text-sm text-white">
          [Your Product Name] is not endorsed by Riot Games and does not reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </footer>
      </body>
    </html>
  );
}
