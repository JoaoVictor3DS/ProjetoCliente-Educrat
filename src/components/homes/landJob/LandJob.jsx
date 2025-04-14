import React from "react";

export default function LandJob() {
	return (
		<section className="layout-pt-lg layout-pb-lg">
			<div className="container">
				<div className="row y-gap-30 justify-between items-center">
					<div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
						<h3 className="text-40 lh-1">
							Conquiste o emprego dos seus sonhos em ciência de
							dados
						</h3>
						<p className="mt-25">
							Desde uma certificação em ciência de dados até
							revisões personalizadas de currículo e preparação
							para entrevistas — nós temos tudo o que você
							precisa.
						</p>
						<div className="d-inline-block mt-30">
							<a
								href="#"
								className="button -md -outline-purple-1 text-purple-1"
							>
								Saiba Mais
							</a>
						</div>
					</div>

					<div className="col-lg-6 lg:order-1">
						<img
							className="w-1/1"
							src="/assets/img/home-4/dreamJob/1.png"
							alt="imagem"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
