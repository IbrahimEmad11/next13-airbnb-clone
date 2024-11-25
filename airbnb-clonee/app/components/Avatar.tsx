'use client';

import Image from 'next/image';

const Avatar = () => {
    return ( 
        <Image
            className="rounded-full"
            height="30"
            width="30"
            src="/images/avatar.png"
            alt="User Avatar"
        />
     );
}
 
export default Avatar;