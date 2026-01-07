import React from 'react'
import { Box, Typography, InputAdornment, InputBase } from "@mui/material"
import Angelie from "@/assets/svg/Angelie.png"
import Online from "@/assets/svg/Notif.svg"
import Image from "next/image"
import VideoSvg from "@/assets/svg/video.svg"
import CallSvg from "@/assets/svg/call.svg"
import Image2 from "@/assets/svg/Image.svg"
import LinkSvg from "@/assets/svg/Link.svg"
import SendSvg from "@/assets/svg/Send.svg"
import ArrowLeft from "@/assets/svg/ArrowLeftSvg.svg"

const ChatArea = () => {
    return (
        <div className=''>
            <Box className="flex p-4 bg-white justify-between">
                <Box className="flex">
                    <a href='/message'>
                        <Box className="lg:!hidden !inline">
                            <Image src={ArrowLeft} alt='arrow-left' className='!mx-4 !my-4' />
                        </Box>
                    </a>
                    <Image src={Angelie} alt='image' className='!w-[52px] !h-[52px]' />
                    <Box className="px-4">
                        <Typography className='PlusJakartaSans600 !text-sm !text-[--Secondary-500]'>Angelie Crison</Typography>
                        <Box className="flex !gap-2 !py-1 items-center">
                            <Image src={Online} alt='online' />
                            <span className='PlusJakartaSans500 !text-xs !text-[--Secondary-500]'>Online</span>
                        </Box>
                    </Box>
                </Box>
                <Box className="!flex !gap-6 lg:!mx-8 !mx-2 !my-4">
                    <Box className="!rounded-full !p-1 !border !border-[--Activity-body]">
                        <Image src={VideoSvg} alt='video' className='!w-5 !h-5' />
                    </Box>
                    <Box className="!rounded-full !p-1 !border !border-[--Activity-body]">
                        <Image src={CallSvg} alt='call' className='!w-5 !h-5'/>
                    </Box>
                </Box>
            </Box>
            <Box className="!overflow-y-auto !min-h-[400px]">
                <Box className="flex justify-center !my-6">
                    <Box className="bg-[--Secondary-500] w-[68px] rounded-lg h-[37px] flex items-center justify-center">
                        <Typography className='text-white text-center py-2'>Today</Typography>
                    </Box>
                </Box>
                <Box className="!flex !flex-row-reverse ">
                    <Typography className='!break-words lg:!w-[18vw] !p-3 !rounded-s-xl !rounded-b-xl !mx-8 PlusJakartaSans500 !text-sm !text-white !bg-[--Primary-500] '>Morning Angelie, I have question about My Task</Typography>
                </Box>
                <Box className="!flex !flex-row-reverse ">
                    <Typography className='!px-8 !pt-2 !text-[--sidebar-text] PlusJakartaSans400 !text-xs'>Today 11:52</Typography>
                </Box>
                <Box className="!mx-8">
                    <Typography className='!break-words lg:!w-[20vw] !p-3 !rounded-b-xl !rounded-r-xl PlusJakartaSans500 !text-sm !text-[--Secondary-500] !bg-white'>Yes sure, Any problem with your assignment?</Typography>
                    <Typography className='!px-2 !pt-2 !text-[--sidebar-text] PlusJakartaSans400 !text-xs'>Today 11:53</Typography>
                </Box>
                <Box className="!flex !flex-row-reverse ">
                    <Box className=" !bg-[--Primary-500] !mx-8 lg:!w-[21.8vw] !rounded-s-xl !rounded-b-xl !flex !justify-center !items-center !flex-col !p-2">
                        <Image src={Image2} alt='image' className='lg:!w-[21vw]' />
                        <Typography className='!break-words  PlusJakartaSans500 !py-2 !text-sm !text-white '>How to make a responsive display from the dashboard?</Typography>
                    </Box>
                </Box>
                <Box className="!flex !flex-row-reverse !mt-4">
                    <Typography className='!break-words lg:!w-[14vw] !p-3 !rounded-s-xl !rounded-b-xl !mx-8 PlusJakartaSans500 !text-sm !text-white !bg-[--Primary-500] '>Is there a plugin to do this task?</Typography>
                </Box>
                <Box className="!flex !flex-row-reverse ">
                    <Typography className='!px-8 !pt-2 !text-[--sidebar-text] PlusJakartaSans400 !text-xs'>Today 11:52</Typography>
                </Box>
                <Box className="!mx-8">
                    <Typography className='!break-words lg:!w-[20vw] !p-3 !rounded-b-xl !rounded-r-xl PlusJakartaSans500 !text-sm !text-[--Secondary-500] !my-4 !bg-white'>No plugins. You just have to make it smaller according to the size of the phone.</Typography>
                    <Typography className='!break-words lg:!w-[20vw] !p-3 !rounded-b-xl !rounded-r-xl PlusJakartaSans500 !text-sm !text-[--Secondary-500] !bg-white'>Thank you very much. I'm glad you asked about the assignment</Typography>
                    <Typography className='!px-2 !pt-2 !text-[--sidebar-text] PlusJakartaSans400 !text-xs !mb-8'>Today 11:53</Typography>
                </Box>
            </Box>
            <Box className="!fixed !bottom-0">
                <Box className="flex lg:!w-[61vw] !w-[100vw] !flex-col xl:!mt-0 !mt-9 !bg-white">
                    <InputBase
                        endAdornment={
                            <InputAdornment position="end">
                                <Image src={LinkSvg} alt='link' className='fill-black lg:!mx-6 !mx-2 !cursor-pointer' />
                                <Box className="!bg-[--Primary-500] !px-2 !py-2 !rounded-lg  !cursor-pointer ">
                                    <Image src={SendSvg} alt='send' className='!max-w-2xl' />
                                </Box>
                            </InputAdornment>
                        }
                        placeholder="Send your message…"
                        className="!border !border-[--Activity-body] PlusJakartaSans500 !text-sm !px-6 !w-full py-[1.77vh] !rounded-lg"
                    />
                </Box>
            </Box>
        </div >
    )
}

export default ChatArea
