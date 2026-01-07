import React from 'react'
import Image from "next/image"

const SecondaryButton = ({ src, alt, name }) => {
    return (
        <div>
            <button style={{ borderColor: 'var(--Activity-body)', color: 'var(--Secondary-500)' }} className='!flex lg:!gap-2 !border !px-3 !py-[1.7vh] !rounded-md' ><Image src={src} alt={alt} /><span className='!text-xs !p-1'>{name}</span></button>
        </div>
    )
}

export default SecondaryButton
