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
import CommonSelect from "@/common/CommonSelect";
import PrimaryButton from "@/common/PrimaryButton/PrimaryButton";
import Circle24 from "@/assets/svg/Circle24.svg"
import Circle12 from "@/assets/svg/Circle12.svg"

const Settings = () => {

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
                    <Box className="lg:!mt-8 lg:!mx-5 lg:!rounded-t-xl !bg-white !px-8 !py-4">
                        <SettingTabs />
                    </Box>
                    <Box className="lg:!mb-8  lg:!m-0 lg:!mx-5 !m-4 !bg-white !px-8 !py-4 !rounded-xl">
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Language</Typography>
                        <CommonSelect />
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Timezone</Typography>
                        <CommonSelect />
                        <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-sm !px-2 !py-5'>Timezone</Typography>
                        <Box className="!pb-4 !flex !gap-2">
                            <button className="!border !border-[--Primary-500] !py-3 !rounded-lg PlusJakartaSans500 !flex !text-[--Secondary-500] text-xs !px-4">24 Hours<Image src={Circle24} alt="24" className="!ml-[4.1vw]" /></button>
                            <button className="!border !border-[--Activity-body] !rounded-lg !py-3 PlusJakartaSans500 !flex !text-[--Secondary-500] text-xs !px-4 ">12 Hours<Image src={Circle12} alt="12" className="!ml-[4.1vw]" /></button>
                        </Box>
                        <PrimaryButton title="Save Changes" className="lg:!mt-8 lg:!mb-5 !mt-40" />
                    </Box>
                </Grid>
            </Grid>
        </main>

    )
}

export default Settings


