import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cx } from "tailwind-variants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl, author, metadata as siteMetadata, social } from "./config";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: siteMetadata.title,
	description: siteMetadata.description,
	authors: [{ name: author.name, url: baseUrl }],
	openGraph: {
		title: siteMetadata.title.default,
		description: siteMetadata.description,
		url: baseUrl,
		siteName: siteMetadata.siteName,
		locale: siteMetadata.locale,
		type: "website",
	},
	twitter: {
		card: "summary",
		creator: social.twitter.handle,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			dir="ltr"
			className={inter.variable}
			suppressHydrationWarning
		>
			<body
				className={cx(
					"bg-background text-foreground antialiased mt-8",
					inter.className
				)}
			>
				<ThemeProvider>
					<main className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
						{children}
						<Analytics />
						<SpeedInsights />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
