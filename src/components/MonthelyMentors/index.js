import React from 'react'
import { Box } from "@mui/material"
import Title from '@/common/Title/Title'
import ReviewCards from '@/common/ReviewCards/ReviewCards'
import Photo from "@/assets/svg/Photo.svg"
import Photo2 from "@/assets/svg/Photo2.svg"

const MonthlyMentors = () => {

    const MonthlyData = [
        { id: 0, src: Photo, alt: "Image", name: "Curious George", tag: 'UI UX Design', title: "+ Follow", count: "40", reviews: "4,7 (750 Reviews)" },
        { id: 1, src: Photo2, alt: "Image", name: "Abraham Lincoln", tag: '3D Design', title: "Followed", count: "32", reviews: "4,9 (510 Reviews)", className: "!hidden lg:!inline" },
    ]

    return (
        <Box className="!py-10">
            <Box className="!mb-6 !ml-3">
                <Title title="Monthly Mentors" />
            </Box>
            <Box className="!flex flex-col lg:flex-row lg:!gap-4">
                {MonthlyData.map((data) => (
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
                        className={`${data?.className} lg:!w-[17.7vw]`}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default MonthlyMentors
