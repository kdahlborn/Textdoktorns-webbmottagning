import { useParams } from 'react-router';
import SectionHeading from '../SectionHeading/SectionHeading';
import logoEuCom from '../../../assets/images/logotypes/eu-com.svg';
import logoSemcon from '../../../assets/images/logotypes/semcon.svg';
import logoCyient from '../../../assets/images/logotypes/cyient-3.svg';
import logoWikipedia from '../../../assets/images/logotypes/wikipedia.svg';
import logoRws from '../../../assets/images/logotypes/rws.svg';
import logoBjerkenHynell from '../../../assets/images/logotypes/b-hynell.svg';
import logoSting from '../../../assets/images/logotypes/sting.svg';
import './clientsSection.css';
import { motion } from 'motion/react';

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
                {clients.map((client, index) => {
                    return (
                        <motion.li
                            key={client.label}
                            className="clients__item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: 'easeOut',
                            }}
                        >
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
                        </motion.li>
                    );
                })}
            </ul>

            <motion.p
                className="clients-section__desc"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                }}
            >
                {content.description[language]}
            </motion.p>
        </section>
    );
};

export default ClientsSection;
