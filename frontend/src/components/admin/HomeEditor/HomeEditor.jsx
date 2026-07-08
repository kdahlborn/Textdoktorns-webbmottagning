import { useEffect, useState } from 'react';
import './homeEditor.css';
import { useForm } from 'react-hook-form';
import { usePageStore } from '../../../stores/usePageStore';
import Button from '../../Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const HomeEditor = ({ page }) => {
    const { register, handleSubmit, reset } = useForm();
    const updatePageContent = usePageStore((state) => state.updatePageContent);
    const [language, setLanguage] = useState('sv');

    useEffect(() => {
        if (page) {
            reset(page.content);
        }
    }, [page, reset]);

    const onSubmit = (data) => {
        updatePageContent(page.page, data).then((res) => console.log(res));
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <LanguageSelector language={language} setLanguage={setLanguage} />

            <input
                key={`title-0-${language}`}
                {...register(`hero.titleLines.${language}.0`)}
                defaultValue={page?.content.hero.titleLines[language][0]}
            />

            <input
                key={`title-1-${language}`}
                {...register(`hero.titleLines.${language}.1`)}
                defaultValue={page?.content.hero.titleLines[language][1]}
            />

            <input
                key={`title-2-${language}`}
                {...register(`hero.titleLines.${language}.2`)}
                defaultValue={page?.content.hero.titleLines[language][2]}
            />
            <Button text="Spara" type="submit" />
        </form>
    );
};

export default HomeEditor;
