import React, { useState } from "react";
import { allCategories, difficulty } from "@/data/courses";
import { Link } from "react-router-dom";
export default function LearningSelection() {
	const [currentCategory, setCurrentCategory] = useState("Todos");

	const [currentdifficulty, setCurrentdifficulty] = useState("Todos");
	const [currentDropdown, setCurrentDropdown] = useState("");
	return (
		<section className="layout-pt-lg layout-pb-lg border-top-light">
			<div className="container">
				<div className="row justify-center text-center">
					<div className="col-auto">
						<div className="sectionTitle ">
							<h2 className="sectionTitle__title ">
								Obtenha recomendações de aprendizado
								personalizadas
							</h2>

							<p className="sectionTitle__text ">
								Aprimore suas habilidades com os melhores cursos
								online
							</p>
						</div>
					</div>
				</div>

				<div className="row y-gap-20 justify-center pt-30">
					<div className="col-auto">
						<div
							className={`dropdown js-dropdown js-drop1-active ${
								currentDropdown == "category"
									? "-is-dd-active"
									: ""
							}`}
						>
							<div
								onClick={() =>
									setCurrentDropdown((pre) =>
										pre == "category" ? "" : "category"
									)
								}
								className="dropdown__button d-flex items-center text-14 border-light h-60"
								data-el-toggle=".js-drop1-toggle"
								data-el-toggle-active=".js-drop1-active"
							>
								<span className="js-dropdown-title">
									{currentCategory == "Todos"
										? "Categoria"
										: currentCategory}
								</span>
								<i className="icon text-9 ml-40 icon-chevron-down"></i>
							</div>

							<div
								className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle ${
									currentDropdown == "category"
										? "-is-el-visible"
										: ""
								} `}
							>
								<div className="text-14 y-gap-15 js-dropdown-list">
									{allCategories.map((elm, i) => (
										<div
											key={i}
											onClick={() => {
												setCurrentCategory(elm);
												setCurrentDropdown("");
											}}
											className={`d-block js-dropdown-link cursor ${
												currentCategory == elm
													? "activeMenu"
													: ""
											} `}
										>
											{elm}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="col-auto">
						<div
							className={`dropdown js-dropdown js-drop3-active ${
								currentDropdown == "difficulty"
									? "-is-dd-active"
									: ""
							}`}
						>
							<div
								onClick={() =>
									setCurrentDropdown((pre) =>
										pre == "difficulty" ? "" : "difficulty"
									)
								}
								className="dropdown__button d-flex items-center text-14 border-light h-60"
								data-el-toggle=".js-drop3-toggle"
								data-el-toggle-active=".js-drop3-active"
							>
								<span className="js-dropdown-title">
									{currentdifficulty == "Todos"
										? "Dificuldade"
										: currentdifficulty}
								</span>
								<i className="icon text-9 ml-40 icon-chevron-down"></i>
							</div>

							<div
								className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle ${
									currentDropdown == "difficulty"
										? "-is-el-visible"
										: ""
								} `}
							>
								<div className="text-14 y-gap-15 js-dropdown-list">
									{difficulty.map((elm, i) => (
										<div
											key={i}
											onClick={() => {
												setCurrentdifficulty(elm);
												setCurrentDropdown("");
											}}
											className={`d-block js-dropdown-link cursor ${
												currentdifficulty == elm
													? "activeMenu"
													: ""
											} `}
										>
											{elm}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="col-auto">
						<Link
							to="/courses-list-1"
							className="button -md -purple-1 text-white"
						>
							Comece agora
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
