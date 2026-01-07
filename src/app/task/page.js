"use client"
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Header from "@/components/Header";
import Title from "@/common/Title/Title";
import TaskImage from "@/assets/svg/Task.png"
import Task2 from "@/assets/svg/Task2.png"
import Task3 from "@/assets/svg/Task3.png"
import Task4 from "@/assets/svg/Task4.png"
import Image from "@/assets/svg/TaskImage2.png"
import Image2 from "@/assets/svg/Task3Image.png"
import TaskCards from "@/common/TaskCards/TaskCards";

const Tasks = () => {

  const timeLimitData = [
    { id: 1, src: TaskImage, alt: "image", title: "Creating Awesome Mobile Apps", subTitle: "UI UX Design", progressPercentage: "90%", leftDays: "1 Hour" },
    { id: 2, src: Image, alt: "image", title: "Creating Mobile App Design", subTitle: "UI UX Design", progressPercentage: "75%", leftDays: "3 Days Left" },
    { id: 3, src: Image2, alt: "image", title: "Creating Perfect Website", subTitle: "Web Developer", progressPercentage: "85%", leftDays: "4 Days Left" },
    // { id: 4, src: Image, alt: "image", title: "Creating Perfect Website", subTitle: "Web Developer", progressPercentage: "90%", leftDays: "3 Days Left" },
  ]

  const newTasktData = [
    { id: 1, src: Task2, alt: "image", title: "Creating Mobile App Design", subTitle: "UI UX Design", progressPercentage: "75%", leftDays: "3 Days Left" },
    { id: 2, src: Task3, alt: "image", title: "Creating Perfect Website", subTitle: "Web Developer", progressPercentage: "85%", leftDays: "4 Days Left" },
    { id: 3, src: Task4, alt: "image", title: "Mobile App Design", subTitle: "UI UX Design", progressPercentage: "65%", leftDays: "3 Days Left" },
    // { id: 4, src: Image, alt: "image", title: "Creating Perfect Website", subTitle: "Web Developer", progressPercentage: "90%", leftDays: "3 Days Left" },
  ]

  const isLargeScreen = useMediaQuery('(min-width:1084px)');

  return (
    <main className="min-h-screen">
      <Grid container>
        <Grid item xs={12} lg={2}>
          {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
        </Grid>
        <Grid item xs={12} lg={10}>
          <Header title="Explore Task" />
          <Box className="!my-6 !mx-8">
            <Title title="Time Limit" />
          </Box>
          <Box className="!flex lg:!flex-row !gap-16 !flex-col !mx-8" sx={{ overflowX: 'auto' }}>
            {timeLimitData.map((data) => (
              <a href="/detailTask" key={data.id}>
                <TaskCards
                  alt={data.alt}
                  src={data.src}
                  title={data.title}
                  subTitle={data.subTitle}
                  progressPercentage={data.progressPercentage}
                  leftDays={data.leftDays}
                  className="lg:!w-[20.6vw]"
                />
              </a>
            ))}
          </Box>
          <Box className="!my-6 !mx-8">
            <Title title="New Task" />
          </Box>
          <Box className="!flex lg:!flex-row !gap-16 !flex-col !mx-8">
            {newTasktData.map((data) => (
              <a href="/detailTask" key={data.id}>
                <TaskCards
                  alt={data.alt}
                  src={data.src}
                  title={data.title}
                  subTitle={data.subTitle}
                  progressPercentage={data.progressPercentage}
                  leftDays={data.leftDays}
                  className="lg:!w-[20.6vw]"
                />
              </a>
            ))}
          </Box>
        </Grid>
      </Grid>
    </main>
  )
}

export default Tasks;
