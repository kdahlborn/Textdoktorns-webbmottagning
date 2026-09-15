import './criteriaItemsEditor.css';
import FormInput from '../../global/FormInput/FormInput';
import FormTextArea from '../../global/FormTextArea/FormTextArea';

const CriteriaItemsEditor = ({ items, language }) => {
    return items?.map((_, index) => {
        return (
            <section
                key={`criteria-item-${index}`}
                className="form__subsection"
            >
                <h3 className="form__subtitle">{`Kriterium ${index + 1}`}</h3>

                <FormInput
                    key={`criteria-${index}-title-${language}`}
                    label="Kriterium"
                    path={`criteria.items.${index}.title.${language}`}
                />
                <FormTextArea
                    key={`criteria-${index}-desc-${language}`}
                    label="Beskrivning"
                    path={`criteria.items.${index}.description.${language}`}
                />
            </section>
        );
    });
};

export default CriteriaItemsEditor;
