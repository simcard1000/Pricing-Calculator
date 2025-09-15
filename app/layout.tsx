import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
