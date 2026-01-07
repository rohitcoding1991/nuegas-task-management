import React from 'react';
import { chatBoxData } from './data';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ChatBox = () => {
    return (
        <div className="w-full h-full bg-white">
            {chatBoxData.map((data) => (
                <a href='/message/chat' key={data.id}>
                <Box key={data.id} className="flex py-3 px-4 border-y border-[--Activity-body]">
                    <Image src={data.src} alt="image" className='!w-12 !h-12'/>
                    <Box className="px-3 flex flex-grow justify-between">
                        <Box className="flex flex-col">
                            <Typography className="font-semibold PlusJakartaSans500 text-sm text-secondary-500">
                                {data.name}
                            </Typography>
                            <Typography className="font-normal PlusJakartaSans400 text-sm text-secondary-500">
                                {data.lastMessage}
                            </Typography>
                        </Box>
                        <Box className="!flex !flex-col !gap-2 !text-right !pt-3">
                            <Typography className="font-light PlusJakartaSans500 text-xs text-secondary-300">
                                {data.time}
                            </Typography>
                            <Image src={data.isComplete} alt="completed" className=''/>
                        </Box>
                    </Box>
                </Box>
                </a>
            ))}
        </div>
    );
};

export default ChatBox;
