import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Geist, Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Share/Header";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    absolute: APP_NAME,
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", figtree.variable)}
    >
      <Header />
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme="light"
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
