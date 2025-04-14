import React, { useState } from "react";
import { Link } from "react-router-dom";
export const HeaderExplore = ({ allClasses }) => {
	const [exploreActive, setExploreActive] = useState(false);
	return (
		<>
			<div className={`${allClasses ? allClasses : ""}`}>
				<Link
					to="#"
					onClick={() => setExploreActive((pre) => !pre)}
					className="d-flex items-center"
					data-el-toggle=".js-explore-toggle"
				>
					<i className="icon icon-explore mr-15"></i>
					Explorar
				</Link>

				<div
					className={`explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle ${
						exploreActive ? "-is-el-visible" : ""
					}`}
				>
					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Arquitetura
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Graphic Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Design Tools
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								User Experience Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Game Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Business
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6}`}>
								Web Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								Graphic Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								Design Tools
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								User Experience Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								Game Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								Fashion Design
							</Link>
							<Link className="text-dark-1" to={`/courses/6}`}>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link to="#" className="text-dark-1">
							Programação de Computadores
						</Link>
					</div>

					<div className="explore__item">
						<Link to="#" className="text-dark-1">
							Análise de Dados
						</Link>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Design
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Graphic Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-3/3"
							>
								Design Tools
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-4/3"
							>
								User Experience Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-5/3"
							>
								Game Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-6/3"
							>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link to="/courses-single-6/3" className="text-dark-1">
							Education
						</Link>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Electronics
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Graphic Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-3/3"
							>
								Design Tools
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-4/3"
							>
								User Experience Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-5/3"
							>
								Game Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-6/3"
							>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Language
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Graphic Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-3/3"
							>
								Design Tools
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-4/3"
							>
								User Experience Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-5/3"
							>
								Game Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-6/3"
							>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Marketing
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Graphic Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-3/3"
							>
								Design Tools
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-4/3"
							>
								User Experience Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-5/3"
							>
								Game Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-6/3"
							>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link to="#" className="text-dark-1">
							Música e Artes
						</Link>
					</div>

					<div className="explore__item">
						<Link to="#" className="text-dark-1">
							Ciências Sociais
						</Link>
					</div>

					<div className="explore__item">
						<Link
							to="#"
							className="d-flex items-center justify-between text-dark-1"
						>
							Photography & Video
							<div className="icon-chevron-right text-11"></div>
						</Link>
						<div className="explore__subnav rounded-8">
							<Link className="text-dark-1" to={`/courses/6`}>
								Web Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Graphic Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-3/3"
							>
								Design Tools
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-4/3"
							>
								User Experience Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-5/3"
							>
								Game Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-6/3"
							>
								3D & Animation
							</Link>
							<Link className="text-dark-1" to={`/courses/6`}>
								Fashion Design
							</Link>
							<Link
								className="text-dark-1"
								to="/courses-single-2/3"
							>
								Interior Design
							</Link>
						</div>
					</div>

					<div className="explore__item">
						<Link to={`/courses/6`} className="text-dark-1">
							TI e Software
						</Link>
					</div>

					<div className="explore__item">
						<Link
							to="/courses-single-2/3"
							className="text-purple-1 underline"
						>
							Ver Todos os Cursos
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
