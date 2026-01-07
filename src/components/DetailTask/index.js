import React from 'react'
import { Box, Typography } from "@mui/material"
import PrimaryButton from '@/common/PrimaryButton/PrimaryButton'

const DetailTask = () => {
    const data = [
        { id: 1, text: "Understanding the tools in Figma" },
        { id: 2, text: "Understand the basics of making designs" },
        { id: 3, text: "Design a mobile application with figma" },
    ]
    return (
        <Box className="!bg-white rounded-xl !mt-1 !py-4">
            <Box className="!flex !justify-between !py-4">
                <Typography variant='h3' className='PlusJakartaSans500 !text-base !text-[--Secondary-500] !px-8 !font-semibold'>Detail Task</Typography>
                <Typography variant='h6' className='PlusJakartaSans500 !text-xs !text-[--Secondary-400] !px-8 !font-medium'>UI / UX Designer</Typography>
            </Box>
            {data.map((index) => (
                <Box key={index.id} className="!flex !px-6 !gap-2">
                    <Typography variant='h6' className='!bg-[--Activity-body] !px-4 !py-2 PlusJakartaSans500 !text-sm !font-medium !text-[--Secondary-500] lg:!mb-2 !mb-4 !rounded-xl'>{index.id}</Typography>
                    <Typography variant='h6' className=' PlusJakartaSans500 !text-sm !font-medium !text-[--Secondary-500] lg:!pt-2 md:pt-2'>{index.text}</Typography>
                </Box>
            ))}
            <Box className="!flex !justify-around">
                <PrimaryButton title="Go To Detail" className="!mx-5 !mt-10"/>
            </Box>
        </Box>
    )
}

export default DetailTask
