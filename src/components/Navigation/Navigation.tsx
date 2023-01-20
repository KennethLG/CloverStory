"use client";

import { config } from "@/config";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center p-2">
      <div className="flex flex-row items-center">
        <Image
          src={`${config.aws.cdn}/icon.png`}
          width={50}
          height={50}
          alt="SearchingLight icon"
        />
        <div className="text-2xl font-bold ml-2">Clover Story</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-lg font-bold mr-2">Home</div>
        <div className="text-lg font-bold mr-2">About Us</div>
        <div className="text-lg font-bold mr-2">Contact Us</div>
      </div>
    </div>
  );
};