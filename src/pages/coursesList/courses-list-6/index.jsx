import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
import CourseListSix from "@/components/courseList/CourseListSix";
import CoursesSlider from "@/components/courseList/CourseSlider";
import Instractors from "@/components/courseList/Instractors";

import PageHeading from "@/components/courseList/PageHeading";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
	title: "Lista de Cursos-6 || Educrat - Template ReactJS de Cursos Online e Educação Profissional",
	description:
		"Eleve seu conteúdo de e-learning com o Educrat, o mais impressionante template LMS para cursos online, educação e plataformas LMS.",
};
export default function CourseListPage6() {
	return (
		<div className="main-content  ">
			<MetaComponent meta={metadata} />
			<Preloader />
			<Header />
			<div className="content-wrapper  js-content-wrapper overflow-hidden">
				<PageLinks />
				<PageHeading />
				<CoursesSlider />
				<Instractors />

				<CourseListSix />
				<FooterOne />
			</div>
		</div>
	);
}
