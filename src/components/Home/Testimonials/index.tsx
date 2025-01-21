import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import profile1 from '@/public/images/home/profile.png'
import profile2 from '@/public/images/home/profile (1).png'
import profile3 from '@/public/images/home/profile (2).png'

const Testimonials = () => {
  return (
    <div className=" w-full mx-auto py-44 tab:px-5 mob:pb-10">
      <div className="flex flex-wrap justify-center gap-[20px]">
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {' '}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/RdjFPFmJqmw?start=6&rel=0"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex gap-[11px] items-center">
              <Image src={profile1} alt="" width={48} height={48} />
              <div>
                <Text className="text-[20px] leading-[28px] text-white">
                  Pellegrino Remodel
                </Text>
                <Text className="mt-1 text-gray-400">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3">
              This service is amazing!
            </Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {' '}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/CIfc5KXFhx8?si=ka96dqKPIVHT7MoX?rel=0"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex gap-[11px] items-center">
              <Image src={profile2} alt="" width={48} height={48} />
              <div>
                <Text className="text-[20px] leading-[28px] text-white">
                  Pellegrino Remodel
                </Text>
                <Text className="mt-1 text-gray-400">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3">
              This service is amazing!
            </Text>
          </div>
        </div>
        <div className="w-full max-w-[25%] border mob:max-w-[100%] border-[#0000001A] rounded-[10px]">
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden">
            {' '}
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://www.youtube.com/embed/uJDgiKqd178?si=8Y3_IVeBGpBZOyCR?rel=0"
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div className="p-4">
            <div className="flex gap-[11px] items-center">
              <Image src={profile3} alt="" width={48} height={48} />
              <div>
                <Text className="text-[20px] leading-[28px] text-white">
                  Pellegrino Remodel
                </Text>
                <Text className="mt-1 text-gray-400">CEO at TechCorp</Text>
              </div>
            </div>
            <Text className="text-gray-400 text-sm mt-3">
              This service is amazing!
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
