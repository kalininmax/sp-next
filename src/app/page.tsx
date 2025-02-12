import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Awards from "@/components/Awards";
import Technologies from "@/components/Technologies";
import Form from "@/components/Form";

export default function Home() {
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
