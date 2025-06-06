import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function CourceCardSlider({ data, index }) {
	const [rating, setRating] = useState([]);
	useEffect(() => {
		for (let i = Math.round(data.rating); i >= 1; i--) {
			setRating((pre) => [...pre, "star"]);
		}
	}, []);
	return (
		<div
			className="swiper-slide -type-1 px-10 py-10 border-light  rounded-8"
			style={{ height: "fit-content" }}
		>
			<div>
				<div className="coursesCard -type-1 ">
					<div className="relative">
						<div className="coursesCard__image overflow-hidden rounded-8">
							<img
								style={{ height: "100%", width: "100%" }}
								className="w-1/1"
								src={data.imageSrc}
								alt="image"
							/>
							<div className="coursesCard__image_overlay rounded-8"></div>
						</div>
						<div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
					</div>

					<div className="h-100 pt-15">
						<div className="d-flex items-center">
							<div className="text-14 lh-1 text-yellow-1 mr-10">
								{data.rating}
							</div>
							<div className="d-flex x-gap-5 items-center">
								{rating.map((itm, i) => (
									<div
										key={i}
										className="icon-star text-9 text-yellow-1"
									></div>
								))}
							</div>
							<div className="text-13 lh-1 ml-10">
								({data.ratingCount})
							</div>
						</div>

						<div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
							<Link
								className="linkCustom"
								to={`/courses/${data.id}`}
							>
								{data.title}
							</Link>
						</div>

						<div className="d-flex x-gap-10 items-center pt-10">
							<div className="d-flex items-center">
								<div className="mr-8">
									<img
										src="assets/img/coursesCards/icons/1.svg"
										alt="icon"
									/>
								</div>
								<div className="text-14 lh-1">
									{data.lessonCount} aula
								</div>
							</div>

							<div className="d-flex items-center">
								<div className="mr-8">
									<img
										src="assets/img/coursesCards/icons/2.svg"
										alt="icon"
									/>
								</div>
								<div className="text-14 lh-1">{`${Math.floor(
									data.duration / 60
								)}h ${Math.floor(data.duration % 60)}m`}</div>
							</div>

							<div className="d-flex items-center">
								<div className="mr-8">
									<img
										src="assets/img/coursesCards/icons/3.svg"
										alt="icon"
									/>
								</div>
								<div className="text-14 lh-1">{data.level}</div>
							</div>
						</div>

						<div className="coursesCard-footer">
							<div className="coursesCard-footer__author">
								<img src={data.authorImageSrc} alt="image" />
								<div>{data.authorName}</div>
							</div>

							<div className="coursesCard-footer__price">
								{data.paid ? (
									<>
										<div>${data.originalPrice}</div>
										<div>${data.discountedPrice}</div>
									</>
								) : (
									<>
										<div></div>
										<div>Grátis</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
