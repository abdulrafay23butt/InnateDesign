import React from "react";
import ReactMarquee from "react-fast-marquee";

import { cn } from "@/libs/utils/twMerge";
import Image from "next/image";

interface Props {
  className?: string;
}

const Marquee = (props: Props) => {
  const { className, ...rest } = props;

  // Define image URLs and their specific widths
  const imageData = [
    { url: "/images/home/bt.png", width: 45 },
    { url: "/images/home/marvin 2.png", width: 226 },
    { url: "/images/home/dt 2.png", width: 143 },
    { url: "/images/home/ad 2.png", width: 268 },
    { url: "/images/home/bt.png", width: 45 },
    { url: "/images/home/marvin 2.png", width: 226 },
    { url: "/images/home/dt 2.png", width: 143 },
    { url: "/images/home/ad 2.png", width: 268 },
  ];

  // Duplicate the images for seamless scrolling
  const duplicatedImageData = [...imageData, ...imageData];

  return (
    <div className="py-14 overflow-hidden">
     
      <ReactMarquee {...rest} className="flex items-center">
        {duplicatedImageData.map((image, index) => (
          <Image
            src={image.url}
            alt={`Brand ${index + 1}`}
            className={cn("mx-10 mob:mx-4", className)}
            key={index}
            width={image.width}
            height={image.width} // You can modify height independently if needed
          />
        ))}
      </ReactMarquee>
    </div>
  );
};

export default Marquee;
