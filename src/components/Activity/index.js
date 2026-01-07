import React from 'react'
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import ArrowDown from "@/assets/svg/ArrowDown.svg"
import Charts from '../Chart';

const Activity = () => {
    return (
        <Box className="!bg-[--Activity-body] !rounded-xl lg:mt-0 !p-5">
            <Box className="!flex !justify-between mb-1">
                <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-base !px-2'>Activity</Typography>
                <Box className="!flex !gap-2 !px-2">
                    <Typography>This Week</Typography>
                    <Image src={ArrowDown} alt='arrow down' />
                </Box>
            </Box>
            <Box className="">
                <Charts />
            </Box>
        </Box>
    )
}

export default Activity
