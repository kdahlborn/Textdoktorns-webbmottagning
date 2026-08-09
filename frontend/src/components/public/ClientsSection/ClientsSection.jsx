import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import logoEuCom from '../../../assets/images/logotypes/eu-com.svg';
import logoSemcon from '../../../assets/images/logotypes/semcon.svg';
import logoCyient from '../../../assets/images/logotypes/cyient.svg';
import logoWikipedia from '../../../assets/images/logotypes/wikipedia.svg';
import logoRws from '../../../assets/images/logotypes/rws.svg';
import logoBjerkenHynell from '../../../assets/images/logotypes/b-hynell.svg';
import logoSting from '../../../assets/images/logotypes/sting.svg';
import './clientsSection.css';

const ClientsSection = ({ content }) => {
    const { language } = useParams();
    const clients = [
        {
            label: 'european commission',
            link: `https://commission.europa.eu/index_${language}`,
            img: logoEuCom,
        },
        {
            label: 'semcon',
            link: `https://semcon.com/${language === 'sv' ? 'sv' : 'en'}`,
            img: logoSemcon,
        },
        {
            label: 'cyient',
            link: `https://www.cyient.com/`,
            img: logoCyient,
        },
        {
            label: 'wikipedia',
            link: `https://${language}.wikipedia.org`,
            img: logoWikipedia,
        },
        {
            label: 'rws',
            link: `https://rws.com`,
            img: logoRws,
        },
        {
            label: 'Bjerkén Hynell',
            link: `https://www.bjerkenhynell.se/${language === 'en' ? 'en' : ''}`,
            img: logoBjerkenHynell,
        },
        {
            label: 'Sting bioeconomy',
            link: `https://stingbioeconomy.com/${language === 'sv' ? '/language/sv' : ''}`,
            img: logoSting,
        },
    ];
    return (
        <section className="clients-section content-wrapper">
            <SectionHeading title={content.heading[language]} />

            <ul className="clients">
                {clients.map((client) => {
                    return (
                        <li key={client.label} className="clients__item">
                            <a
                                href={client.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="clients__link"
                            >
                                <img
                                    src={client.img}
                                    alt={`${client.label} logo`}
                                    className="clients__img"
                                />
                            </a>
                        </li>
                    );
                })}
            </ul>

            <p className="clients-section__desc">
                {content.description[language]}
            </p>
        </section>
    );
};

export default ClientsSection;
