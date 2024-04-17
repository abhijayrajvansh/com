import '@/styles/globals.css'
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import { Bricolage_Grotesque } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
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

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "background" },
		{ media: "(prefers-color-scheme: dark)", color: "background" },
	],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		
    <html lang="en">
        <body className={`${myFont.className}`}>
					<Providers>
            {children}
					</Providers>
        </body>
    </html>
		
  );
}
