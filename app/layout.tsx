import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { ThemeProvider } from "@/components/theme-provider";
import { Bricolage_Grotesque } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const myFont = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
