"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { useMediaQuery, Box, Typography } from '@mui/material';
import Sidebar from "@/components/Sidebar";
import HeaderSidebar from "@/common/HeaderSidebar/HeaderSidebar";
import Header from "@/components/Header";
import Title from "@/common/Title/Title";
import ReviewCards from "@/common/ReviewCards/ReviewCards";
import Photo1 from "@/assets/svg/Photo1.png";
import Photo3 from "@/assets/svg/Photo3.png";
import Photo4 from "@/assets/svg/Photo4.png";
import Photo from "@/assets/svg/Photo.svg";
import Photo2 from "@/assets/svg/Photo2.svg"
import JasonMomoa from "@/assets/svg/JasonMomoa.png"

const Mentors = () => {

    const data = [
        { id: 1, src: Photo1, alt: "photo", name: "Jessica Jane", tag: "Web Developer", title: "+ Follow", count: "40", reviews: "4,7 (750 Reviews)" },
        { id: 2, src: Photo2, alt: "photo", name: "Abraham Lincoln", tag: "3D Design", title: "Followed", count: "32", reviews: "4,9 (510 Reviews)", className: "!hidden lg:!inline" },
        { id: 3, src: Photo, alt: "photo", name: "Curious George", tag: "UI UX Design", title: "+ Follow", count: "40", reviews: "4,7 (750 Reviews)" },
        { id: 4, src: Photo4, alt: "photo", name: "Anna White", tag: "3D Design", title: "+ Follow", count: "28", reviews: "4,8 (870 Reviews)", className: "!hidden lg:!inline" },
    ]

    const MentorsData = [
        { id: 1, src: Photo1, alt: "photo", name: "Jessica Jane", tag: "Web Developer", title: "+ Follow", count: "40", reviews: "4,7 (750 Reviews)", description: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . " },
        { id: 2, src: JasonMomoa, alt: "photo", name: "Alex Stanton", tag: "UI / UX Designer", title: "Followed", count: "60", reviews: "4,9 (510 Reviews)", description: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . " },
        { id: 3, src: Photo3, alt: "photo", name: "Antoine Griezmann", tag: "Android Developer", title: "+ Follow", count: "50", reviews: "4,7 (750 Reviews)", description: "Hi, I'm Antoine Griezmann. I'm an Android Developer at Google company . . ." },
        { id: 4, src: Photo2, alt: "photo", name: "Abraham Lincoln", tag: "UI UX Design", title: "Followed", count: "32", reviews: "4,8 (830 Reviews)", description: "Hi, I'm Abraham Lincoln. I'm a professional 3D Designer at Blender company . . ." },
        { id: 5, src: Photo4, alt: "photo", name: "Anna White", tag: "3D Design", title: "+ Follow", count: "40", reviews: "4,8 (870 Reviews)", description: "Hi, I'm Anna White. I'm a professional 3D Designer at Blender company . . ." },
        { id: 6, src: Photo2, alt: "photo", name: "Richard Kyle", tag: "3D Design", title: "Followed", count: "60", reviews: "4,7 (730 Reviews)", description: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." },
        { id: 7, src: Photo1, alt: "photo", name: "Julia Philips", tag: "IOS Developer", title: "+ Follow", count: "60", reviews: "4,7 (750 Reviews)", description: "Hi, I'm Julia Philips. I'm a senior manager at Apple company . . ." },
        { id: 8, src: Photo, alt: "photo", name: "Curious George", tag: "UI UX Design", title: "Followed", count: "60", reviews: "4,9 (510 Reviews)", description: "Hi, I'm Richard Kyle. I'm a professional 2D Designer at Photoshop company . . ." },
    ]


    const isLargeScreen = useMediaQuery('(min-width:1084px)');

    return (
        <main className="min-h-screen">
            <Grid container spacing={2}>
                <Grid item xs={isLargeScreen ? 2 : false}>
                    {isLargeScreen ? <Sidebar /> : <HeaderSidebar />}
                </Grid>
                <Grid item xs={isLargeScreen ? 10 : 12}>
                    <Header title="Explore Mentors" />
                    <Box className="!px-3">
                        <Box className="!my-6 !mx-3">
                            <Title title="Recent Mentors" />
                        </Box>
                        <Box className="!flex flex-col lg:flex-row !gap-4 lg:!gap-0">
                            {data.map((reviewData) => (
                                <ReviewCards
                                    key={reviewData.id}
                                    src={reviewData.src}
                                    alt={reviewData.alt}
                                    className={`${reviewData?.className} lg:!w-[17.7vw]`}
                                    tag={reviewData.tag}
                                    name={reviewData.name}
                                    title={reviewData.title}
                                    count={reviewData.count}
                                    reviews={reviewData.reviews}
                                />
                            ))}
                        </Box>
                        <Box className="!my-6 !mx-3">
                            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] lg:!text-2xl !text-xl'>Mentors</Typography>
                        </Box>
                        <Box className="!grid lg:!grid-cols-4 !grid-rows-1 !gap-4 lg:!gap-0 !pb-6">
                            {MentorsData.map((data) => (
                                <ReviewCards
                                    key={data.id}
                                    src={data.src}
                                    alt={data.alt}
                                    name={data.name}
                                    title={data.title}
                                    count={data.count}
                                    tag={data.tag}
                                    reviews={data.reviews}
                                    description={data.description}
                                    className="!py-5 lg:!w-[19.2vw]"
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </main>

    )
}

export default Mentors

