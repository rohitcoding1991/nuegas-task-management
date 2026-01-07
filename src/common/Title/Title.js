import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import ArrowLeft from "../../assets/svg/arrow-left.svg"
import ArrowRight from "../../assets/svg/arrow-right.svg"

const Title = ({ title }) => {
    return (
        <Box className="!flex !justify-between">
            <Typography className='PlusJakartaSans600 !text-[--Secondary-500] lg:!text-2xl !text-xl'>{title}</Typography>
            <Box className="!flex lg:!mx-6 md:!mx-6 ">
                <Image src={ArrowLeft} alt='left'/>
                <Image src={ArrowRight} alt='right'/>
            </Box>
        </Box>
    )
}

export default Title
