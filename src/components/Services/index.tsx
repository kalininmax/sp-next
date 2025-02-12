const Services = () => {
	return (
		<section className="page__services services">
			<div className="container">
				<div className="services__text font-pragmatica text-xl">
					<p>
						Веб-разработка для широкого круга индустрий. Специализируемся
						на&nbsp;онлайн-сервисах, корпоративных сайтах и&nbsp;имиджевых
						проектах.
					</p>
				</div>
				<ul className="services__list">
					<li className="services__item">
						<svg className="services__item-icon" width="68" height="68">
							<use xlinkHref="/assets/svg/sprite.svg#icon-layout" />
						</svg>
						<div className="services__item-content uppercase">
							<p className="services__item-title font-pragmatica text-md font-medium">
								<a className="services__item-link" href="/html-coding">
									Вёрстка
								</a>
							</p>
							Верстаем страницы и&nbsp;дизайн-системы. Быстро, качественно
							и&nbsp;с&nbsp;анимациями.
						</div>
					</li>
					<li className="services__item">
						<svg className="services__item-icon" width="68" height="68">
							<use xlinkHref="/assets/svg/sprite.svg#icon-outsource" />
						</svg>
						<div className="services__item-content uppercase">
							<p className="services__item-title font-pragmatica text-md font-medium">
								<a
									className="services__item-link"
									href="/front-end-development"
								>
									Front-end аутсорсинг
								</a>
							</p>
							Стек технологий&nbsp;&mdash; React и&nbsp;Vue. Умеем делать MVP
							для тестирования бизнес-идей.
						</div>
					</li>
					<li className="services__item">
						<svg className="services__item-icon" width="68" height="68">
							<use xlinkHref="/assets/svg/sprite.svg#icon-backend" />
						</svg>
						<div className="services__item-content uppercase">
							<p className="services__item-title font-pragmatica text-md font-medium">
								<a className="services__item-link" href="/back-end">
									Back-end
								</a>
							</p>
							Системы управления контентом на&nbsp;базе headless CMS (Jamstack),
							Strapi, Kirby CMS, Битрикс, Laravel.
						</div>
					</li>
					<li className="services__item">
						<svg className="services__item-icon _lg" width="68" height="68">
							<use xlinkHref="/assets/svg/sprite.svg#icon-frontend" />
						</svg>
						<div className="services__item-content uppercase">
							<p className="services__item-title font-pragmatica text-md font-medium">
								<a className="services__item-link" href="/creative-front-end">
									Креативный front-end
								</a>
							</p>
							Для имиджевых и&nbsp;промо сайтов. Используем GSAP, WebGL,
							Three.js и&nbsp;колоссальный опыт.
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Services;
