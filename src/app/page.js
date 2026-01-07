"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Profile from "@/assets/svg/Profile.svg";
import Notification from "@/assets/svg/Notification.svg";
import Image from "next/image";
import { useMediaQuery } from '@mui/material';
import Calendar from "@/common/Calendar/Calendar";
import RunningTrackUi from "@/common/RunningUI/RunningTrackUi";
import Activity from "@/components/Activity";
import Sidebar from "@/components/Sidebar";
import Todaystask from "@/components/Todaystask";
import MonthlyMentors from "@/components/MonthelyMentors";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import UpcomingTask from "@/components/UpcomingTask";

const Page = () => {
  const isLargeScreen = useMediaQuery('(min-width:1084px)');

  return (
    <main className="min-h-screen">
      <Grid container>
        <Grid item xs={isLargeScreen ? 2 : false}>
          {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
        </Grid>
        <Grid item xs={isLargeScreen ? 7 : 12} className="p-0">
          <Box className=" lg:!p-8 !p-4 ">
            <Box className="lg:!flex !items-center !justify-between !hidden">
              <Box className="lg:!grid !gap-3 md:!hidden ">
                <Typography variant="h1" className="PlusJakartaSans700 !text-2xl !leading-9">
                  Hi, Skylar Dias
                </Typography>
                <Typography variant="h6" className="!text-[--secondry-text] PlusJakartaSans500 !text-base !leading-6">
                  Let's finish your tasks today!
                </Typography>
              </Box>
              <Box className="lg:!flex !items-center !gap-6 !hidden ">
                <IconButton>
                  <Image src={Notification} alt="Notification" />
                </IconButton>
                <Image src={Profile} alt="Profile" />
              </Box>
            </Box>
            <Box className="!flex lg:!flex-row lg:!gap-0 !gap-6 lg:!justify-between md:!flex-row !mx-[1.1vw] !flex-col !mt-12">
              <RunningTrackUi />
              <Activity />
            </Box>
            <MonthlyMentors />
            <UpcomingTask />
          </Box>
        </Grid>
        <Grid item xs={isLargeScreen ? 3 : 12}>
          <Box className="lg:!p-10 !p-4 !bg-[--Activity-body] !h-full">
            <Calendar />
            <Todaystask />
          </Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default Page;
