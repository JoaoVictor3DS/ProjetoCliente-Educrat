import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BooksCard({ data }) {
	const [rating, setRating] = useState([]);
	useEffect(() => {
		for (let i = Math.round(data.rating); i >= 1; i--) {
			setRating((pre) => [...pre, "star"]);
		}
	}, []);
	return (
		<div className="swiper-slide">
			<div className="">
				<img
					style={{ width: "100%" }}
					className="w-1/1"
					src={data.imgSrc}
					alt="livro"
				/>
				<h5 className="text-17 fw-500 mt-15">{data.title}</h5>

				<div className="d-flex items-center mt-10">
					<div className="d-flex x-gap-5">
						{rating.map((itm, i) => (
							<div
								key={i}
								className="icon-star text-9 text-yellow-1"
							></div>
						))}
					</div>
					<div className="text-13 lh-1 ml-10">
						({data.ratingCount}) avaliações
					</div>
				</div>

				<div className="d-flex items-center pt-15">
					<div className="text-15 lh-1 line-through">
						R${data.price}
					</div>
					<div className="text-18 lh-1 text-purple-1 fw-500 ml-10">
						R${data.discountPrice}
					</div>
				</div>
			</div>
		</div>
	);
}
