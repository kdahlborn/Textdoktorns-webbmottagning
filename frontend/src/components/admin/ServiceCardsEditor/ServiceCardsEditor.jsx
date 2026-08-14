import './serviceCardEditor.css';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';
import ListEditor from '../ListEditor/ListEditor';

const ServiceCardsEditor = ({ cards, language }) => {
    return cards?.map((card, index) => {
        return (
            <section className="form__subsection" key={`service-card-${index}`}>
                <h3 className="form__subtitle">{`Tjänst ${index + 1}`}</h3>

                <FormInput
                    key={`services-card-${index}-title-${language}`}
                    label="Rubrik"
                    path={`services.cards.${index}.title.${language}`}
                />
                <FormTextArea
                    key={`services-card-${index}-desc-${language}`}
                    label="Beskrivning"
                    path={`services.cards.${index}.description.${language}`}
                />

                <ListEditor
                    path={`services.cards.${index}.items`}
                    language={language}
                />

                <FormTextArea
                    key={`service-card-${index}-note-${language}`}
                    label="Notering"
                    path={`services.cards.${index}.note.${language}`}
                />
            </section>
        );
    });
};

export default ServiceCardsEditor;
