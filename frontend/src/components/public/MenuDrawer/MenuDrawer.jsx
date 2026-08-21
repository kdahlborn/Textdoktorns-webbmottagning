import { useDisclosure } from '@mantine/hooks';
import './menuDrawer.css';
import { Accordion, Drawer } from '@mantine/core';
import HeaderNav from '../HeaderNav/HeaderNav';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import { motion } from 'motion/react';
import Button from '../../Button/Button';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '../../../utils/strings';
import { ChevronDown, Languages } from 'lucide-react';
import LanguageController from '../LanguageController/LanguageController';

const MenuDrawer = ({ opened, onClose }) => {
    const { language } = useParams();

    return (
        <>
            <Drawer
                opened={opened}
                onClose={onClose}
                position="top"
                zIndex={10}
                withCloseButton={false}
                overlayProps={{
                    backgroundOpacity: 0.5,
                    blur: 4,
                    color: 'var(--bg-dark)',
                }}
                styles={{
                    inner: {
                        top: '100px',
                    },
                    overlay: {
                        top: '100px',
                    },
                    content: {
                        height: 'auto',
                        display: 'flex',
                        transition: 'height 0.3s ease-in-out',
                    },
                    body: {
                        padding: '1rem 0',
                        width: '100%',
                    },
                }}
            >
                <div className="drawer">
                    <HeaderNav onCloseDrawer={onClose} />
                    <LanguageController onCloseDrawer={onClose} />
                </div>
            </Drawer>
        </>
    );
};

export default MenuDrawer;
