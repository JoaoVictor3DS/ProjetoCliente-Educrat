import React, { useState, useEffect } from "react";

import { contactData } from "@/data/contactLinks";

import MapComponent from "./Map";

export default function ContactOne() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="">
				<MapComponent />
			</section>
			<section className="layout-pt-md layout-pb-lg">
				<div className="container">
					<div className="row y-gap-50 justify-between">
						<div className="col-lg-4">
							<h3 className="text-24 fw-500">
								Mantenha Contato Conosco.
							</h3>
							<p className="mt-25">
								Neque convallis a cras semper auctor. Libero id
								faucibus nisl tincidunt egetnvallis.
							</p>

							<div className="y-gap-30 pt-60 lg:pt-40">
								{contactData.map((elm, i) => (
									<div
										key={i}
										className="d-flex items-center"
									>
										<div className="d-flex justify-center items-center size-60 rounded-full bg-light-7">
											<img src={elm.icon} alt="icon" />
										</div>
										<div className="ml-20">
											{elm.address
												? `${elm.address
														.split(" ")
														.slice(0, 4)
														.join(
															" "
														)} \n ${elm.address
														.split(" ")
														.slice(4, -1)
														.join(" ")}`
												: elm.email || elm.phoneNumber}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="col-lg-7">
							<h3 className="text-24 fw-500">
								Envie uma Mensagem.
							</h3>
							<p className="mt-25">
								Neque convallis a cras semper auctor. Libero id
								faucibus nisl
								<br /> tincidunt egetnvallis.
							</p>

							<form
								className="contact-form row y-gap-30 pt-60 lg:pt-40"
								onSubmit={handleSubmit}
							>
								<div className="col-md-6">
									<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
										Nome
									</label>
									<input
										required
										type="text"
										name="title"
										placeholder="Name..."
									/>
								</div>
								<div className="col-md-6">
									<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
										Endereço de Email
									</label>
									<input
										required
										type="text"
										name="title"
										placeholder="Email..."
									/>
								</div>
								<div className="col-12">
									<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
										Mensagem...
									</label>
									<textarea
										required
										name="comment"
										placeholder="Message"
										rows="8"
									></textarea>
								</div>
								<div className="col-12">
									<button
										type="submit"
										name="submit"
										id="submit"
										className="button -md -purple-1 text-white"
									>
										Enviar Mensagem
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
