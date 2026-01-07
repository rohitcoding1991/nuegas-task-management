import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import More from "@/assets/svg/more.svg"
import TaskImage from "@/assets/svg/todayTask.svg"
import TaskCards from '@/common/TaskCards/TaskCards'
import DetailTask from '../DetailTask'

const Todaystask = () => {
    return (
        <Box className=" !mt-8">
            <Box className="lg:!px-6 px-3 !pt-6 !flex !justify-between !bg-white rounded-t-xl">
                <Typography className='PlusJakartaSans600 !text-sm !text-[--Secondary-500]'>Task Today</Typography>
                <Image src={More} alt='more' />
            </Box>
            <TaskCards
                src={TaskImage}
                alt="taskimage"
                title="Creating Awesome Mobile Apps"
                subTitle="UI /UX Designer"
                progressPercentage="90%"
                leftDays="1 Hour"
            />
            <DetailTask/>
        </Box>
    )
}

export default Todaystask
