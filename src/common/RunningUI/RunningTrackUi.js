import React from 'react'
import { Box, Typography, Grid } from "@mui/material"

const RunningTrackUi = () => {
    return (
        <Box className="!bg-[--Secondary-500] !rounded-xl lg:!px-2 !py-2 !flex !flex-row lg:!flex-col">
            <Box>
                <Typography className='!text-white PlusJakartaSans600 !text-base !mx-4 !my-3'>Running Task</Typography>
                <Typography className='!text-white PlusJakartaSans600 !text-3xl !mx-4'>65</Typography>
            </Box>
            <Box className="!flex !m-4">
                <Box className="!w-[68px] !h-[68px] !rounded-full !border-[3px] !border-r-[--Primary-500] ">
                    <Typography className='!text-white !text-center !pt-4 !text-lg PlusJakartaSans500'>45%</Typography>
                </Box>
                <Box className="!p-3 !mr-4">
                    <Typography className='PlusJakartaSans600 !text-white !text-xl !leading-7'>100</Typography>
                    <Typography className='PlusJakartaSans500 !text-[--Secondary-300] !text-base !leading-5'>Task</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RunningTrackUi
