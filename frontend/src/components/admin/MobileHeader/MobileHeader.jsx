import { useDisclosure } from '@mantine/hooks';
import './mobileHeader.css';
import { Menu } from 'lucide-react';
import Button from '../../global/Button/Button';
import { Drawer } from '@mantine/core';
import Sidebar from '../Sidebar/Sidebar';

const MobileHeader = () => {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <header className="mobile-header">
            <Drawer
                opened={opened}
                onClose={close}
                withCloseButton={false}
                size="75%"
                styles={{
                    content: {
                        overflow: 'hidden',
                    },
                    body: {
                        padding: 0,
                        overflow: 'hidden',
                    },
                }}
            >
                <Sidebar onCloseDrawer={close} />
            </Drawer>

            <Button onClick={toggle}>{<Menu size={30} />} Meny</Button>
        </header>
    );
};

export default MobileHeader;
