"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect } from "react";

function ThemeSync() {
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		if (resolvedTheme) {
			document.documentElement.setAttribute("data-theme", resolvedTheme);
		}
	}, [resolvedTheme]);

	return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
			<ThemeSync />
			{children}
		</NextThemesProvider>
	);
}
