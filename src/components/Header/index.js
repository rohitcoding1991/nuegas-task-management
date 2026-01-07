import React from 'react'
import { Box, Typography, InputBase, InputAdornment, } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import Notification from "@/assets/svg/Notification.svg";
import Image from "next/image"
import Profile from "@/assets/svg/Profile.svg";
import SearchSvg from "@/assets/svg/SearchSvg.svg"
import Sort from "@/assets/svg/sort.svg"
import Category from "@/assets/svg/category.svg"
import SecondaryButton from '@/common/SecondaryButton/SecondaryButton';
import settingSvg from "@/assets/svg/settingSvg.svg"

const Header = ({ title }) => {
    return (
        <Box className="!bg-white !border-b !border-[--Activity-body]">
            <Box className="lg:!p-8 !p-4">
                <Box className="!flex !items-center !justify-between">
                    <Typography className='PlusJakartaSans600 !text-[--Secondary-500] !text-2xl !px-2'><span>{title}</span> </Typography>
                    <Box className="lg:!flex !items-center !gap-6 !hidden ">
                        <IconButton>
                            <Image src={Notification} alt="Notification" />
                        </IconButton>
                        <Image src={Profile} alt="Profile" />
                    </Box>
                </Box>
                <Box className="!flex !justify-between !gap-2 lg:!gap-0 !mt-3">
                    <InputBase
                        endAdornment={
                            <InputAdornment position="end">
                                <Image src={SearchSvg} alt='search'/>
                            </InputAdornment>
                        }
                        placeholder={`Search ${title}`}
                        className="!border !border-[--Activity-body] lg:!w-[26vw] !w-full !px-2 !py-[1.07vh] !rounded-md"
                    />
                    <Box className="lg:!flex !gap-4 !px-4 !hidden">
                        <SecondaryButton src={Category} alt="category" name="Category" />
                        <SecondaryButton src={Sort} alt="Sort" name="Sort By : Popular" />
                    </Box>
                    <Box className="!flex lg:!hidden">
                    <SecondaryButton src={settingSvg} alt="setting"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
