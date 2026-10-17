import { Link } from "react-router-dom";
import "./../assets/styles/WritingContentCard.scss";
import { getImage } from "../utils/imageUtils";

export default function WritingContentCard({
    imageSrc = "",
    imageAlt = "",
    tags = [""],
    title = "",
    subtitle = "",
    date = "",
    readTime = "",
    href = "#",
}) {
    return (
        <Link className="wf-card" to={href}>
            <div className="wf-content">
                <div className="wf-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="wf-tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <h2 className="wf-title">{title}</h2>
                <p className="wf-subtitle">{subtitle}</p>
                <div className="wf-meta">
                    <span>{date}</span>
                    {readTime && <span className="wf-readTime">{readTime} min read</span>}
                </div>
            </div>

            {imageSrc && (
                <div className="wf-media">
                    <img src={getImage(imageSrc)} alt={imageAlt} />
                </div>
            )}
        </Link>
    );
}