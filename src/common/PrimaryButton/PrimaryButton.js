import React from 'react';
import { Box } from "@mui/material";

const PrimaryButton = ({ title, className }) => {
    return (
        <Box className={`${className}`}>
            <button style={{ backgroundColor: 'var(--Primary-500)' }} className='!text-sm !font-medium !text-white xl:!px-[6.4vw] md:!px[4.5vw] !px-[25vw] !py-3 !rounded-lg'>{title}</button>
        </Box>
    )
}

export default PrimaryButton;
