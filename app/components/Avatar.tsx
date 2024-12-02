'use client';

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/avatar.png"}
      alt="User Avatar"
      onError={(e) => {
        e.currentTarget.src = "/images/avatar.png";
      }}
    />
  );
};

export default Avatar;
