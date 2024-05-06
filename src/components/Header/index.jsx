import React from "react";
import { Img, Heading, Text } from "./..";
import Link from "next/link";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-start w-[98%] md:w-full gap-5`}
    >
      <div className="mt-[58px] flex h-[159px] w-[61%] items-center justify-center rounded-[28px] bg-[url(/images/img_group_74.svg)] bg-cover bg-no-repeat pl-[23px] pr-5 md:h-auto md:w-full sm:pl-5">
        <div className="w-full">
          <div className="flex items-start justify-between gap-5 sm:flex-col">
            <div className="mt-[9px] flex w-[62%] flex-col sm:w-full">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <Heading size="6xl" as="h3" className="!font-poppins tracking-[1.16px] !text-indigo-A400_02">
                  Olá, @mibz
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="mt-[5px] flex items-center justify-center rounded-[12px] border-[0.5px] border-solid border-gray-400_01 bg-white-A700 px-[9px] py-0.5 !font-dmsans tracking-[-0.45px] !text-black-900_01"
                >
                  Level 10
                </Text>
              </div>
              <div className="relative h-[32px]">
                <Img
                  src="img_rectangle_17.svg"
                  width={426}
                  height={12}
                  alt="image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[12px] w-[98%] rounded-md"
                />
                <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[95%] items-center justify-between gap-5">
                  <Text
                    as="p"
                    className="flex items-center justify-center self-end rounded-[15px] border border-solid border-gray-400 bg-white-A700 py-[7px] pl-2 pr-[3px] !font-dmsans !font-medium tracking-[-0.36px] !text-black-900_01"
                  >
                    XP 500/ 1000{" "}
                  </Text>
                  <div className="flex rounded-[18px] bg-indigo-400 p-[7px]">
                    <Link href="#">
                      <Img src="img_signal.svg" width={20} height={17} alt="signal" className="h-[17px]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="ml-8 mt-2 flex items-center gap-[5px] md:ml-0">
                <Link href="#">
                  <Img
                    src="img_medal_2_1.png"
                    width={46}
                    height={46}
                    alt="medal2one"
                    className="h-[46px] w-[46px] object-cover"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_medal_1.png"
                    width={44}
                    height={44}
                    alt="medalone"
                    className="h-[44px] w-[44px] object-cover"
                  />
                </Link>
                <Link href="#">
                  <Img
                    src="img_medal_1_98x99.png"
                    width={45}
                    height={45}
                    alt="medalone"
                    className="h-[45px] w-[45px] object-cover"
                  />
                </Link>
              </div>
            </div>
            <Img
              src="img_group_indigo_200.svg"
              width={157}
              height={159}
              alt="image"
              className="h-[159px] w-[22%] sm:w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[30%] items-center justify-center gap-1 md:w-full">
        <Img src="img_logob_2.png" width={89} height={80} alt="logobtwo" className="h-[80px] w-[24%] object-cover" />
        <div className="flex flex-1 gap-2.5">
          <Img src="img_search_gray_900_04.svg" width={50} height={51} alt="search" className="h-[51px] w-[50px]" />
          <Img src="img_group.svg" width={50} height={51} alt="image" className="h-[51px] w-[50px]" />
          <div className="flex flex-1 items-center justify-center">
            <Img src="img_play_indigo_a400.svg" width={50} height={51} alt="play" className="h-[51px] w-[50px]" />
            <Heading size="2xl" as="h6" className="ml-[5px] tracking-[0.69px] !text-gray-900_04">
              mibz
            </Heading>
            <Img
              src="img_arrow_down_gray_900_04_9x14.svg"
              width={14}
              height={9}
              alt="arrowdown"
              className="ml-10 h-[9px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
