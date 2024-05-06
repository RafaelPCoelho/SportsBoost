"use client";
import React from "react";
import { Img, Text, Button } from "../../components";

export default function SignupPage() {
  return (
    <div className="w-full pb-[92px] pt-[75px] md:py-5">
      <div className="flex bg-white-A700 md:flex-col">
        <div className="flex w-[50%] flex-col items-center gap-[126px] px-16 md:w-full md:gap-[94px] md:p-5 md:px-5 sm:gap-[63px]">
          <div className="h-[72px] self-stretch bg-white-A700" />
          <Img src="img_image_2.png" width={424} height={91} alt="imagetwo" className="h-[91px] w-[72%] object-cover" />
          <div className="flex w-[81%] pb-[57px] md:w-full md:pb-5">
            <div className="w-full pb-[13px] pt-4">
              <div className="flex flex-col gap-[39px] pb-2.5 pr-[9px]">
                <Button size="xl" shape="round" className="w-full font-roboto font-bold sm:px-5">
                  Email ou número celular
                </Button>
                <Button shape="round" className="w-full font-dmsans font-bold tracking-[-0.48px] sm:px-5">
                  Continue
                </Button>
                <Button
                  shape="round"
                  leftIcon={
                    <Img src="img_contrast.svg" width={18} height={18} alt="contrast" className="h-[18px] w-[18px]" />
                  }
                  className="w-full gap-2 font-roboto font-bold sm:px-5"
                >
                  Sign Up with Google
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end self-stretch">
            <Img
              src="img_logo_03_1.png"
              width={110}
              height={30}
              alt="logo03one"
              className="relative z-[1] mr-[186px] h-[30px] w-[27%] object-cover md:mr-0"
            />
            <div className="relative mt-[-26px] flex self-start pb-[49px] pl-[203px] pr-14 md:px-5 md:pb-5">
              <Text size="xl" as="p" className="!font-roboto !text-black-900_01">
                Powered by
              </Text>
            </div>
          </div>
        </div>
        <Img
          src="img_placeholder_image.png"
          width={720}
          height={979}
          alt="placeholder"
          className="h-[979px] w-[50%] object-cover md:w-full"
        />
      </div>
    </div>
  );
}
