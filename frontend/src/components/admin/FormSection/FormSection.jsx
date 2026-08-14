import './formSection.css';

const FormSection = ({ title, children }) => {
    return (
        <section className="form__section">
            <h2 className="form__title">{title}</h2>
            {children}
        </section>
    );
};

export default FormSection;
