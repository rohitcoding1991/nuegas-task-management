import React from 'react';
import Image from 'next/image';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NuegasLogo from '@/assets/svg/NuegasLogo.svg';
import OverView from '@/assets/svg/OverView.svg';
import Mentors from '@/assets/svg/Mentors.svg';
import Tasks from '@/assets/svg/Tasks.svg';
import Settings from '@/assets/svg/Settings.svg';
import Message from '@/assets/svg/Message.svg';
import HelpCenter from '../HelpCenter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const data = [
        { id: 0, src: OverView, alt: 'overview', primary: 'Overview', path: '/' },
        { id: 1, src: Tasks, alt: 'task', primary: 'Tasks', path: '/task' },
        { id: 2, src: Mentors, alt: 'mentors', primary: 'Mentors', path: '/mentors' },
        { id: 3, src: Message, alt: 'message', primary: 'Message', path: '/message' },
        { id: 4, src: Settings, alt: 'settings', primary: 'Settings', path: '/settings/general' },
    ];

    return (
        <Box className="!h-screen !bg-white w-[16.5vw] !m-0 !p-8 !fixed !top-0 !left-0 overflow-auto">
            <Box>
                <Image src={NuegasLogo} alt="NuegasLogo" />
            </Box>
            <Box role="presentation" className="relative">
                <List className="mt-14 p-0">
                    {data.map((item) => (
                        <Link href={item.path} key={item.id}>
                            <ListItem className="p-0">
                                <ListItemButton className={`PlusJakartaSans700 hover:bg-[--body] hover:rounded-lg py-[10px] ${pathname === item.path ? 'text-black !bg-[--body] !rounded-lg' : ''
                                    }`}>
                                    <ListItemIcon>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            style={{ stroke: pathname === item.path ? 'black' : 'currentColor' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={`font-bold text-[--sidebar-text]  hover:text-black ${pathname === item.path ? 'text-black' : ''
                                            }`}
                                        primary={item.primary}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
            <Box className="absolute bottom-4">
                <HelpCenter />
            </Box>
        </Box>
    );
};

export default Sidebar;
