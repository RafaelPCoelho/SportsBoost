"use client";
import React from "react";
import { Button, Heading, Img } from "../../components";
import ListaComOpEsUserprofile from "../../components/ListaComOpEsUserprofile";
import Sidebar3 from "../../components/Sidebar3";

const data = [
  { boostone: "img_medal_1.png", price: "1 $BOOST" },
  { boostone: "img_medal_2_1.png", price: "10 $BOOST" },
  { boostone: "img_medal_1_98x99.png", price: "100 $BOOST" },
];

export default function ListacomopesPage() {
  return (
    <div className="w-full pr-3">
      <div className="relative h-[1024px] pt-2 md:h-auto">
        <div className="mr-[63px] h-[810px] w-[81%] rounded-tl-[30px] border border-solid border-blue_gray-50_99 bg-gray-100 md:mr-0" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full bg-gray-50 pb-7 pl-[13px] pr-2 pt-[13px] sm:pb-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <Sidebar3 />
            <div className="flex w-[81%] flex-col items-start gap-[45px] md:w-full">
              <div className="flex w-[34%] items-center gap-[15px] self-end md:w-full sm:flex-col">
                <Img
                  src="img_logob_2.png"
                  width={89}
                  height={80}
                  alt="logobtwo"
                  className="h-[80px] w-[24%] object-cover sm:w-full"
                />
                <div className="mb-[7px] flex flex-1 gap-2.5 sm:self-stretch">
                  <Img src="img_search.svg" width={50} height={51} alt="search" className="h-[51px] w-[50px]" />
                  <Img src="img_group.svg" width={50} height={51} alt="image" className="h-[51px] w-[50px]" />
                  <div className="flex flex-1 items-center justify-center">
                    <Img src="img_play.svg" width={50} height={51} alt="play" className="h-[51px] w-[50px]" />
                    <Heading size="2xl" as="h1" className="ml-[5px] tracking-[0.69px] !text-gray-900_04">
                      mibz
                    </Heading>
                    <Img src="img_arrow_down.svg" width={14} height={9} alt="arrowdown" className="ml-10 h-[9px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-[88%] items-center gap-2.5 md:w-full md:flex-col">
                <div className="flex w-[5%] justify-center rounded-[24px] bg-indigo-A400_1c px-2 pb-1.5 pt-2 md:w-full">
                  <Img src="img_airplane_indigo_a400.svg" width={14} height={21} alt="airplane" className="h-[21px]" />
                </div>
                <div className="flex">
                  <Heading size="7xl" as="h2" className="tracking-[0.16px] !text-indigo-A400">
                    Invista no seu atleta ou esporte favorito
                  </Heading>
                </div>
              </div>
              <div className="ml-[19px] flex w-[90%] flex-col items-start md:ml-0 md:w-full">
                <div className="self-stretch">
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    <div className="flex w-[47%] flex-col gap-[38px] md:w-full">
                      {[...Array(2)].map((d, index) => (
                        <ListaComOpEsUserprofile
                          dynamictext="Escolha 1 esporte"
                          dynamictext1="Tiro com arco"
                          key={"userprofile" + index}
                        />
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-6 rounded-[10px] bg-indigo-A400 pb-5 pl-[15px] pr-[13px] pt-[9px]">
                      <Heading size="xl" as="h3" className="tracking-[0.16px] !text-white-A700">
                        $BOOSTS SALDO
                      </Heading>
                      <Heading size="10xl" as="h4" className="!font-black uppercase tracking-[0.16px] !text-white-A700">
                        100
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="ml-[5px] mt-[29px] flex pt-2 md:ml-0">
                  <Heading size="2xl" as="h5" className="tracking-[0.77px] !text-gray-900_04">
                    Valor do apoio
                  </Heading>
                </div>
                <div className="ml-[5px] flex w-[74%] gap-[77px] md:ml-0 md:w-full md:flex-col">
                  {data.map((d, index) => (
                    <div
                      key={"list1Boostone" + index}
                      className="flex w-full flex-col items-start gap-1.5 rounded-[28px] bg-cyan-50 pb-2.5 pl-[59px] pr-[33px] pt-[27px] md:pl-5 sm:px-5 sm:pt-5"
                    >
                      <Img
                        src={d.boostone}
                        width={96}
                        height={96}
                        alt="1boost"
                        className="h-[96px] w-[96px] object-cover"
                      />
                      <Heading
                        size="xs"
                        as="h6"
                        className="!font-lato !text-[12.34px] tracking-[0.21px] !text-black-900_01"
                      >
                        {d.price}
                      </Heading>
                    </div>
                  ))}
                </div>
                <Button
                  shape="round"
                  className="mt-[53px] min-w-[471px] font-dmsans font-bold tracking-[-0.48px] sm:px-5"
                >
                  CONFIRMAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
