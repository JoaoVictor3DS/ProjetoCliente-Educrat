import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileFooter from "./MobileFooter";

import { menuList } from "@/data/menu";
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
						Log in
					</Link>
					<Link to="/signup" className="text-dark-1 ml-30">
						Sign Up
					</Link>
				</div>

				<div className="menu js-navList">
					<ul className={`${allClasses ? allClasses : ""}`}>
						<li>
							<Link data-barba to="/">
								Home
							</Link>
						</li>

						<li className="menu-item-has-children -has-mega-menu">
							<Link data-barba to="/courses-list-4">
								Courses
							</Link>
						</li>

						<li>
							<Link data-barba to="/event-list-2">
								Event
							</Link>
						</li>

						<li>
							<Link
								data-barba
								to="/blog-list-3"
								className={
									menuItem == "Blogs" ? "activeMenu" : ""
								}
							>
								Blog
							</Link>
						</li>

						{/* <li className="menu-item-has-children">
							<Link
								data-barba
								to="#"
								className={
									menuItem == "Pages" ? "activeMenu" : ""
								}
							>
								Pages{" "}
								<i className="icon-chevron-right text-13 ml-10"></i>
							</Link>

							<ul className="subnav">
								<li className="menu__backButton js-nav-list-back">
									<Link to="#">
										<i className="icon-chevron-left text-13 mr-10"></i>{" "}
										Pages
									</Link>
								</li>
								<li className="menu-item-has-children">
									<Link
										to="#"
										className={
											submenu == "About Us"
												? "activeMenu"
												: "inActiveMenu"
										}
									>
										About Us
										<div className="icon-chevron-right text-11"></div>
									</Link>

									<ul className="subnav">
										<li className="menu__backButton js-nav-list-back">
											<Link to="#">
												<i className="icon-chevron-left text-13 mr-10"></i>
												About Us
											</Link>
										</li>

										{menuList[4].links[0].links.map(
											(elm, i) => (
												<li
													key={i}
													className={
														pathname.split(
															"/"
														)[1] ==
														elm.href.split("/")[1]
															? "activeMenu"
															: "inActiveMenu"
													}
												>
													<Link
														key={i}
														data-barba
														to={elm.href}
													>
														{elm.label}
													</Link>
												</li>
											)
										)}
									</ul>
								</li>

								<li className="menu-item-has-children">
									<Link
										to="#"
										className={
											submenu == "Contact"
												? "activeMenu"
												: "inActiveMenu"
										}
									>
										Contact
										<div className="icon-chevron-right text-11"></div>
									</Link>
									<ul className="subnav">
										<li className="menu__backButton js-nav-list-back">
											<Link to="#">
												<i className="icon-chevron-left text-13 mr-10"></i>
												Contact
											</Link>
										</li>

										{menuList[4].links[1].links.map(
											(elm, i) => (
												<li
													key={i}
													className={
														pathname.split(
															"/"
														)[1] ==
														elm.href.split("/")[1]
															? "activeMenu"
															: "inActiveMenu"
													}
												>
													<Link
														key={i}
														data-barba
														to={elm.href}
													>
														{elm.label}
													</Link>
												</li>
											)
										)}
									</ul>
								</li>

								<li className="menu-item-has-children">
									<Link
										to="#"
										className={
											submenu == "Shop"
												? "activeMenu"
												: "inActiveMenu"
										}
									>
										Shop
										<div className="icon-chevron-right text-11"></div>
									</Link>
									<ul className="subnav">
										<li className="menu__backButton js-nav-list-back">
											<Link to="#">
												<i className="icon-chevron-left text-13 mr-10"></i>{" "}
												Shop
											</Link>
										</li>

										{menuList[4].links[2].links.map(
											(elm, i) => (
												<li
													key={i}
													className={
														pathname.split(
															"/"
														)[1] ==
														elm.href.split("/")[1]
															? "activeMenu"
															: "inActiveMenu"
													}
												>
													<Link
														key={i}
														data-barba
														to={elm.href}
													>
														{elm.label}
													</Link>
												</li>
											)
										)}
									</ul>
								</li>

								{menuList[4].links
									.filter((el) => el.href)
									.map((elm, i) => (
										<li
											key={i}
											className={
												pathname.split("/")[1] ==
												elm.href.split("/")[1]
													? "activeMenu"
													: "inActiveMenu"
											}
										>
											<Link
												key={i}
												data-barba
												to={elm.href}
											>
												{elm.label}
											</Link>
										</li>
									))}
							</ul>
						</li> */}

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
