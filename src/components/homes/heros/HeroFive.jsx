import React from "react";

import { Link } from "react-router-dom";
export default function HeroFive() {
	return (
		<section className="masthead -type-4">
			<div className="container">
				<div className="row y-gap-50 justify-center items-center">
					<div
						className="col-xl-5 col-lg-6"
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<div className="masthead__content">
							<h1 className="masthead__title">
								Domine as Habilidades para Impulsionar sua{" "}
								<span className="text-purple-1 underline">
									Carreira
								</span>
							</h1>
							<p className="masthead__text pt-15">
								Cursos online gratuitos dos principais
								especialistas do mundo.
								<br className="md:d-none" />
								Junte-se a 17 milhões de alunos hoje
							</p>
							<div className="masthead__button row x-gap-20 y-gap-20 pt-30">
								<div className="col-auto">
									<Link
										to="/signup"
										className="button -md -purple-1 -rounded text-white"
									>
										Junte-se Gratuitamente
									</Link>
								</div>
								<div className="col-auto">
									<Link
										to="/courses-list-1"
										className="button -md -outline-dark-1 -rounded text-dark-1"
									>
										Encontre Cursos
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div
						className="col-xl-6 col-lg-6"
						data-aos="fade-up"
						data-aos-delay="750"
					>
						<div className="masthead__image">
							<img
								src="/assets/img/home-5/masthead/bg.svg"
								alt="image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
