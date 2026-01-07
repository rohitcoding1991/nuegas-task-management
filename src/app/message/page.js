"use client"
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography, IconButton, InputBase, InputAdornment } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Notification from "@/assets/svg/Notification.svg";
import Image from "next/image"
import Profile from "@/assets/svg/Profile.svg";
import SearchSvg from "@/assets/svg/SearchSvg.svg"
import ChatBox from "@/components/ChatBox";
import ChatArea from "@/app/message/chat/page";

const Message = () => {

    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container spacing={0}>
                <Grid item xs={isLargeScreen ? 2 : false}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={isLargeScreen ? 10 : 12} className="!border !border-[--Activity-body]">
                    <Box className="!bg-white !border-b !border-[--Activity-body]">
                        <Box className="!flex !items-center !justify-between !p-6">
                            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-2xl !px-2'>Settings</Typography>
                            <Box className="lg:!flex !items-center !gap-6 !hidden ">
                                <IconButton>
                                    <Image src={Notification} alt="Notification" />
                                </IconButton>
                                <Image src={Profile} alt="Profile" />
                            </Box>
                        </Box>
                    </Box>
                    <Grid container spacing={0}>
                        <Grid item xs={isLargeScreen ? 3.16 : 12} className="">
                            <Box className="!bg-white !p-5">
                                <InputBase
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Image src={SearchSvg} alt='search' />
                                        </InputAdornment>
                                    }
                                    placeholder={`Search Name`}
                                    className="!border !border-[--Activity-body] lg:!w-[19.1vw] !w-full !px-2 !py-[1.07vh] !rounded-md"
                                />
                            </Box>
                            <ChatBox />
                        </Grid>
                        <Grid item xs={isLargeScreen ? 8.84 : 12}>
                            <Box className="!hidden lg:!inline"> <ChatArea /></Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    )
}

export default Message
