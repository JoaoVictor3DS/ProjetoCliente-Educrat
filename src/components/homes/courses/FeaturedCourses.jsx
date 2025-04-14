import React from "react";
import { coursesData } from "@/data/courses";
import FeaturedCourseCard from "@/components/homes/courseCards/FeaturedCourseCard";
import { Link } from "react-router-dom";
export default function FeaturedCourses() {
	return (
		<section className="layout-pt-lg layout-pb-lg bg-dark-5">
			<div className="container">
				<div
					className="row y-gap-50 justify-between items-center"
					data-aos="fade-right"
					data-aos-offset="80"
					data-aos-duration={900}
				>
					<div className="col-xl-3 col-lg-4">
						<div className="sectionTitle -light">
							<h2 className="sectionTitle__title ">
								Cursos em Destaque
							</h2>

							<p className="sectionTitle__text ">
								Instrutores selecionados e cursos elaborados por
								especialistas, projetados para os alunos e
								empreendedores modernos.
							</p>
						</div>

						<div className="d-inline-block mt-60 lg:mt-25">
							<Link
								to="/courses-list-2"
								className="button -icon -purple-1 text-white"
							>
								Navegar em Todos os Cursos
								<i className="icon-arrow-top-right text-13 ml-10"></i>
							</Link>
						</div>
					</div>

					{coursesData.slice(0, 2).map((elm, i) => (
						<FeaturedCourseCard key={i} data={elm} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}
