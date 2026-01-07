"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography, IconButton } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Notification from "@/assets/svg/Notification.svg";
import Image from "next/image"
import Profile from "@/assets/svg/Profile.svg";
import SettingTabs from "@/common/Tabs/Tabs";
import ToggleButton from "@/components/ToggleButton";
import PrimaryButton from "@/common/PrimaryButton/PrimaryButton";

const Notifications = () => {

    const data = [{ id: 0, label: "Message", isActive: true },
    { id: 1, label: "Task Update", isActive: false },
    { id: 2, label: "Task Deadline", isActive: true },
    { id: 3, label: "Mentor Help", isActive: false },
    ]

    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container>
                <Grid item xs={isLargeScreen ? 2 : false}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={isLargeScreen ? 10 : 12}>
                    <Box className="!bg-white lg:!border-b !border-[--Activity-body]">
                        <Box className="!flex !items-center !justify-between !p-8">
                            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-2xl !px-2'>Settings</Typography>
                            <Box className="lg:!flex !items-center !gap-6 !hidden ">
                                <IconButton>
                                    <Image src={Notification} alt="Notification" />
                                </IconButton>
                                <Image src={Profile} alt="Profile" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className="lg:!mt-8 lg:!mx-5 !bg-white !px-8 !py-4">
                        <SettingTabs />
                    </Box>
                    <Box className="lg:!mb-8 lg:!mx-5 lg:!m-0 !m-4 !bg-white !px-8 !py-4 !rounded-xl">
                        <Box className="!my-4">
                            {data.map((index) => (
                                <Box className="!flex !flex-col !my-4">
                                    <ToggleButton key={index.id} label={index.label} isActive={index.isActive} />
                                </Box>
                            ))}
                            <PrimaryButton title="Save Changes" className="lg:!mt-8 lg:!mb-5 !mt-40" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </main>

    )
}

export default Notifications


