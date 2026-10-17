import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/CitationBox.scss';

interface CitationBoxProps {
  format: "APA" | "IEEE" | "BibTeX";
  citationText: string;
}

const CitationBox: React.FC<CitationBoxProps> = ({ format, citationText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="citation-box">
      <div className="citation-header">
        <strong>{format} Citation</strong>
        <button onClick={handleCopy} className="copy-btn" title="Copy Citation">
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
      </div>
      <pre className="citation-text">{citationText}</pre>
    </div>
  );
};

export default CitationBox;