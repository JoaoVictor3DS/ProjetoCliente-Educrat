import React from "react";

export default function InstructorFour() {
	return (
		<section className="layout-pt-lg layout-pb-lg">
			<div className="container">
				<div className="row y-gap-30 justify-between items-center">
					<div className="col-lg-6">
						<img
							className="w-1/1"
							src="/assets/img/home-4/dreamJob/2.png"
							alt="imagem"
						/>
					</div>

					<div className="col-xl-5 col-lg-6 col-md-9">
						<h3 className="text-30 lh-15">
							Cursos ministrados por líderes da indústria
							<br className="lg:d-none" /> ao redor do mundo
						</h3>
						<p className="mt-30">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt.
						</p>
						<div className="d-flex x-gap-15 y-gap-15 pt-30">
							<div>
								<a
									href="#"
									className="button -md -purple-1 text-white"
								>
									Comece a Ensinar Hoje
								</a>
							</div>
							<div>
								<a
									href="#"
									className="button -md -outline-dark-1 text-dark-1"
								>
									Navegar Professores
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
