import { useDisclosure } from '@mantine/hooks';
import './menuDrawer.css';
import { Drawer } from '@mantine/core';
import HeaderNav from '../HeaderNav/HeaderNav';
import { useState } from 'react';
import { NavLink } from 'react-router';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { motion } from 'motion/react';

const MenuDrawer = ({ opened, onClose }) => {
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
                    },
                    body: {
                        padding: '2rem 0',
                        width: '100%',
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="drawer__nav"
                >
                    <HeaderNav onCloseDrawer={onClose} />
                    <LanguageSelector onCloseDrawer={onClose} />
                </motion.div>
            </Drawer>
        </>
    );
};

export default MenuDrawer;
