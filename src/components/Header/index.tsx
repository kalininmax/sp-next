"use client";

import { useEffect } from "react";

const Header = () => {
	useEffect(() => {
		const HTML_CLASSLIST = document.documentElement.classList;
		const storageKey = "theme-preference";
		let TO: ReturnType<typeof setTimeout>;
		document.documentElement.style.display = "none";

		const getColorPreference = () => {
			if (localStorage.getItem(storageKey))
				return localStorage.getItem(storageKey) as string;

			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		};

		const theme = { value: getColorPreference() };

		const reflectPreference = () => {
			document.firstElementChild?.setAttribute("data-theme", theme.value);

			const switcherEl = document.querySelector('[data-switcher="theme"]');

			switcherEl?.setAttribute("aria-label", theme.value);
			switcherEl?.setAttribute("aria-checked", String(theme.value === "dark"));
			clearTimeout(TO);
			TO = setTimeout(() => {
				HTML_CLASSLIST.remove("_changing-theme");
			}, 300);
			HTML_CLASSLIST.add("_changing-theme");
		};

		const setPreference = () => {
			localStorage.setItem(storageKey, theme.value);
			reflectPreference();
		};

		const onClick = () => {
			theme.value = theme.value === "light" ? "dark" : "light";

			setPreference();
		};

		reflectPreference();

		document
			.querySelector('[data-switcher="theme"]')
			?.addEventListener("click", onClick);
		document.documentElement.style.display = "";

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", ({ matches: isDark }) => {
				theme.value = isDark ? "dark" : "light";
				setPreference();
			});
	});
	return (
		<>
			<span className="page__logo">
				<svg
					className="page__logo-icon"
					width="49"
					height="33"
					viewBox="0 0 49 33"
					fill="none"
				>
					<path
						d="M37.6325 1.25293H25.8115V31.7489H33.1725V22.1569H37.6325C44.5485 22.1569 48.5635 17.7599 48.5635 11.7049C48.5635 5.64993 44.5485 1.25293 37.6325 1.25293ZM36.8685 15.6879H33.1725V7.72193H36.8685C39.5455 7.72193 41.0745 9.18793 41.0745 11.7049C41.0745 14.2229 39.5455 15.6879 36.8685 15.6879Z"
						fill="currentColor"
					/>
					<path
						d="M13.256 13.3941C10.994 12.7561 9.56 12.2791 8.858 11.8331C8.286 11.4511 7.935 10.9081 7.935 10.2711C7.935 8.83711 9.08199 7.75412 11.663 7.75412C14.116 7.75412 15.423 8.80512 15.423 10.3661H22.815C22.815 4.66212 18.036 0.870117 12.013 0.870117C8.445 0.870117 5.70399 1.63612 3.53699 3.48312C1.62499 5.10912 0.477997 7.43512 0.477997 10.3351C0.477997 12.8531 1.243 14.6691 2.422 15.9431C3.537 17.1531 5.799 18.5881 9.336 19.5441C11.887 20.2451 13.703 20.7871 14.531 21.3281C15.391 21.8701 15.615 22.3481 15.615 22.9851C15.615 24.3551 14.245 25.2791 11.503 25.2791C8.95299 25.2791 7.58398 24.3231 7.48898 22.6661H0C0 28.4341 4.71599 32.1291 11.503 32.1291C18.1 32.1291 23.07 28.0501 23.07 22.8561C23.07 20.9441 22.72 19.2881 21.349 17.5991C20.139 16.0711 17.718 14.7011 13.256 13.3941Z"
						fill="currentColor"
					/>
				</svg>
			</span>
			<header className="header page__header" data-header>
				<div className="header__container container _full-width">
					<div className="header__nav">
						<div className="header__menu-wrapper">
							<button
								className="button header__button _light _menu"
								type="button"
								data-menu-toggle
							>
								<span className="button__text">Меню</span>
								<svg className="button__icon" width="27" height="7">
									<use xlinkHref="/assets/svg/sprite.svg#icon-menu-dots" />
								</svg>
							</button>
							<div className="menu header__menu" data-menu>
								<nav className="menu__nav">
									<span className="menu__logo header__logo">
										<svg className="page__logo-icon" width="49" height="32">
											<use xlinkHref="/assets/svg/sprite.svg#icon-sp-logo" />
										</svg>
									</span>
									<ul className="menu__list font-pragmatica">
										<li>
											<a className="menu__nav-link" href="/about/">
												О нас
											</a>
										</li>
										<li>
											<a className="menu__nav-link" href="/works/">
												Проекты
											</a>
										</li>
										<li>
											<a className="menu__nav-link" href="/career/">
												Вакансии<sup>3</sup>
											</a>
										</li>
										<li>
											<a
												className="menu__nav-link"
												href="https://t.me/sborkaproject"
												target="_blank"
												rel="noopener noreferrer nofollow"
											>
												Телеграм-канал
											</a>
										</li>
									</ul>
								</nav>
								<div className="menu__footer uppercase">
									<a href="hello@sborkaproject.com">E-mail</a>
									<a href="https://t.me/alexeyhoryakov">Телеграм</a>
									<p className="menu__copyright">
										© Sborka Project, <span>2014-2024</span>
									</p>
									<p>С-ПБ, 17-я линия В.О., 4</p>
									<p className="lowercase">v0.1</p>
								</div>
								<button
									className="button menu__close _close _light"
									type="button"
									aria-label='"Закрыть"'
									data-menu-closer
								>
									<svg className="button__icon" width="16" height="16">
										<use xlinkHref="/assets/svg/sprite.svg#icon-close" />
									</svg>
								</button>
							</div>
						</div>
					</div>
					<p
						className="header__clock clock font-pragmatica text-md font-medium"
						data-clock
					>
						MSK, <time dateTime="00:00">00:00</time>
					</p>
					<button
						className="button header__button _form-link _dark"
						type="button"
						data-scroll-to="#application-form"
					>
						<span className="button__text">Обсудить проект</span>
					</button>
					<button
						className="switcher header__theme-switcher"
						type="button"
						role="switch"
						aria-checked="false"
						aria-label="Тёмная тема"
						data-switcher="theme"
					></button>
				</div>
			</header>
		</>
	);
};

export default Header;
