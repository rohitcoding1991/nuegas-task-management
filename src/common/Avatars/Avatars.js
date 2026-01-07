import React from 'react';
import { Avatar } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';

const Avatars = ({ avatars }) => {

    return (
        <AvatarGroup max={5}>
            {avatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    alt={avatar.alt}
                    src={avatar.src}
                    className='lg:!w-[1.9vw] lg:!h-[1.9vw]'
                />
            ))}
        </AvatarGroup>
    );
};

export default Avatars;
