import Descriptions from "@/components/aboutCourses/lesson/Descriptions";
import LessonItems from "@/components/aboutCourses/lesson/LessonItems";
import Reviews from "@/components/aboutCourses/lesson/Reviews";
import Video from "@/components/aboutCourses/lesson/Video";
import VideoTwo from "@/components/aboutCourses/lesson/VideoTwo";
import Preloader from "@/components/common/Preloader";
import HeaderTen from "@/components/layout/headers/HeaderTen";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
	title: "Aula Única-2 || Educrat - Template ReactJS de Cursos Online e Educação Profissional",
	description:
		"Eleve seu conteúdo de e-learning com o Educrat, o mais impressionante template LMS para cursos online, educação e plataformas LMS.",
};

export default function LessonSinglePage2() {
	return (
		<div className="main-content  ">
			<MetaComponent meta={metadata} />
			<Preloader />
			<HeaderTen />
			<div className="content-wrapper  js-content-wrapper overflow-hidden">
				<section className="layout-pt-lg layout-pb-lg lg:pt-40 lg:order-1">
					<div className="container">
						<div className="row justify-start marginCustom ">
							<div className="col-xxl-8 col-xl-7 col-lg-8">
								<VideoTwo />

								<Descriptions />
								<Reviews />
							</div>
						</div>
					</div>
				</section>
				<LessonItems rightPosition={true} />
			</div>
		</div>
	);
}
