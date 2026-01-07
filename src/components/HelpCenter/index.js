import React from 'react';
import { Box, Typography } from "@mui/material";
import Background1 from "@/assets/svg/background1.svg"
import Background2 from "@/assets/svg/background2.svg"

const HelpCenter = () => {
    return (
        <Box className="relative">
            <Box
                className="!w-[11vw] !h-60 !bg-[--Secondary-500] !rounded-lg !flex !p-4 !flex-col !justify-center !items-center"
                sx={{ backgroundImage: `url(${Background1}) url(${Background2})`}} 
            >
                <Typography className='PlusJakartaSans600 !text-white !text-base !text-center'>Help Center</Typography>
                <Typography className='PlusJakartaSans500 !text-white !text-xs !pt-4 !text-center'>Having Trouble in Learning. Please contact us for more questions.</Typography>
                <button className='!bg-white !rounded-lg !mt-3 PlusJakartaSans500  !text-xs !px-5 !py-2'>Go To Help Center</button>
            </Box>
            <Box className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
                <Typography className='!text-white !text-3xl !w-12 !h-12 !bg-[--Secondary-500] !flex !justify-center !items-center !rounded-full !border-4 border-white'>?</Typography>
            </Box>
        </Box>
    )
}

export default HelpCenter;
