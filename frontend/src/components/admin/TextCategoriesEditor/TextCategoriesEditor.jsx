import './textCategoriesEditor.css';
import FormInput from '../../global/FormInput/FormInput';
import ListEditor from '../ListEditor/ListEditor';

const TextCategoriesEditor = ({ categories, language }) => {
    return categories?.map((_, index) => {
        return (
            <section
                className="form__subsection"
                key={`textTypes-category-${index}`}
            >
                <h3 className="form__subtitle">{`Kategori ${index + 1}`}</h3>

                <FormInput
                    key={`textTypes-category-title-${language}`}
                    label="Kategori"
                    path={`textTypes.categories.${index}.title.${language}`}
                />

                <ListEditor
                    path={`textTypes.categories.${index}.items`}
                    language={language}
                />
            </section>
        );
    });
};

export default TextCategoriesEditor;
