const Footer = () => {
	return (
		<footer className="page__footer footer" data-footer>
			<div className="footer__container uppercase container">
				<div data-footer-logo>
					<svg className="footer__logo" width="1400" height="606">
						<use xlinkHref="/assets/svg/sprite.svg#icon-sp-logo-footer" />
					</svg>
					<svg className="footer__logo _mobile" width="300" height="193">
						<use xlinkHref="/assets/svg/sprite.svg#icon-sp-logo-footer-mobile" />
					</svg>
				</div>
				<div className="footer__content uppercase">
					<a href="mailto:hello@sborkaproject.com">E-mail</a>
					<a href="https://t.me/alexeyhoryakov" target="_blank">
						Телеграм
					</a>
					<p className="footer__copyright">
						© Sborka Project, <span>2014-2024</span>
					</p>
					<p>С-ПБ, 17-я линия В.О., 4</p>
					<p>
						Design by{" "}
						<a href="https://naau.studio" target="_blank">
							naau
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
