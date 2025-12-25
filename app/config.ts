export const siteConfig = {
	url: "https://jrgarciadev.com",
	author: {
		name: "Junior Garcia",
		role: "Founder & CEO at HeroUI (YC S24)",
		description:
			"Founder & CEO at HeroUI (YC S24). Building design-driven UI tools for web and mobile apps.",
		email: "junior@heroui.com",
	},
	social: {
		twitter: {
			handle: "@jrgarciadev",
			url: "https://twitter.com/jrgarciadev",
		},
		github: {
			handle: "jrgarciadev",
			url: "https://github.com/jrgarciadev",
		},
		email: "junior@heroui.com",
	},
	metadata: {
		title: {
			default: "Junior Garcia",
			template: "%s | Junior Garcia",
		},
		description:
			"Founder & CEO at HeroUI (YC S24). Building design-driven UI tools for web and mobile apps.",
		siteName: "Junior Garcia",
		locale: "en_US",
	},
	rss: {
		title: "Junior Garcia",
		description: "Junior Garcia's blog RSS feed",
	},
} as const;

export const baseUrl = siteConfig.url;
export const author = siteConfig.author;
export const social = siteConfig.social;
export const metadata = siteConfig.metadata;
