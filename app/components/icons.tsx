import type { Ref, SVGProps } from "react";
import { cn } from "tailwind-variants";

export const DiscordIcon = (props: SVGProps<SVGSVGElement>) => {
	const { className, ...restProps } = props;

	return (
		<svg
			aria-hidden="true"
			className={cn("text-2xl", className)}
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
			<path
				d="M19.7701 5.33C18.4401 4.71 17.0001 4.26 15.5001 4C15.4737 4.00038 15.4486 4.01116 15.4301 4.03C15.2501 4.36 15.0401 4.79 14.9001 5.12C13.3091 4.88015 11.6911 4.88015 10.1001 5.12C9.96012 4.78 9.75012 4.36 9.56012 4.03C9.55012 4.01 9.52012 4 9.49012 4C7.99012 4.26 6.56012 4.71 5.22012 5.33C5.21012 5.33 5.20012 5.34 5.19012 5.35C2.47012 9.42 1.72012 13.38 2.09012 17.3C2.09012 17.32 2.10012 17.34 2.12012 17.35C3.92012 18.67 5.65012 19.47 7.36012 20C7.39012 20.01 7.42012 20 7.43012 19.98C7.83012 19.43 8.19012 18.85 8.50012 18.24C8.52012 18.2 8.50012 18.16 8.46012 18.15C7.89012 17.93 7.35012 17.67 6.82012 17.37C6.78012 17.35 6.78012 17.29 6.81012 17.26C6.92012 17.18 7.03012 17.09 7.14012 17.01C7.16012 16.99 7.19012 16.99 7.21012 17C10.6501 18.57 14.3601 18.57 17.7601 17C17.7801 16.99 17.8101 16.99 17.8301 17.01C17.9401 17.1 18.0501 17.18 18.1601 17.27C18.2001 17.3 18.2001 17.36 18.1501 17.38C17.6301 17.69 17.0801 17.94 16.5101 18.16C16.4701 18.17 16.4601 18.22 16.4701 18.25C16.7901 18.86 17.1501 19.44 17.5401 19.99C17.5701 20 17.6001 20.01 17.6301 20C19.3501 19.47 21.0801 18.67 22.8801 17.35C22.9001 17.34 22.9101 17.32 22.9101 17.3C23.3501 12.77 22.1801 8.84 19.8101 5.35C19.8001 5.34 19.7901 5.33 19.7701 5.33ZM9.02012 14.91C7.99012 14.91 7.13012 13.96 7.13012 12.79C7.13012 11.62 7.97012 10.67 9.02012 10.67C10.0801 10.67 10.9201 11.63 10.9101 12.79C10.9101 13.96 10.0701 14.91 9.02012 14.91ZM15.9901 14.91C14.9601 14.91 14.1001 13.96 14.1001 12.79C14.1001 11.62 14.9401 10.67 15.9901 10.67C17.0501 10.67 17.8901 11.63 17.8801 12.79C17.8801 13.96 17.0501 14.91 15.9901 14.91Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GitHubIcon = (props: SVGProps<SVGSVGElement>) => {
	const { className, ...restProps } = props;

	return (
		<svg
			aria-hidden="true"
			className={cn("text-2xl", className)}
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
			<path
				d="M12 2.5a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34C5.68 17.31 5.03 17 5.03 17c-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.74c0 .27.16.59.67.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0-10-10Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => {
	const { className, ...restProps } = props;

	return (
		<svg
			aria-hidden="true"
			className={cn("text-2xl", className)}
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
			<path
				d="M13.795 11.033 20.68 2.5h-3.073l-5.255 6.517L7.69 2.5H1l7.806 10.91L1.47 22.5h3.074l5.705-7.07 5.061 7.07H22l-8.205-11.467Zm-2.38 2.95L9.97 11.964 4.36 4.127h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => {
	const { className, ...restProps } = props;

	return (
		<svg
			aria-hidden="true"
			className={cn("text-2xl", className)}
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 16 16"
			width="1em"
			xmlns="http://www.w3.org/2000/svg"
			{...restProps}
		>
		<path
			fill="currentColor"
			fillRule="evenodd"
			d="M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4M2.001 5.438L2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0zM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z"
			clipRule="evenodd"
		/>
		</svg>
	);
};
