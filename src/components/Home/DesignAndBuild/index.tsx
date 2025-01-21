import Text from '@/components/ui/Text'
import Image from 'next/image'
import React from 'react'

import Button from '@/components/ui/Button'

import stressbg from '@/public/images/home/dsignbuild/avoidbg.png'
import stresstop from '@/public/images/home/dsignbuild/avoidtop.png'

import avoidleft from '@/public/images/home/dsignbuild/avoidleft.png'
import avoidright from '@/public/images/home/dsignbuild/avoidright.png'
import avoidcenter from '@/public/images/home/dsignbuild/avoidcenter.png'
import savetime from '@/public/images/home/savetimee.png'
import track from '@/public/images/home/cabinetry.png'
import rightarrow from '@/public/images/press/RightArrowblue.png'

const DesignAndBuild = () => {
  return (
    <div className="w-full h-full gradient py-16 px-5 mob:pt-5">
      <Text
        as="h1"
        className="text-center font-normal mob:text-[30px] mb-4 mob:leading-[33px] mob:px-5"
      >
        Design and build the <span className="italic">Innate </span> way
      </Text>
      {/* avoid surprise */}
      <div className="flex  lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-[80%] mob:w-full min-h-[439px] mt-16 mb-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center">

        <div className="w-full max-w-[437.84px] relative flex justify-center items-center mob:order-2">

          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="relative z-10"
            src={avoidcenter}
            alt=""
            width={346.31}
            height={303}
          />
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="absolute left-0 z-0"
            src={avoidleft}
            alt=""
            width={186.54}
            height={244.25}
          />
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="absolute right-0 z-0"
            src={avoidright}
            alt=""
            width={186.54}
            height={244.25}
          />
        </div>
        <div className="mob:order-1">
          <Text as="h2" className="">
            Avoid Surprises
          </Text>
          <Text className=" mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            After doing an in-person site visit, we will provide an accurate,
            comprehensive and transparent bid, broken down by trade.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md ">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>

      {/* Save Time */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-[80%] mob:w-full min-h-[439px] my-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center">
        <div className="mob:order-1">
          <Text as="h2" className="">
            Save Time
          </Text>
          <Text className="mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            Our network of vetted architects, engineers and craftsmen save you
            the time and hassle of putting together your own team.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[431.81px] flex justify-center items-center mob:order-2">
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="0"
            src={savetime}
            alt=""
            width={431.81}
            height={369}
          />
        </div>
      </div>

      {/* Avoid Stress */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-[80%] mob:w-full min-h-[439px] my-8 mx-auto rounded-[50px] mob:rounded-[19.05px] mob:gap-[80px] gradient2 justify-center">
        <div className="w-full max-w-[430px] flex justify-end items-end relative mob:mt-12 mob:order-2">
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mb-[-50px]"
            src={stressbg}
            alt=""
            width={346}
            height={293}
          />
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            className="absolute top-[-70px] left-0"
            src={stresstop}
            alt=""
            width={263}
            height={98}
          />
        </div>
        <div className="mob:order-1">
          <Text as="h2" className="">
            Avoid Stress
          </Text>
          <Text className="mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px] max-w-7xl">
            Our dedicated project managers attend to every detail of your
            project to make sure it gets done right, on time, and on budget. Our
            subcontractors are vetted, experienced, and highly skilled.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
      </div>

      {/* Track Progress */}
      <div className="flex lg:flex-wrap gap-[47px] items-center p-[43px] mob:px-[20px] w-[80%] mob:w-full min-h-[439px] mt-8 mx-auto rounded-[50px] mob:rounded-[19.05px] gradient2 justify-center">
        <div className="mob:order-1">
          <Text as="h2" className="">
            Track Progress
          </Text>
          <Text className="mt-3 mb-16 text-[22px] text-[#FFFFFF66] leading-[30.14px]">
            Our proprietary software, JobSync, centralizes timeline progress,
            payments, budget, and material selections.
          </Text>
          <Button className="max-w-[202px] h-[61px] flex justify-center items-center gap-2 mt-4 text-[19.5px] bg-transparent backdrop-blur-md">
            Get Started
            <Image src={rightarrow} alt="" width={18} height={18} />
          </Button>
        </div>
        <div className="w-full max-w-[448px] flex justify-center items-center mob:order-2">
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            src={track}
            alt=""
            width={448}
            height={369}
          />
        </div>
      </div>
    </div>
  )
}

export default DesignAndBuild
