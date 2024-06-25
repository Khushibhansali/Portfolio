import React from "react";
import "./coursework.css";

const Coursework = () => {
    return (
        <div className="events-container">
            <h1>Participatory Design in Digital Making</h1>
            <p>
                This is a collaborative workshop where participants (Graduate students from Cornell Tech, Weill Cornell CTSC and NYC Community members) work on a prototype for a real-world problem that is worth investigating around digital fabrication. This workshop is an introduction to concepts and methods in design and making with digital fabrication tools while working in intergenerational and intercultural teams.
            </p>

            <section className="events-section">
                <h2>Course Rationale</h2>
                <p>
                    The ability to digitally fabricate parts and whole pieces directly from our computers or design files used to be an exotic and expensive option, but 3d printing has fast become the preferred medium to allow easily adaptable ideas to develop from concept to creation quickly, at a relatively low cost. Not limited to just 3d Printing this course will focus in the area of materials and making, simulation, computational design and abilities to co-create in a team of diverse disciplinary backgrounds.
                </p>
                <p>
                    Spring 2023 | Instructor: Niti Parikh [ntp27@cornell.edu] <a href="path_to_sample_schedule.pdf" target="_blank" rel="noopener noreferrer">Sample schedule from last year</a>
                </p>
            </section>

            <section className="events-section">
                <h2>Learning Outcomes</h2>
                <ul>
                    <li>Collaborate in a diverse team-based environment to think creatively and integrate constructive feedback into your work</li>
                    <li>Identify new fields or real-world problems and contexts that are worth investigating around digital fabrication</li>
                    <li>Learn how digitally-enabled ideas can be developed into solutions with broader societal impact</li>
                    <li>Learn Design Thinking as a conceptual thinking model to approach complex problem solving</li>
                    <li>Apply Design Thinking methodology to interview potential users and for physical prototyping</li>
                    <li>Gain hands-on knowledge of digital fabrication using software and digital mfg.tools available in the MakerLAB @ Cornell Tech</li>
                </ul>
            </section>
        </div>
    );
};

export default Coursework;
