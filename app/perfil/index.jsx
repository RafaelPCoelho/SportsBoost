"use client";
import React from "react";
import { Img, Heading, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import Sidebar5 from "../../components/Sidebar5";

export default function PerfilPage() {
  return (
    <div className="w-full">
      <div className="bg-gray-50 pl-3.5 pt-3.5">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <Sidebar5 />
          <div className="relative h-[1120px] w-[88%] self-end md:w-full md:p-5">
            <Img
              src="img_group_4.svg"
              width={485}
              height={903}
              alt="image"
              className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[903px] w-[39%] rounded-tl-[30px]"
            />
            <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full flex-col">
              <Header />
              <div className="relative z-[1] mt-[-119px] flex flex-col items-end gap-[7px]">
                <Heading size="5xl" as="h1" className="mr-[357px] tracking-[1.03px] !text-gray-900_04 md:mr-0">
                  $BOOST
                </Heading>
                <div className="relative h-[854px] self-stretch md:h-auto">
                  <div className="flex w-full flex-col items-end">
                    <div className="relative z-[4] mr-[159px] flex w-[29%] items-start justify-between gap-5 rounded-[25px] bg-indigo-A400 py-[23px] pl-8 pr-[38px] shadow-sm md:mr-0 md:w-full sm:p-5">
                      <Heading size="10xl" as="h2" className="tracking-[0.14px] !text-white-A700">
                        100
                      </Heading>
                      <Img
                        src="img_airplane_white_a700.svg"
                        width={69}
                        height={94}
                        alt="airplane"
                        className="h-[94px] w-[28%]"
                      />
                    </div>
                    <div className="relative mt-[-50px] h-[759px] w-full">
                      <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[59%] flex-col gap-3 rounded-[28px] border border-solid border-indigo-50 bg-white-A700 pb-[450px] pl-4 pr-[9px] pt-[46px] md:py-5">
                        <div className="rounded-[20px] bg-blue_gray-100_33 pr-[5px] pt-2.5">
                          <div className="flex items-start justify-between gap-5 sm:flex-col">
                            <div className="flex w-[68%] flex-col gap-[21px] sm:w-full">
                              <div className="flex items-center gap-[5px] sm:flex-col">
                                <div className="relative h-[82px] w-[17%] md:h-auto sm:w-full">
                                  <Img
                                    src="img_profile_pic.png"
                                    width={60}
                                    height={60}
                                    alt="profilepic"
                                    className="h-[60px] w-[60px] rounded-[50%]"
                                  />
                                  <Img
                                    src="img_play_indigo_a400.svg"
                                    width={80}
                                    height={82}
                                    alt="play"
                                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[82px] w-full"
                                  />
                                </div>
                                <Text size="4xl" as="p" className="!font-actor !text-gray-600">
                                  Compartilhe o que te motiva com seus fãs
                                </Text>
                              </div>
                              <div className="ml-[85px] flex gap-5 md:ml-0">
                                <Img
                                  src="img_image.svg"
                                  width={24}
                                  height={24}
                                  alt="image"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="img_facebook.svg"
                                  width={24}
                                  height={24}
                                  alt="facebook"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="img_upload.svg"
                                  width={24}
                                  height={24}
                                  alt="upload"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="img_smile.svg"
                                  width={24}
                                  height={24}
                                  alt="smile"
                                  className="h-[24px] w-[24px]"
                                />
                                <Img
                                  src="img_frame.svg"
                                  width={24}
                                  height={24}
                                  alt="image"
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                            </div>
                            <div className="flex rounded-[68px] bg-light_blue-400_7e px-[30px] pb-14 pt-[55px] opacity-0.4 shadow-md md:py-5 sm:p-5">
                              <Text size="2xl" as="p" className="!font-aoboshione !text-white-A700">
                                INSPIRAR
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-px rotate-[90deg] bg-blue_gray-100" />
                        <div>
                          <div className="flex items-start gap-[15px] md:flex-col">
                            <Img
                              src="img_ellipse_6.png"
                              width={60}
                              height={60}
                              alt="circleimage"
                              className="h-[60px] w-[60px] rounded-[50%]"
                            />
                            <div className="relative h-[81px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch">
                              <Img
                                src="img_vector.svg"
                                width={17}
                                height={4}
                                alt="vector"
                                className="mr-[30px] h-[4px] md:mr-0"
                              />
                              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-start gap-3">
                                <div className="flex flex-col items-start gap-1">
                                  <div className="flex flex-wrap items-center gap-[5px]">
                                    <Heading size="xl" as="h3" className="self-start !text-black-900_01">
                                      cloutexhibition
                                    </Heading>
                                    <Text size="md" as="p" className="self-end !text-black-900_99">
                                      @RajLahoti · 22m
                                    </Text>
                                  </div>
                                  <Text size="md" as="p" className="!font-actor !text-black-900_01">
                                    Jogo emocionante!!!
                                  </Text>
                                </div>
                                <div className="flex w-[48%] items-center justify-between gap-5 md:w-full">
                                  <Img
                                    src="img_contrast_blue_gray_600.svg"
                                    width={24}
                                    height={24}
                                    alt="contrast"
                                    className="h-[24px] w-[24px] self-start"
                                  />
                                  <div className="flex items-start gap-2.5">
                                    <Img
                                      src="img_thumbs_up.svg"
                                      width={24}
                                      height={24}
                                      alt="thumbsup"
                                      className="h-[24px] w-[24px]"
                                    />
                                    <Text size="xl" as="p" className="!font-actor !text-green-A700">
                                      5
                                    </Text>
                                  </div>
                                  <div className="flex items-start gap-2.5">
                                    <Img
                                      src="img_like_fill.svg"
                                      width={24}
                                      height={24}
                                      alt="likefill"
                                      className="h-[24px] w-[24px]"
                                    />
                                    <Text size="xl" as="p" className="!font-actor !text-pink-500">
                                      9
                                    </Text>
                                  </div>
                                  <Img
                                    src="img_twitter.svg"
                                    width={24}
                                    height={24}
                                    alt="twitter"
                                    className="h-[24px] w-[24px] self-start"
                                  />
                                  <Img
                                    src="img_statistics.svg"
                                    width={24}
                                    height={24}
                                    alt="statistics"
                                    className="h-[24px] w-[24px] self-start"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-[0.00px] top-[14%] m-auto h-[47px] w-[37%]">
                        <div className="absolute bottom-0 left-[1.00px] top-0 my-auto h-[47px] w-[46px] rounded-[23px] bg-indigo-A400_1c" />
                        <div className="absolute bottom-[1.73px] left-0 right-0 m-auto flex items-center gap-[5px] px-[7px] pb-1">
                          <Img
                            src="img_medal_3_1.png"
                            width={34}
                            height={34}
                            alt="medal3one"
                            className="h-[34px] w-[34px] object-cover"
                          />
                          <Heading size="5xl" as="h4" className="!font-semibold tracking-[0.16px] !text-indigo-A400">
                            Minhas Medalhas
                          </Heading>
                        </div>
                      </div>
                      <div className="absolute bottom-[0.00px] right-[4%] m-auto w-[35%]">
                        <div className="relative z-[2] flex items-center justify-between gap-5 pr-[11px]">
                          <Heading size="2xl" as="h5" className="self-end tracking-[0.77px] !text-gray-900_04">
                            BENEFICIOS DESBLOQUEADOS
                          </Heading>
                          <Img
                            src="img_arrow_right_blue_gray_50_01.svg"
                            width={25}
                            height={22}
                            alt="arrowright"
                            className="h-[22px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2.5">
                          <div className="flex gap-[17px] sm:flex-col">
                            <Input
                              size="xl"
                              variant="fill"
                              name="ticket_one"
                              placeholder={`INGRESSO`}
                              className="w-full rounded-[22px] font-bold tracking-[0.16px] sm:w-full sm:pr-5"
                            />
                            <Input
                              size="xl"
                              variant="fill"
                              name="tshirt_one"
                              placeholder={`CAMISETA`}
                              className="w-full rounded-[22px] font-bold tracking-[0.16px] sm:w-full sm:pr-5"
                            />
                          </div>
                          <div className="flex gap-[17px] sm:flex-col">
                            <Input
                              size="md"
                              variant="fill"
                              name="backpack_one"
                              placeholder={`MOCHILA`}
                              className="w-full rounded-[22px] font-bold tracking-[0.16px] sm:w-full sm:px-5"
                            />
                            <Button size="3xl" className="w-full rounded-[22px] font-bold tracking-[0.16px] sm:pr-5">
                              VOUCHER
                            </Button>
                          </div>
                        </div>
                        <div className="mt-[15px] flex items-center justify-between gap-5">
                          <Heading size="2xl" as="h6" className="self-end tracking-[0.77px] !text-gray-900_04">
                            Amigos
                          </Heading>
                          <Button size="sm" className="w-[36px] rotate-[90deg] rounded-[10px]">
                            <Img src="img_arrow_right_gray_900_04.svg" width={36} height={36} />
                          </Button>
                        </div>
                        <div className="rounded-[28px] border border-solid border-indigo-50_ce bg-white-A700 p-[18px]">
                          <div className="flex gap-6 sm:flex-col">
                            <div className="flex w-full flex-col items-start gap-[3px] pb-[18px] sm:w-full">
                              <Img
                                src="img_play_deep_purple_a200.svg"
                                width={51}
                                height={52}
                                alt="play"
                                className="h-[52px] w-full md:h-auto"
                              />
                              <Heading size="s" as="p" className="tracking-[0.13px] !text-black-900_01">
                                Ana Ju
                              </Heading>
                            </div>
                            <div className="flex w-full flex-col items-center gap-[3px] pb-[18px] sm:w-full">
                              <Img
                                src="img_play_deep_orange_300.svg"
                                width={51}
                                height={52}
                                alt="play"
                                className="h-[52px] w-[51px]"
                              />
                              <Heading size="s" as="p" className="tracking-[0.13px] !text-black-900_01">
                                Nariya
                              </Heading>
                            </div>
                            <div className="flex w-full flex-col items-center gap-[3px] pb-[18px] sm:w-full">
                              <Img
                                src="img_play_deep_orange_300_52x51.svg"
                                width={51}
                                height={52}
                                alt="play"
                                className="h-[52px] w-[51px]"
                              />
                              <Heading size="s" as="p" className="tracking-[0.13px] !text-black-900_01">
                                Riya
                              </Heading>
                            </div>
                            <div className="flex w-full flex-col items-center pb-5 sm:w-full">
                              <Img
                                src="img_profile.svg"
                                width={51}
                                height={52}
                                alt="profile"
                                className="h-[52px] w-[51px]"
                              />
                              <Heading size="s" as="p" className="tracking-[0.13px] !text-black-900_01">
                                Alicio
                              </Heading>
                            </div>
                            <div className="flex w-full flex-col items-center pb-5 sm:w-full">
                              <Img
                                src="img_play_52x51.svg"
                                width={51}
                                height={52}
                                alt="play_eleven"
                                className="h-[52px] w-[51px]"
                              />
                              <Heading size="s" as="p" className="tracking-[0.13px] !text-black-900_01">
                                Mari
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[11.00px] left-[26.00px] z-[3] m-auto flex w-[65%] items-start gap-3.5 md:relative md:flex-col">
                        <Img
                          src="img_ellipse_6_60x59.png"
                          width={59}
                          height={60}
                          alt="image"
                          className="h-[60px] w-[59px] rounded-[29px] object-cover md:w-full"
                        />
                        <div className="flex flex-1 flex-col gap-1 md:self-stretch">
                          <div className="flex flex-wrap items-center gap-[5px]">
                            <Heading size="xl" as="h6" className="!text-black-900_01">
                              Joanplukts
                            </Heading>
                            <Text size="md" as="p" className="self-end !text-black-900_99">
                              @joaneekt · 1h
                            </Text>
                          </div>
                          <div className="flex flex-col items-start gap-3.5">
                            <Text size="md" as="p" className="!font-actor !text-black-900_01">
                              Patida de hoje
                            </Text>
                            <Img
                              src="img_image_8.png"
                              width={467}
                              height={310}
                              alt="imageeight"
                              className="h-[310px] w-[63%] rounded-[20px] object-cover"
                            />
                            <div className="flex w-[44%] items-center justify-between gap-5 md:w-full">
                              <div className="flex flex-col self-start">
                                <Img
                                  src="img_contrast_blue_gray_600.svg"
                                  width={24}
                                  height={24}
                                  alt="contrast"
                                  className="h-[24px]"
                                />
                              </div>
                              <div className="flex items-start gap-2.5">
                                <Img
                                  src="img_thumbs_up.svg"
                                  width={24}
                                  height={24}
                                  alt="thumbsup"
                                  className="h-[24px] w-[24px]"
                                />
                                <Text size="xl" as="p" className="!font-actor !text-green-A700">
                                  15
                                </Text>
                              </div>
                              <div className="flex items-center gap-2.5 self-start">
                                <Img
                                  src="img_like_fill.svg"
                                  width={24}
                                  height={24}
                                  alt="likefill"
                                  className="h-[24px] w-[24px]"
                                />
                                <Text size="xl" as="p" className="self-end !font-actor !text-pink-500">
                                  200
                                </Text>
                              </div>
                              <Img
                                src="img_twitter.svg"
                                width={24}
                                height={24}
                                alt="twitter"
                                className="h-[24px] w-[24px] self-start"
                              />
                              <Img
                                src="img_statistics.svg"
                                width={24}
                                height={24}
                                alt="statistics"
                                className="h-[24px] w-[24px] self-start"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[27.00px] top-[13%] m-auto flex items-center gap-[7px]">
                    <Heading size="5xl" as="h4" className="!text-black-900_01">
                      Home
                    </Heading>
                    <Img src="img_customize.svg" width={21} height={24} alt="customize" className="h-[24px] self-end" />
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
