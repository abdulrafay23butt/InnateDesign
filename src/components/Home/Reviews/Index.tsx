import React from 'react'
import Image from 'next/image'
import Text from '@/components/ui/Text'
import avatar from '@/public/images/home/avatarimg.png'
import leftdot from '@/public/images/home/left“.png'
import rightdot from '@/public/images/home/right“.png'

const Reviews = () => {
  return (
    <div className="py-32">
      <div className="w-full max-w-[1104px] mx-auto relative">
        <Image
          className="absolute left-0 top-[-40px] mob:top-[-70px]"
          src={leftdot}
          alt=""
          width={74.95}
          height={64}
        />
        <Image
          className="absolute right-0 bottom-[50px]"
          src={rightdot}
          alt=""
          width={74.95}
          height={64}
        />

        <Text className="text-center text-[24px] font-light leading-[31.2px] text-white max-w-[879px] mx-auto mob:text-[18px]">
          I found Michael because he came highly recommended as both a designer
          and a builder. I wanted to update the style of my kitchen and bathroom
          but being unfamiliar with the construction process, I needed a
          contractor who could walk me through the process and help me with
          material selections. His workers were detail orientated and polite,
          and Michael always took the time to explain what was going on and ask
          my input when decisions needed to be made. Bravo!
        </Text>
        <div className="flex gap-[11px] items-center justify-center mt-10">
          <Image src={avatar} alt="" width={70} height={70} />
          <div className="">
            <Text className=" text-[24px] font-medium leading-[31.2px] text-white ">
              Katerin C
            </Text>
            <Text className="mt-1 text-white ">
              Co-founder, Head of Product
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
