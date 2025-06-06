import { Link } from "react-router-dom";
import React from "react";

export default function FindCourse() {
	return (
		<section className="pt-80 pb-80 md:pt-60 md:pb-60 bg-purple-1">
			<div className="container">
				<div className="row y-gap-20 justify-between items-center">
					<div className="col-xl-4 col-lg-5">
						<h2 className="text-30 lh-15 text-white">
							Encontre Seus Cursos Ideais
						</h2>
						<p className="text-white mt-10">
							Use a lista abaixo para destacar o principal
							diferencial do seu produto.
						</p>
					</div>

					<div className="col-auto">
						<Link
							to="/courses-list-1"
							className="button -md -white text-dark-1"
						>
							Comece Agora
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
