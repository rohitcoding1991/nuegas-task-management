import React from 'react'
import { Box } from "@mui/material"
import Title from '@/common/Title/Title'
import TaskCards from '@/common/TaskCards/TaskCards'
import Image from "@/assets/svg/Image.svg"
import Image2 from "@/assets/svg/Image2.svg"

const UpcomingTask = () => {

    const Upcomingdata = [
        { id: 0, src: Image, alt: "image", title: "Creating Mobile App Design", subTitle: "UI UX Design", progressPercentage: "75%", leftDays: "3 Days Left" },
        { id: 1, src: Image2, alt: "image", title: "Creating Perfect Website", subTitle: "Web Developer", progressPercentage: "85%", leftDays: "4 Days Left", className: "!hidden lg:!inline md:!inline" }
    ]

    return (
        <Box>
            <Box className="!mb-6 !ml-3">
                <Title title="Upcoming Task" />
            </Box>
            <Box className="!flex !flex-row !gap-12 lg:!mx-7">
                {Upcomingdata.map((data) => (
                    <TaskCards
                        key={data.id}
                        alt={data.alt}
                        src={data.src}
                        title={data.title}
                        subTitle={data.subTitle}
                        progressPercentage={data.progressPercentage}
                        leftDays={data.leftDays}
                        className={`${data?.className} lg:!w-[20.6vw]`}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default UpcomingTask
