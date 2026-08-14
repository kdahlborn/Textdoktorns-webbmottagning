import './sectionHeading.css';

const SectionHeading = ({ title, desc = null }) => {
    return (
        <section className="section-heading">
            <h2 className="section-title">{title}</h2>
            {desc && <h3 className="section-desc">{desc}</h3>}
        </section>
    );
};

export default SectionHeading;
