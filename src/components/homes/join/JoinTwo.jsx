import React from "react";

export default function JoinTwo() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<section className="layout-pt-lg layout-pb-lg mb-90 section-bg">
			<div className="section-bg__item">
				<img
					className="img-full rounded-16"
					src="/assets/img/home-3/cta/bg.png"
					alt="imagem"
				/>
			</div>

			<div className="container">
				<div className="row justify-center text-center">
					<div className="col-xl-5 col-lg-6 col-md-11">
						<div className="sectionTitle -light">
							<h2 className="sectionTitle__title ">
								Inscreva-se na nossa Newsletter &
							</h2>

							<p className="sectionTitle__text ">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>

				<div className="row mt-30 justify-center">
					<div className="col-lg-6">
						<form
							className="form-single-field -help"
							action="post"
							onSubmit={handleSubmit}
						>
							<input
								required
								type="text"
								placeholder="Seu Email..."
							/>
							<button
								className="button -purple-1 text-white"
								type="submit"
							>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
