import React from "react";
import Wrapper from "./Wrapper";
import HomePage1 from "./homes/home-1";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
	title: "Meu Curso, Minha Vida",
	description:
		"Eleve seu conteúdo de e-learning com o Meu Curso, Minha Vida.",
};

export default function index() {
	return (
		<Wrapper>
			<MetaComponent meta={metadata} />
			<HomePage1 />
		</Wrapper>
	);
}
