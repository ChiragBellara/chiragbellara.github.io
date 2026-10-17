import { useMemo } from "react";
import '../assets/styles/Adage.scss'
import ADAGES from "../data/adages";

function dayOfYear(d: Date) {
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

export default function Adage() {
    const today = useMemo(() => new Date(), []);
    const index = useMemo(() => dayOfYear(today) % ADAGES.length, [today]);
    const { text, author } = ADAGES[index];

    return (
        <section className="adage-section" id="adage">
            <div className="adage-content">
                <p className="adage-sub">Adage of the Day</p>

                <blockquote className="adage-quote">
                “{text}”
                </blockquote>

                <p className="adage-author">— {author}</p>
            </div>
        </section>
    );
}