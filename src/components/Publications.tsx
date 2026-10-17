import React from "react";
import '../assets/styles/Publications.scss';
import CitationBox from "./CitationBox";

const PAPER1 = "https://figshare.com/s/614827e8553181257a53"
const PAPER2 = "https://ieeexplore.ieee.org/document/9487763"
const PAPER3 = "https://www.ijcrt.org/papers/IJCRT2103649.pdf"

function Publications() {
    return(
    <div className="publications-container" id="publications">
        <h1>Publications</h1>
        <div className="publications-grid">
            <div className="publication">
                <a href={PAPER1} target="_blank" rel="noreferrer"><h2>Studying The Linguistic and Psychological Markers in the Speech of Serial Killers</h2></a>
                <p>Master’s Thesis, Purdue University, 2025</p>
                <p>Conducted a comparative psycholinguistic analysis between serial killers and non-criminals using over 100 hours of interview data. Leveraged transformer models (e.g., RoBERTa) and LIWC to explore speech patterns, emotional cues, and behavioral markers.</p>
                <CitationBox
                    format="BibTeX"
                    citationText={`@mastersthesis{bellara2025thesis,
                        title     = "Studying the linguistic and psychological markers in the speech
                                    of serial killers",
                        author    = "Bellara, Chirag Mahesh",
                        publisher = "Purdue University Graduate School",
                        month     =  may,
                        year      =  2025
                        doi={10.25394/PGS.28904876.v1}
                        }`}
                    />
            </div>
            <div className="publication">
                <a href={PAPER2} target="_blank" rel="noreferrer"><h2>Street Quality Mapper: Real-time Pothole Identification and Street Quality Mapping using Signal Processing</h2></a>
                <p>IEEE ICNTE, 2021</p>
                <p>Conducted a comparative psycholinguistic analysis between serial killers and non-criminals using over 100 hours of interview data. Leveraged transformer models (e.g., RoBERTa) and LIWC to explore speech patterns, emotional cues, and behavioral markers.</p>
                <CitationBox
                    format="BibTeX"
                    citationText={`@inproceedings{bellara2021sqm,
                        author={Bellara, Chirag and Belapurkar, Gayatri and Sahu, Gaurav and Sahu, Sahil and Nehete, Charusheela},
                        booktitle={2021 4th Biennial International Conference on Nascent Technologies in Engineering (ICNTE)}, 
                        title={Street Quality Mapper: Real-time Pothole Identification and Street Quality Mapping using Signal Processing}, 
                        year={2021},
                        doi={10.1109/ICNTE51185.2021.9487763}}`}
                    />
            </div>
            <div className="publication">
                <a href={PAPER3} target="_blank" rel="noreferrer"><h2>BrainKey: A Brain-Interfaced Keyboard Using EEG Signals</h2></a>
                <p>IJCRT, March 2021</p>
                <p>Built an assistive typing system that interprets EEG signals from NeuroSky Mindwave to enable communication through intentional eye blinks. Focused on accessibility for users with ALS and dysarthria, integrating emergency alerts, predictive text, and a typing interface.</p>
                <CitationBox
                    format="BibTeX"
                    citationText={`@article{bellara2021brainkey,
                        title={BRAINKEY: A Virtual Keyboard Controlled Using Eye Blinks},
                        author={Bellara, Chirag and Madheshia, Raj and Patil, Pranali and Mishra, Vinita},
                        journal={International Journal of Creative Research Thoughts (IJCRT)},
                        volume={9},
                        number={3},
                        pages={5530--5535},
                        year={2021},
                        month={March},
                        issn={2320-2882},
                        url={http://www.ijcrt.org/papers/IJCRT2103649.pdf}
                    }`}
                    />
            </div>
        </div>
    </div>
    );
}

export default Publications;