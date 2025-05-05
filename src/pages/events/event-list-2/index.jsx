import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import EventsTwo from "@/components/events/EventsTwo";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
	title: "Meu Curso, Minha Vida",
	description:
		"Eleve seu conteúdo de e-learning com o Meu Curso, Minha Vida.",
};

export default function EventListPage2() {
	return (
		<div className="main-content  ">
			<MetaComponent meta={metadata} />
			<Preloader />

			<Header />
			<div className="content-wrapper js-content-wrapper overflow-hidden">
				<PageLinks />
				<EventsTwo />
				<FooterOne />
			</div>
		</div>
	);
}
