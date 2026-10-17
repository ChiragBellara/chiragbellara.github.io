import React from "react";
import { Main, CuratedProjects } from "../components";
import FadeIn from "../components/FadeIn";

export default function Home() {
    return (
        <FadeIn transitionDuration={700}>
            <Main />
            <CuratedProjects />
        </FadeIn>
    );
}
