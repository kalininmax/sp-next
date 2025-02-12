const Form = () => {
	return (
		<section
			className="application-form section _dark _rounded"
			id="application-form"
		>
			<div className="container">
				<h2 className="section__title application-form__title">
					Давайте пообщаемся?
				</h2>
				<form
					className="application-form__form form"
					data-form
					action="https://liveformhq.com/form/eeced1af-2c2d-4002-b948-29f637a3a746"
					method="POST"
					acceptCharset="utf-8"
					data-form-global
					data-sitekey="6LckNIgUAAAAAINYN04yW3RRyvoKOiUS_GfZCuxD"
				>
					<div className="form__content" data-form-content>
						<div className="application-form__form-inputs form__inputs">
							<input type="hidden" name="_utf8" value="✓" />
							<div className="input _required" data-input="text">
								<div className="input__wrapper">
									<input
										className="input__input"
										type="text"
										name="name"
										id="application-form-name"
										autoComplete="name"
										required
									/>
									<label
										className="input__label"
										htmlFor="application-form-name"
									>
										Имя
									</label>
								</div>
							</div>
							<div className="input" data-input="text">
								<div className="input__wrapper">
									<input
										className="input__input"
										type="text"
										name="tel"
										id="application-form-tel"
										inputMode="tel"
										autoComplete="tel"
									/>
									<label
										className="input__label"
										htmlFor="application-form-tel"
									>
										Телефон
									</label>
								</div>
							</div>
							<div className="input _required" data-input="email">
								<div className="input__wrapper">
									<input
										className="input__input"
										type="email"
										name="email"
										id="application-form-email"
										autoComplete="email"
										required
									/>
									<label
										className="input__label"
										htmlFor="application-form-email"
									>
										Электронная почта
									</label>
								</div>
							</div>
							<div className="input" data-input="file">
								<div className="input__wrapper">
									<input
										className="input__input visually-hidden"
										type="file"
										name="files"
										id="application-form-files"
										multiple
									/>
									<label
										className="input__label"
										htmlFor="application-form-files"
									>
										Файлы проекта
										<span className="input__label-tip _no-files">
											[Выбрать]
										</span>
									</label>
									<p className="input__files"></p>
									<button
										className="button input__clear"
										type="button"
										aria-label='"Очистить"'
									>
										<svg className="button__icon" width="14" height="14">
											<use xlinkHref="/assets/svg/sprite.svg#icon-close" />
										</svg>
									</button>
								</div>
							</div>
							<div
								className="input _required application-form__message"
								data-input="textarea"
							>
								<div className="input__wrapper">
									<textarea
										className="input__input"
										name="message"
										id="application-form-message"
										required
									></textarea>
									<label
										className="input__label"
										htmlFor="application-form-message"
									>
										Чем мы могли бы помочь вам?
									</label>
								</div>
							</div>
						</div>
						<button className="button form__submit _white _full" type="submit">
							<span className="button__text">Отправить</span>
						</button>
						<div className="form__policy">
							<p>
								Нажимая на&nbsp;кнопку, вы&nbsp;даете согласие на&nbsp;обработку
								персональных данных и&nbsp;соглашаетесь&nbsp;с
								<a
									href="https://docs.google.com/document/d/1IanUIDi_uZMMg6FdhdG6YhwJyfwKlLtI5TRVvV7MaqU"
									target="_blank"
								>
									политикой конфиденциальности
								</a>
							</p>
						</div>
					</div>
					<div className="form__popup" data-form-popup>
						<div className="form__loader lds-ellipsis" data-form-loader>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="form__message" data-form-message>
							<div className="form__message-text text-md">
								<p>
									Спасибо, ваше сообщение отправлено!
									<br />
									Мы&nbsp;ответим на&nbsp;него в&nbsp;ближайшее время.
								</p>
							</div>
							<button
								className="button form__message-close _close _light"
								type="button"
								aria-label='"Закрыть"'
								data-form-popup-closer
							>
								<svg className="button__icon" width="16" height="16">
									<use xlinkHref="/assets/svg/sprite.svg#icon-close" />
								</svg>
							</button>
						</div>
					</div>
				</form>
				<div className="application-form__footer uppercase">
					<p>
						Мы всегда на связи в
						<a href="https://t.me/alexeyhoryakov" target="_blank">
							Телеграме
						</a>
					</p>
					<p>
						<a href="mailto:hello@sborkaproject.com">hello@sborkaproject.com</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Form;
