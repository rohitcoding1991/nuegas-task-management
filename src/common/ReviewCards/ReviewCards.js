import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image";
import Note from "../../assets/svg/Note.svg"
import Star from "../../assets/svg/Star.svg"
import classNames from 'classnames';

const ReviewCards = ({ src, alt, name, tag, title, count, reviews, description, className }) => {
    const titleColor = title === "Followed" ? "!text-[--Secondary-400]" : "!text-[--Primary-500]"

    return (
        <Box className={classNames("!bg-white", "!rounded-xl", "lg:!m-4", "md:!m-3", "!px-5", "!py-3", className)}>
            <Box className="!flex !justify-between !gap-2">
                <Box className="!flex">
                    <Image src={src} alt={alt} className='!w-12 !h-12' />
                    <Box>
                        <Typography variant='h3' className='PlusJakartaSans600 lg:!pl-4 !pl-2 !text-base !text-[--Secondary-500]'>{name}</Typography>
                        <Typography variant='h6' className='PlusJakartaSans500 lg:!pl-4 !pl-2 !text-xs !text-[--Secondary-400]'>{tag}</Typography>
                    </Box>
                </Box>
                <Typography className={`PlusJakartaSans500 !text-sm ${titleColor}`}>{title}</Typography>
            </Box>
            <Box className="!mt-6 !mb-2">
                <Typography className='PlusJakartaSans500 leading-7 lg:pl-4 pl-2 text-xs break-words text-[--Secondary-400]' style={{ lineHeight: '1.5' }}>
                    {description}
                </Typography>
            </Box>
            <Box className="!flex !justify-between !pt-4 !pb-1 ">
                <Box className="!flex !gap-1 lg:!px-2">
                    <Image src={Note} alt='note' />
                    <Typography variant='h6' className='PlusJakartaSans500 !pt-[2px] !text-sm !text-[--Secondary-500]'>{count} Task</Typography>
                </Box>
                <Box className="!flex !gap-1">
                    <Image src={Star} alt='star' />
                    <Typography variant='h6' className='PlusJakartaSans500 !pt-[2px] !text-sm !text-[--Secondary-500]'>{reviews}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewCards
