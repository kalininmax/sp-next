import localFont from "next/font/local";

export const Pragmatica = localFont({
	src: [
		{
			path: "pragmatica_book.woff2",
			weight: "400",
		},
		{
			path: "pragmatica_medium.woff2",
			weight: "500",
		},
	],
	variable: "--font-pragmatica",
});
export const Ingram = localFont({
	src: [
		{
			path: "ingram-mono-regular.woff2",
			weight: "400",
		},
	],
	variable: "--font-ingram",
});
