import { useParams, Link } from "react-router-dom"
import writings from "../data/writings"
import type { Writing } from "../types/Writing"
import { getImage } from "../utils/imageUtils";
import "./../assets/styles/WritingPage.scss";

function WritingPage() {
    const { slug } = useParams<{ slug: string }>()

    const writing: Writing | undefined = writings.find(
        (item) => item.slug === slug
    )

    if (!writing) {
        return (
        <section className="writing-page-container" id="writing-page" aria-labelledby="writing-page-heading">
            <main className="writing-page">
                <Link className="writing-back" to="/writings">
                    ← Back to writings
                </Link>
                <article className="writing-article">
                    <header className="writing-header">
                        <h1 className="writing-title">Write Up Not Found.</h1>
                    </header>
                </article>
            </main>
        </section>
        )
    }

    return (
        <section className="writing-page-container" id="writing-page" aria-labelledby="writing-page-heading">
            <main className="writing-page">
                <Link className="writing-back" to="/writings">
                    ← Back to writings
                </Link>
                <article className="writing-article">
                    <header className="writing-header">
                        <h1 className="writing-title">{writing.title}</h1>
                        <p className="writing-subtitle">{writing.subtitle}</p>
                        <p className="writing-date">{writing.date}</p>
                    </header>

                    {writing.imageSrc && (
                        <div className="writing-hero">
                            <img src={getImage(writing.imageSrc)} alt={writing.imageAlt} />
                        </div>
                    )}

                    <section className="writing-content">
                        {writing.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </section>

                    <div className="writing-tags">
                        {writing.tags.map((tag) => (
                            <span key={tag} className="writing-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </article>
            </main>
        </section>
    )
}

export default WritingPage;