import React from "react";
import "../assets/styles/OutsideTerminal.scss";
import F1_Image from "../assets/images/outside/F1.jpeg";
import Astronomy from "../assets/images/outside/Astronomy.jpeg";
import Anime from "../assets/images/outside/Anime.jpeg";
import HistoryPhilosophy from "../assets/images/outside/HistoryPhilosophy.jpeg";
import Math from "../assets/images/outside/Math.jpeg";
import Gaming from "../assets/images/outside/Gaming.jpeg";

type Card = {
  title: string;
  src: string;           // image path
  alt?: string;          // describe the photo (a11y)
  blurb?: string;        // optional: shows on hover/focus
  href?: string;         // optional: wrap as link
};

const CARDS: Card[] = [
  {
    title: "Gaming",
    src: Gaming,
    alt: "Handwritten equations and a fountain pen",
    blurb: "Different languages for the same question: order from chaos.",
  },
  {
    title: "F1",
    src: F1_Image,
    alt: "F1 car in a fast corner at dusk",
    blurb: "Race telemetry, pit windows, and tiny choices that add up.",
  },
  {
    title: "Astronomy",
    src: Astronomy,
    alt: "Milky Way over a quiet desert",
    blurb: "Starlight as the oldest dataset—patterns written in photons.",
  },
  {
    title: "Anime",
    src: Anime,
    alt: "Stylized animation frame with dramatic lighting",
    blurb: "World-building, sound direction, and emotional pacing.",
  },
  {
    title: "Math",
    src: Math,
    alt: "Handwritten equations and a fountain pen",
    blurb: "Different languages, same question: order from chaos.",
  },
  {
    title: "History & Philosophy",
    src: HistoryPhilosophy,
    alt: "Open book and notes",
    blurb: "Old arguments, still worth having.",
  },
];

export default function OutsideTerminal({ items = CARDS }: { items?: Card[] }) {
  return (
    <section className="otic" id="outside">
      <div className="otic__inner">
        <h2 className="otic__heading">Outside the Terminal</h2>
        <p className="otic__intro">Things you can find me geeking out over outside of work.</p>

        <div className="otic__grid">
          {items.map((c) => {
            const CardEl = c.href ? "a" : "article";
            return (
              <CardEl
                key={c.title}
                className="otic__card"
                {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
              >
                <figure className="otic__figure">
                  {/* Image */}
                  <img className="otic__img" src={c.src} alt={c.alt ?? c.title} loading="lazy" />

                  {/* Top gradient + title pill */}
                  <div className="otic__top">
                    <span className="otic__title">{c.title}</span>
                  </div>

                  {/* Optional blurb shown on hover/focus (non-essential content) */}
                  {/* {c.blurb && <figcaption className="otic__caption">{c.blurb}</figcaption>} */}
                </figure>
              </CardEl>
            );
          })}
        </div>
      </div>
    </section>
  );
}