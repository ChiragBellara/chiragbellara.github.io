import React from "react";
import '../assets/styles/Writings.scss';
import type { Writing } from "../types/Writing"
import writings from "../data/writings"
import WritingContentCard from "./WritingContentCard";

export default function Writings() {
    return (
        <section className="writings-container" id="writings" aria-labelledby="writings-heading">
            <header className="writings-header">
                <h1>Writings</h1>
                <p className="writings-intro">
                Where <span>Ideas</span> go to become <span>Words</span>.
                </p>
            </header>
            {writings.map((writing: Writing) => (
            <WritingContentCard
                key={writing.slug}
                title={writing.title}
                subtitle={writing.subtitle}
                tags={writing.tags}
                date={writing.date}
                imageSrc={writing.imageSrc}
                imageAlt={writing.imageAlt}
                href={`/writings/${writing.slug}`}
                readTime={writing.readTime}
            />
            ))}
        </section>
    );
}