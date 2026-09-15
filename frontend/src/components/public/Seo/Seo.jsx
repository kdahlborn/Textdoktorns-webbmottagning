import { Helmet } from 'react-helmet-async';

const ogLocales = {
    sv: 'sv_SE',
    en: 'en_GB',
    de: 'de_DE',
    es: 'es_ES',
    fr: 'fr_FR',
    ru: 'ru_RU',
};

const Seo = ({ title, description, language, canonical, languages }) => {
    return (
        <Helmet>
            <html lang={language} />

            <title>{title}</title>

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Textdoktorn" />
            <meta property="og:locale" content={ogLocales[language]} />
            <meta
                property="og:image"
                content={`${window.location.origin}/og-img.png`}
            />

            <meta name="description" content={description} />

            <link rel="canonical" href={canonical} />

            {languages.map((item) => (
                <link
                    key={item.lang}
                    rel="alternate"
                    hrefLang={item.lang}
                    href={item.url}
                />
            ))}

            <link
                rel="alternate"
                hrefLang="x-default"
                href={languages.find((item) => item.lang === 'sv').url}
            />
        </Helmet>
    );
};

export default Seo;
