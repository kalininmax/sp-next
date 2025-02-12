import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Awards from "@/components/Awards";
import Technologies from "@/components/Technologies";
import Form from "@/components/Form";
import { notFound } from "next/navigation";
import { Metadata } from "next";

async function getHomePage() {
	const res = await fetch("http://5693366a1538.vps.myjino.ru:49506/main", {
		cache: "force-cache",
	});
	const data = await res.json();
	if (!data) notFound();
	return data;
}

export async function generateMetadata(): Promise<Metadata> {
	const { seo } = await getHomePage();

	return {
		title: seo.title,
		description: seo.description,
		keywords: seo.keywords,
		openGraph: {
			images: seo.image,
		},
	};
}

export default async function Home() {
	return (
		<>
			<div>
				<Hero />
				<Services />
			</div>
			<Clients />
			<Awards />
			<Technologies />
			<Form />
		</>
	);
}
