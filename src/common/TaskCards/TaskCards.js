import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Slider from '../Slider/Slider'
import Time from "../../assets/svg/Time-Circle.svg"
import Avatars from '../Avatars/Avatars'
import Photo1 from "@/assets/svg/Photo1.png"
import Photo2 from "@/assets/svg/Photo2.png"
import Photo3 from "@/assets/svg/Photo3.png"
import Photo4 from "@/assets/svg/Photo4.png"
import Photo5 from "@/assets/svg/Photo5.png"

const TaskCards = ({ src, alt, title, subTitle, progressPercentage, leftDays, className }) => {
    const avatars = [Photo1, Photo2, Photo3, Photo4, Photo5]
    return (
        <Box className={`${className} !bg-white !rounded-lg !py-4 lg:!px-6 !px-3`}>
            <Image src={src} alt={alt} />
            <Typography variant='h3' className='PlusJakartaSans600 !text-base !font-semibold !text-[--Secondary-500] !pt-2'>{title}</Typography>
            <Typography variant='h6' className='PlusJakartaSans500 !text-xs !text-[--Secondary-400] !font-medium'>{subTitle}</Typography>
            <Box className="flex !justify-between">
                <Typography className='PlusJakartaSans500 !text-base !pt-3 !text-[--Secondary-500] !font-medium'>Progress</Typography>
                <Typography className='PlusJakartaSans500 !text-base !pt-3 !px-2 !text-[--Primary-500] !font-medium'>{progressPercentage}</Typography>
            </Box>
            <Slider className="!px-6" />
            <Box className="!flex !justify-between">
                <Box className="!flex !gap-1">
                    <Image src={Time} alt='time' />
                    <Typography variant='h6' className='!pt-2 PlusJakartaSans500 !text-sm !text-[--Secondary-500]'>{leftDays}</Typography>
                </Box>
                <Box>
                    <Avatars avatars={avatars} />
                </Box>
            </Box>
        </Box>
    )
}

export default TaskCards;
