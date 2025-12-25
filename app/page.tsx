import { Avatar, Link, Separator } from "@heroui/react";
import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import { EnvelopeIcon, GitHubIcon, TwitterIcon } from "./components/icons";
import { social } from "./config";

export default function Page() {
	return (
		<section className="w-full">
			<header className="mb-6 flex flex-row items-center gap-4">
				<Avatar className="h-12 w-12" size="lg">
					<Image
						className="avatar__image"
						width={100}
						height={100}
						src="/avatar.png"
						alt="Junior Garcia"
					/>
				</Avatar>
				<div className="flex flex-col">
					<h1 className="text-lg font-medium tracking-tight">Junior Garcia</h1>
					<p className="text-sm font-medium text-muted">
						Founder & CEO at{" "}
						<Link
							className="text-inherit"
							href="https://v3.heroui.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							HeroUI
						</Link>{" "}
						(YC S24)
					</p>
				</div>
			</header>
			<div className="mb-6 space-y-4">
				<p className="text-base text-wrap">
					I’m the founder of{" "}
					<Link
						className="text-inherit text-base"
						href="https://v3.heroui.com"
						target="_blank"
						underline="none"
						rel="noopener noreferrer"
					>
						HeroUI
					</Link>
					, a design driven UI ecosystem for building beautiful web and mobile
					apps. I focus on the intersection of{" "}
					<em className="font-medium">design</em>,{" "}
					<em className="font-medium">engineering</em>, and{" "}
					<em className="font-medium">developer experience</em>, building tools
					that remove UI friction so creators can focus on what matters the
					most: building their product.
				</p>
				<p>
					Previously I worked at{" "}
					<Link
						href="https://deel.com"
						target="_blank"
						className="text-inherit text-base"
						underline="none"
						rel="noopener noreferrer"
					>
						Deel
					</Link>{" "}
					as a Frontend Engineer.
				</p>
			</div>
			<div className="-ml-1 flex gap-3 flex-wrap">
				<a
					className="button button--tertiary button--sm"
					href={`mailto:${social.email}`}
				>
					<EnvelopeIcon />
					Email
				</a>
				<a
					className="button button--tertiary button--sm"
					href={social.twitter.url}
					target="_blank"
				>
					<TwitterIcon />
					Twitter
				</a>
				<a
					className="button button--tertiary button--sm"
					href={social.github.url}
					target="_blank"
				>
					<GitHubIcon />
					GitHub
				</a>
			</div>
			<Separator className="my-6" />
			<div className="mb-12 space-y-4">
				<h2 className="text-sm font-semibold">Projects</h2>
				<div className="grid gap-4 -mx-2">
					<a
						className="bg-surface shadow-surface dark:bg-surface-secondary p-4 rounded-2xl gap-1"
						href="https://v3.heroui.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="flex items-center gap-1">
							HeroUI
							<Link.Icon className="text-muted/60" />
						</span>
						<p className="text-sm text-muted">
							modern UI library for web and mobile, built to help you move fast,
							stay consistent, and deliver delightful user experiences.
						</p>
					</a>
					<a
						className="bg-surface-secondary dark:bg-surface p-4 rounded-2xl gap-1"
						href="https://tailwind-variants.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="flex items-center gap-1">
							Tailwind Variants
							<Link.Icon className="text-muted/60" />
						</span>
						<p className="text-sm text-muted">
							A powerful variant API for Tailwind CSS, bringing a structured
							approach to design systems and UI components.
						</p>
					</a>
				</div>
			</div>
			{/* Coming soon */}
			{/* <div className="space-y-8">
				<h2 className="text-sm font-semibold">Writing</h2>
				<BlogPosts />
			</div> */}
		</section>
	);
}
