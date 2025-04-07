import MobileFooter from "./MobileFooter";

import { menuList } from "../../../data/menu";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MobileMenu({ setActiveMobileMenu, activeMobileMenu }) {
	const [showMenu, setShowMenu] = useState(false);
	const [menuNesting, setMenuNesting] = useState([]);
	const [menuItem, setMenuItem] = useState("");
	const [submenu, setSubmenu] = useState("");

	useEffect(() => {
		menuList.forEach((elm) => {
			elm?.links?.forEach((elm2) => {
				if (elm2.href?.split("/")[1] == pathname?.split("/")[1]) {
					setMenuItem(elm.title);
				} else {
					elm2?.links?.map((elm3) => {
						if (
							elm3.href?.split("/")[1] == pathname?.split("/")[1]
						) {
							setMenuItem(elm.title);
							setSubmenu(elm2.title);
						}
					});
				}
			});
		});
	}, []);
	useEffect(() => {
		setShowMenu(true);
	}, []);
	const { pathname } = useLocation();
	return (
		<div
			className={`header-menu js-mobile-menu-toggle ${
				activeMobileMenu ? "-is-el-visible" : ""
			}`}
		>
			<div className="header-menu__content">
				<div className="mobile-bg js-mobile-bg"></div>

				<div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
					<Link
						to="/login"
						className={`text-dark-1 ${
							pathname == "/login" ? "activeMenu" : "inActiveMenu"
						} `}
					>
						Log in
					</Link>
					<Link
						to="/signup"
						className={`text-dark-1 ml-30 ${
							pathname == "/signup"
								? "activeMenu"
								: "inActiveMenu"
						} `}
					>
						Sign Up
					</Link>
				</div>
				<div className="d-none xl:d-flex items-center px-20 py-10 border-bottom-light text-black">
					<ul>
						<li>
							<Link
								data-barba
								to="/"
								className={`text-dark-1 ${
									pathname == "/"
										? "activeMenu"
										: "inActiveMenu"
								} `}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								data-barba
								to="/courses-list-4"
								className={`text-dark-1 ${
									pathname == "/courses-list-4"
										? "activeMenu"
										: "inActiveMenu"
								} `}
							>
								Courses
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/event-list-2"
								className={`text-dark-1 ${
									pathname == "/event-list-2"
										? "activeMenu"
										: "inActiveMenu"
								} `}
							>
								Event
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/blog-list-3"
								className={`text-dark-1 ${
									pathname == "/blog-list-3"
										? "activeMenu"
										: "inActiveMenu"
								} `}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								data-barba
								to="/contact-1"
								className={`text-dark-1 ${
									pathname == "/contact-1"
										? "activeMenu"
										: "inActiveMenu"
								} `}
							>
								Contact
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
				onClick={() => {
					setActiveMobileMenu(false);
				}}
				data-el-toggle=".js-mobile-menu-toggle"
			>
				<div className="size-40 d-flex items-center justify-center rounded-full bg-white">
					<div className="icon-close text-dark-1 text-16"></div>
				</div>
			</div>

			<div
				className="header-menu-bg"
				onClick={() => setActiveMobileMenu(false)}
			></div>
		</div>
	);
}
