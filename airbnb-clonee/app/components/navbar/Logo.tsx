'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Airbnb Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="130"
      src="/images/airbnb-logo.png"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
