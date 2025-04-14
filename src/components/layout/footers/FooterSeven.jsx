import React from "react";
import Links from "../component/Links";
import Socials from "@/components/common/Socials";

import FooterLinksThree from "../component/FooterLinksThree";

export default function FooterSeven() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<footer className="footer -type-4 bg-white border-top-light">
			<div className="container">
				<div className="row y-gap-30 justify-between pt-60">
					<div className="col-lg-7 col-md-6">
						<div className="text-17 fw-500 text-dark-1 uppercase mb-25">
							ENTRE EM CONTATO
						</div>
						<form
							onSubmit={handleSubmit}
							className="form-single-field -base mt-15"
						>
							<input
								required
								className="py-20 px-30 bg-light-3 rounded-200 text-dark-1"
								type="text"
								placeholder="Seu Email"
							/>
							<button
								className="button -purple-1 rounded-full"
								type="submit"
							>
								<i className="icon-arrow-right text-24 text-white"></i>
							</button>
						</form>
					</div>

					<div className="col-xl-4 col-lg-5 col-md-6">
						<div className="footer-header__logo">
							<img
								src="/assets/img/general/logo-dark.svg"
								alt="logo"
							/>
						</div>

						<div className="d-flex justify-between mt-30">
							<div className="">
								<div className="">
									Atendimento ao Cliente Gratuito
								</div>
								<div className="text-18 lh-1 fw-500 text-dark-1 mt-5">
									+(1) 123 456 7890
								</div>
							</div>
							<div className="">
								<div className="">
									Precisa de suporte ao vivo?
								</div>
								<div className="text-18 lh-1 fw-500 text-dark-1 mt-5">
									hi@educrat.comv
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row y-gap-30 justify-between pt-60 pb-60">
					<div className="col-lg-7 col-md-6">
						<div className="row y-gap-30">
							<FooterLinksThree
								allClasses={
									"text-17 fw-500 text-dark-1 uppercase mb-25"
								}
								parentclassName={"col-lg-4 col-md-4"}
							/>
						</div>
					</div>

					<div className="col-xl-4 col-lg-5 col-md-6">
						<div className="">
							<div className="text-17 uppercase text-whitedark-1 fw-500">
								Leve seu aprendizado com você
							</div>
							<div className="d-flex mt-15">
								<a href="#">
									<img
										src="/assets/img/footer/apps-2/1.png"
										alt="image"
									/>
								</a>
								<a href="#" className="ml-10">
									<img
										src="/assets/img/footer/apps-2/2.png"
										alt="image"
									/>
								</a>
							</div>
						</div>

						<div className="footer-header-socials mt-60">
							<div className="text-17 uppercase text-dark-1 fw-500">
								Siga-nos nas redes sociais
							</div>
							<div className="footer-header-socials__list d-flex items-center mt-15">
								<Socials
									componentsClass={
										"size-40 d-flex justify-center items-center"
									}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="py-30 border-top-light-15">
					<div className="row justify-between items-center y-gap-20">
						<div className="col-auto">
							<div className="d-flex items-center h-100">
								© {new Date().getFullYear()} Educrat. Todos os
								direitos reservados.
							</div>
						</div>

						<div className="col-auto">
							<div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
								<div>
									<div className="d-flex x-gap-15">
										<Links />
									</div>
								</div>

								<div className="">
									<a
										href="#"
										className="button -md -light-3 px-15 rounded-200 -purple-3 text-purple-1"
									>
										<i className="icon-worldwide mr-10"></i>
										Português
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
