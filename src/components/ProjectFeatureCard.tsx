import "./../assets/styles/ProjectFeatureCard.scss";

export default function ProjectFeatureCard({
    imageSrc = "",
    imageAlt = "",
    tags = [""],
    title = "",
    blurb = "",
    ctaText = "View Code",
    ctaHref = "#",
    extraField = false,
    extraText = "View Live",
    extraHref = "#",
}) {
    return (
        <div className="projects-grid">
            <section className="pf-card">
                <div className="pf-media">
                    <img src={imageSrc} alt={imageAlt} />
                </div>
                <div className="pf-body">
                    <div className="pf-tags">
                        {tags.map((t) => (
                            <span key={t} className="pf-tag">
                                {t}
                            </span>
                        ))}
                    </div>
                    <h2 className="pf-title">{title}</h2>
                    <p className="pf-blurb">{blurb}</p>
                    <div className="pf-cta-div">
                        <a className="pf-cta" href={ctaHref}>
                            {ctaText}
                        </a>
                        {extraField && (
                            <a className="pf-cta pf-extra-cta" href={extraHref} target="_blank" rel="noreferrer">
                                {extraText}
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}