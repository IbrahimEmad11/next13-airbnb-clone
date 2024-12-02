'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick = {() => router.push("/")}
      alt="Airbnb Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="130"
      src="/images/airbnb-logo.png"
    />
  );
};

export default Logo;
