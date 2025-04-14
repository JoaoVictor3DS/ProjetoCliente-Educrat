import React from "react";

import { Link } from "react-router-dom";
export default function BecomeInstactor() {
	return (
		<section className="layout-pt-lg layout-pb-md">
			<div className="container">
				<div className="row y-gap-30 items-center">
					<div className="col-xl-5 offset-xl-1 col-lg-6">
						<img
							className="w-1/1"
							src="/assets/img/home-2/about/1.png"
							alt="imagem"
						/>
					</div>

					<div className="col-xl-4 offset-xl-1 col-lg-6">
						<h3 className="text-24 lh-1">Torne-se um Instrutor</h3>
						<p className="mt-20">
							Junte-se a milhões de pessoas ao redor do mundo
							aprendendo juntas. O aprendizado online é tão fácil
							e natural quanto conversar.
						</p>
						<div className="d-inline-block mt-20">
							<Link
								to="/instructor-become"
								className="button -md -outline-purple-1 text-purple-1"
							>
								Inscreva-se Agora
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
