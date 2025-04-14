import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileFooter from "./MobileFooter";

import { useLocation } from "react-router-dom";

export default function Menu({ allClasses, headerPosition }) {
	const [menuItem, setMenuItem] = useState("");
	const [submenu, setSubmenu] = useState("");
	const { pathname } = useLocation();

	return (
		<div
			className={`header-menu js-mobile-menu-toggle ${
				headerPosition ? headerPosition : ""
			}`}
		>
			<div className="header-menu__content">
				<div className="mobile-bg js-mobile-bg"></div>

				<div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
					<Link to="/login" className="text-dark-1">
						Entrar
					</Link>
					<Link to="/signup" className="text-dark-1 ml-30">
						Cadastrar-se
					</Link>
				</div>

				<div className="menu js-navList">
					<ul className={`${allClasses ? allClasses : ""}`}>
						<li>
							<Link
								data-barba
								to="/"
								className={
									pathname == "/"
										? "activeMenu"
										: "inActiveMenuTwo"
								}
							>
								Início
							</Link>
						</li>

						<li className="menu-item-has-children -has-mega-menu">
							<Link
								data-barba
								to="/courses-list-4"
								className={
									pathname == "/courses-list-4"
										? "activeMenu"
										: "inActiveMenuTwo"
								}
							>
								Cursos
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/event-list-2"
								className={
									pathname == "/event-list-2"
										? "activeMenu"
										: "inActiveMenuTwo"
								}
							>
								Eventos
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/blog-list-3"
								className={
									pathname == "/blog-list-3"
										? "activeMenu"
										: "inActiveMenuTwo"
								}
							>
								Blog
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/contact-1"
								className={
									pathname == "/contact-1"
										? "activeMenu"
										: "inActiveMenuTwo"
								}
							>
								Contato
							</Link>
						</li>
					</ul>
				</div>

				{/* mobile footer start */}
				<MobileFooter />
				{/* mobile footer end */}
			</div>

			<div
				className="header-menu-close"
				data-el-toggle=".js-mobile-menu-toggle"
			>
				<div className="size-40 d-flex items-center justify-center rounded-full bg-white">
					<div className="icon-close text-dark-1 text-16"></div>
				</div>
			</div>

			<div className="header-menu-bg"></div>
		</div>
	);
}
