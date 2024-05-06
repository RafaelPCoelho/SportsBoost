"use client";
import React from "react";
import { Heading, Img } from "../../components";
import Sidebar1 from "../../components/Sidebar1";

export default function EsportesPage() {
  return (
    <div className="w-full">
      <div className="pl-[17px]">
        <div className="bg-gray-50 pb-5 pl-2 pr-5 pt-[21px] sm:pt-5">
          <div className="flex items-start justify-between gap-5 md:flex-col">
            <Sidebar1 />
            <div className="flex w-[87%] flex-col items-start gap-[31px] md:w-full">
              <div className="flex w-[31%] items-center gap-[15px] self-end md:w-full sm:flex-col">
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
              <div className="flex w-[94%] flex-col gap-[53px] md:w-full sm:gap-[26px]">
                <div className="flex pb-[17px] pl-[65px] pr-14 pt-[25px] md:px-5 sm:pt-5">
                  <Heading size="8xl" as="h2" className="tracking-[0.16px] !text-indigo-A400">
                    Conheça mais sobre os esportes
                  </Heading>
                </div>
                <div className="ml-[31px] md:ml-0">
                  <div className="grid grid-cols-6 gap-[39px] md:grid-cols-3 sm:grid-cols-1">
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-3 pb-1.5 pt-3 md:h-auto">
                      <div className="flex w-[72%] flex-col items-center md:w-full">
                        <Img
                          src="img_image_9.png"
                          width={66}
                          height={66}
                          alt="atletismoimage"
                          className="h-[66px] w-[66px] object-cover"
                        />
                        <Heading as="h3" className="tracking-[0.14px]">
                          ATLETISMO
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="h4" className="relative mt-[-2px] tracking-[0.14px]">
                        BADMINTON
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-[5px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_64x64.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="h5" className="relative mt-[-1px] tracking-[0.14px]">
                        BASQUETE
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_1.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="h6" className="relative mt-[-2px] tracking-[0.14px]">
                        BOXE
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_2.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                        BREAKING
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <div className="flex w-[82%] flex-col items-center md:w-full">
                        <Img
                          src="img_image_10_3.png"
                          width={64}
                          height={64}
                          alt="imageten"
                          className="h-[64px] w-[64px] object-cover"
                        />
                        <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                          CANOAGEM
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center gap-[3px] bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-3 pt-3 md:h-auto">
                      <Img
                        src="img_image_9_66x66.png"
                        width={66}
                        height={66}
                        alt="imagenine"
                        className="h-[66px] w-[66px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        CICLISMO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-[7px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_4.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-3px] tracking-[0.14px]">
                        ESGRIMA
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-start bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat pb-[7px] pl-[38px] pr-[30px] pt-[17px] md:h-auto sm:px-5">
                      <Img
                        src="img_image_10_5.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] self-end object-cover"
                      />
                      <Heading as="p" className="relative mt-[-3px] tracking-[0.14px]">
                        FUTEBOL
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-2 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_6.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-4px] tracking-[0.14px]">
                        GINÁSTICA
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_7.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                        GOLFE
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-start bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat pb-[7px] pl-[38px] pr-[18px] pt-[17px] md:h-auto sm:pl-5">
                      <Img
                        src="img_image_10_8.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="ml-[5px] h-[64px] w-[64px] object-cover md:ml-0"
                      />
                      <Heading as="p" className="relative mt-[-3px] tracking-[0.14px]">
                        HANDEBOL
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-3 pb-[5px] pt-3 md:h-auto">
                      <Img
                        src="img_image_9_1.png"
                        width={66}
                        height={66}
                        alt="imagenine"
                        className="h-[66px] w-[66px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        HIPISMO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-end bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[30px] pb-2 pt-[17px] md:h-auto sm:px-5">
                      <Img
                        src="img_image_10_9.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-4px] tracking-[0.14px]">
                        HÓQUEI
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-[5px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_10.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-1px] tracking-[0.14px]">
                        JUDO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_11.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        LUTA
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-[7px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_12.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-3px] tracking-[0.14px]">
                        NATAÇÃO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <div className="flex w-full flex-col items-end">
                        <Img
                          src="img_image_10_13.png"
                          width={64}
                          height={64}
                          alt="imageten"
                          className="h-[64px] w-[64px] object-cover"
                        />
                        <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                          NADO ART
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-end bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[29px] pb-1.5 pt-3 md:h-auto sm:px-5">
                      <Img
                        src="img_image_9_2.png"
                        width={66}
                        height={66}
                        alt="imagenine"
                        className="h-[66px] w-[66px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        PENTATLO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat pl-[17px] pr-[13px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_14.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        POLO AQUAT.
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-[7px] pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_15.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-3px] tracking-[0.14px]">
                        REMO
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_16.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                        RUGBY
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-end bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[26px] pb-1.5 pt-[17px] md:h-auto sm:px-5">
                      <Img
                        src="img_image_10_17.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                        SALTO ORN
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1 pt-[17px] md:h-auto">
                      <div className="flex w-[62%] flex-col items-center md:w-full">
                        <Img
                          src="img_image_10_18.png"
                          width={64}
                          height={64}
                          alt="imageten"
                          className="h-[64px] w-full object-cover md:h-auto"
                        />
                        <Heading as="p" className="tracking-[0.14px]">
                          SKATE
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center gap-[3px] bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-3 pt-3 md:h-auto">
                      <Img
                        src="img_image_9_3.png"
                        width={66}
                        height={66}
                        alt="imagenine"
                        className="h-[66px] w-[66px] object-cover"
                      />
                      <Heading as="p" className="tracking-[0.14px]">
                        SURFE
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat pb-1.5 pl-[17px] pr-[11px] pt-[17px] md:h-auto">
                      <div className="flex w-full flex-col items-start">
                        <Img
                          src="img_image_10_19.png"
                          width={64}
                          height={64}
                          alt="imageten"
                          className="ml-[13px] h-[64px] w-[64px] object-cover md:ml-0"
                        />
                        <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                          TAEKWONDO
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-2 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_20.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-4px] tracking-[0.14px]">
                        TÊNIS
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full items-center justify-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat pb-1.5 pl-[17px] pr-3.5 pt-[17px] md:h-auto">
                      <div className="flex w-full flex-col items-center">
                        <Img
                          src="img_image_10_21.png"
                          width={64}
                          height={64}
                          alt="imageten"
                          className="h-[64px] w-[64px] object-cover"
                        />
                        <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                          TIRO C/ ARCO
                        </Heading>
                      </div>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-end bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[30px] pb-[7px] pt-[17px] md:h-auto sm:px-5">
                      <Img
                        src="img_image_10_22.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mr-[9px] mt-[-3px] tracking-[0.14px] md:mr-0">
                        VELA
                      </Heading>
                    </div>
                    <div className="flex h-[103px] w-full flex-col items-center bg-[url(/images/img_atletismo.svg)] bg-cover bg-no-repeat px-[17px] pb-1.5 pt-[17px] md:h-auto">
                      <Img
                        src="img_image_10_23.png"
                        width={64}
                        height={64}
                        alt="imageten"
                        className="h-[64px] w-[64px] object-cover"
                      />
                      <Heading as="p" className="relative mt-[-2px] tracking-[0.14px]">
                        VÔLEI
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
