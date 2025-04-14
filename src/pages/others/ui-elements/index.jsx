import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import Accordions from "@/components/uiElements/Accordions";
import Buttons from "@/components/uiElements/Buttons";
import Form from "@/components/uiElements/Form";
import MessageBoxes from "@/components/uiElements/MessageBoxes";
import PageHeading from "@/components/uiElements/PageHeading";
import ProgressBars from "@/components/uiElements/ProgressBars";
import Table from "@/components/uiElements/Table";
import Tabs from "@/components/uiElements/Tabs";
import Tooltips from "@/components/uiElements/Tooltips";
import Typography from "@/components/uiElements/Typography";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
	title: "Elementos de UI || Educrat - Template ReactJS de Cursos Online e Educação Profissional",
	description:
		"Eleve seu conteúdo de e-learning com o Educrat, o mais impressionante template LMS para cursos online, educação e plataformas LMS.",
};
import React from "react";

export default function UIElementsPage() {
	return (
		<div className="main-content  ">
			<MetaComponent meta={metadata} />
			<Preloader />

			<Header />
			<div className="content-wrapper js-content-wrapper overflow-hidden">
				<PageLinks />
				<PageHeading />
				<section className="layout-pb-lg">
					<div className="container">
						<div className="row y-gap-50">
							<Accordions />
							<Tabs />
							<Table />
							<MessageBoxes />
						</div>
						<Buttons />
						<Form />
						<div className="row y-gap-30 justify-between mt-50">
							<Tooltips />
							<ProgressBars />
						</div>
						<Typography />
					</div>
				</section>

				<FooterOne />
			</div>
		</div>
	);
}
