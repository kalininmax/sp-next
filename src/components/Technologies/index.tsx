const Technologies = () => {
	return (
		<section className="technologies section">
			<div className="container">
				<h2 className="section__title">Технологии</h2>
				<ul className="technologies__list">
					<li className="technologies__item">
						<p className="font-pragmatica text-md font-medium uppercase">
							Front-end
						</p>
						<ul className="uppercase">
							<li>Next.js</li>
							<li>React</li>
							<li>WebGL</li>
							<li>PixiJS</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Vue.js</li>
							<li>Nuxt.js</li>
							<li>GSAP</li>
							<li>Three.js</li>
						</ul>
					</li>
					<li className="technologies__item">
						<p className="font-pragmatica text-md font-medium uppercase">
							No-Code
						</p>
						<ul className="uppercase">
							<li>Webflow</li>
						</ul>
					</li>
					<li className="technologies__item">
						<p className="font-pragmatica text-md font-medium uppercase">
							Back-end
						</p>
						<ul className="uppercase">
							<li>Битрикс</li>
							<li>Laravel</li>
							<li>Headless CMS</li>
							<li>WordPress</li>
							<li>Kirby CMS</li>
							<li>Strapi</li>
						</ul>
					</li>
					<li className="technologies__item">
						<p className="font-pragmatica text-md font-medium uppercase">
							Методологии
						</p>
						<ul className="uppercase">
							<li>БЭМ</li>
							<li>JAMstack</li>
							<li>Компонентный подход</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Technologies;
