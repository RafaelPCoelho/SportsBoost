"use client";
import React from "react";
import { Input, Text, Heading, Img, Button } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar2 from "../../components/Sidebar2";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const tableData = [
  {
    descrio: "$BOOST",
    transaoid: "#12548796",
    tipo: "Compra",
    carto: "1234 ****",
    data: "28 Jan, 12.30 AM",
    quant: "-$10",
    recibo: "Download",
  },
  {
    descrio: "$BOOST",
    transaoid: "#12548796",
    tipo: "Transfer",
    carto: "1234 ****",
    data: "25 Jan, 10.40 PM",
    quant: "+$750",
    recibo: "Download",
  },
];

export default function CompreBOOSTPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("descrio", {
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <Img src="img_arrow_right.svg" width={20} height={19} alt="arrowright" className="h-[19px] w-[20px]" />
            <Text as="p" className="self-end">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-1.5 pl-5 pt-px !font-medium !text-indigo-300">
            Descrição
          </Text>
        ),
        meta: { width: "185px" },
      }),
      tableColumnHelper.accessor("transaoid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pb-1.5 pt-px !font-medium !text-indigo-300">
            Transação ID
          </Text>
        ),
        meta: { width: "104px" },
      }),
      tableColumnHelper.accessor("tipo", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pb-1.5 pt-px !font-medium !text-indigo-300">
            TIpo
          </Text>
        ),
        meta: { width: "76px" },
      }),
      tableColumnHelper.accessor("carto", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pb-[7px] pt-px !font-medium !text-indigo-300">
            Cartão
          </Text>
        ),
        meta: { width: "83px" },
      }),
      tableColumnHelper.accessor("data", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pb-[7px] pt-px !font-medium !text-indigo-300">
            Data
          </Text>
        ),
        meta: { width: "125px" },
      }),
      tableColumnHelper.accessor("quant", {
        cell: (info) => (
          <Text as="p" className="!font-medium !text-pink-A200">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-[7px] pt-px !font-medium !text-indigo-300">
            Quant
          </Text>
        ),
        meta: { width: "70px" },
      }),
      tableColumnHelper.accessor("recibo", {
        cell: (info) => (
          <div className="flex">
            <Button
              size="xs"
              variant="outline"
              shape="round"
              color="undefined_undefined"
              className="min-w-[80px] !rounded-[14px] font-inter"
            >
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[7px] !font-medium !text-indigo-300">
            Recibo
          </Text>
        ),
        meta: { width: "100px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full">
      <div className="bg-gray-50 pl-3.5 pt-4">
        <div className="flex items-start justify-between gap-5 md:flex-col">
          <Sidebar2 />
          <div className="mt-[5px] flex w-[88%] items-start justify-center gap-[17px] md:w-full md:flex-col md:p-5">
            <div className="mt-[50px] flex flex-1 flex-col gap-[34px] md:self-stretch">
              <div>
                <div className="flex flex-col items-center gap-[21px] rounded-[28px] border border-solid border-indigo-50 bg-white-A700 px-[19px] pb-[21px] pt-[19px] sm:pb-5">
                  <div className="flex gap-3 self-start">
                    <Button size="sm" shape="round" className="w-[35px] !rounded-[17px]">
                      <Img src="img_cursor.svg" width={35} height={35} />
                    </Button>
                    <Heading size="7xl" as="h1" className="tracking-[0.16px] !text-indigo-A400">
                      Compre tokens $BOOST
                    </Heading>
                  </div>
                  <div className="flex w-[83%] items-center md:w-full sm:flex-col">
                    <div className="w-[11%] rounded-[12px] bg-gray-100 px-[19px] pb-[25px] pt-[26px] sm:w-full sm:py-5">
                      <div className="h-px w-[14px] rotate-[-90deg] rounded-[1px] border border-solid border-blue_gray-300 bg-blue_gray-300" />
                    </div>
                    <div className="ml-[47px] flex flex-1 items-center sm:ml-0 sm:flex-col sm:self-stretch">
                      <div className="flex px-[5px] pb-px">
                        <Heading size="lg" as="h2" className="!font-lato !text-gray-900_04">
                          1
                        </Heading>
                      </div>
                      <div className="ml-[9px] h-[287px] w-[82%] bg-[url(/images/img_group_6.svg)] bg-cover bg-no-repeat pb-[31px] pl-[53px] pr-[41px] pt-14 md:h-auto md:px-5 md:pt-5 sm:ml-0 sm:w-full sm:p-5">
                        <div className="flex flex-col items-start gap-3.5">
                          <Img
                            src="img_logob_2.png"
                            width={190}
                            height={171}
                            alt="logobthree"
                            className="h-[171px] w-full object-cover md:h-auto"
                          />
                          <Text
                            as="p"
                            className="ml-[73px] !font-lato !text-[12.34px] tracking-[0.21px] !text-blue_gray-300 md:ml-0"
                          >
                            Boost
                          </Text>
                        </div>
                      </div>
                      <div className="ml-10 flex pl-px pt-px sm:ml-0">
                        <Heading size="lg" as="h3" className="!font-lato !font-bold !text-indigo-A400">
                          100
                        </Heading>
                      </div>
                    </div>
                    <Button size="lg" shape="square" className="ml-[22px] w-[53px] shadow-xs sm:ml-0">
                      <Img src="img_close.svg" width={53} height={53} />
                    </Button>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-5 md:flex-col">
                  <Button size="4xl" className="min-w-[280px] rounded-[22px] font-bold tracking-[0.16px] sm:px-5">
                    Stake FAN TOKENS
                  </Button>
                  <Input
                    size="sm"
                    variant="fill"
                    name="password"
                    placeholder={`xxxxxx`}
                    className="w-[53%] rounded-[15px] border border-solid border-light_blue-700 font-dmsans tracking-[-0.42px] md:w-full sm:pr-5"
                  />
                </div>
                <div className="mt-[49px] flex flex-col items-start">
                  <Text size="s" as="p" className="ml-2.5 !text-indigo-A700 md:ml-0">
                    Todas as transações
                  </Text>
                  <div className="relative z-[1] h-[3px] w-[16%] rounded-tl-[1px] rounded-tr-[1px] bg-indigo-A700" />
                  <div className="relative mt-[-1px] h-px w-full self-stretch bg-blue_gray-50" />
                </div>
              </div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="rounded-[20px] bg-white-A700"
                columns={tableColumns}
                data={tableData}
              />
            </div>
            <div className="flex w-[39%] flex-col items-end gap-5 md:w-full">
              <div className="mr-[31px] flex w-[81%] items-center gap-1 md:mr-0 md:w-full sm:flex-col">
                <Img
                  src="img_logob_2.png"
                  width={89}
                  height={80}
                  alt="logobtwo"
                  className="h-[80px] w-[24%] object-cover sm:w-full"
                />
                <div className="flex flex-1 gap-2.5 sm:self-stretch">
                  <Img src="img_search.svg" width={50} height={51} alt="search" className="h-[51px] w-[50px]" />
                  <Img src="img_group.svg" width={50} height={51} alt="image" className="h-[51px] w-[50px]" />
                  <div className="flex flex-1 items-center justify-center">
                    <Img src="img_play.svg" width={50} height={51} alt="play" className="h-[51px] w-[50px]" />
                    <Heading size="2xl" as="h4" className="ml-[5px] tracking-[0.69px] !text-gray-900_04">
                      mibz
                    </Heading>
                    <Img src="img_arrow_down.svg" width={14} height={9} alt="arrowdown" className="ml-10 h-[9px]" />
                  </div>
                </div>
              </div>
              <div className="h-[903px] self-stretch rounded-tl-[30px] bg-[url(/images/img_group_4.svg)] bg-cover bg-no-repeat pb-[13px] pl-[19px] pr-[15px] pt-[397px] md:h-auto md:pt-5">
                <div className="flex flex-col items-center">
                  <Link href="FAQs" target="_blank" rel="noreferrer" className="ml-2 self-start md:ml-0">
                    <Text size="5xl" as="p" className="!font-roboto !text-indigo-700">
                      FAQs
                    </Text>
                  </Link>
                  <Text size="md" as="p" className="w-full text-center !font-roboto leading-[150%] !text-indigo-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique.
                  </Text>
                  <div className="mt-[13px] flex w-[88%] flex-col gap-1.5 md:w-full">
                    <Input
                      shape="round"
                      color="undefined_undefined"
                      name="plus"
                      placeholder={`Question text goes here`}
                      suffix={
                        <Img src="img_plus.svg" width={32} height={32} alt="plus" className="h-[32px] w-[32px]" />
                      }
                      className="gap-[35px] font-roboto font-bold sm:px-5"
                    />
                    <Input
                      shape="round"
                      color="undefined_undefined"
                      name="plus_one"
                      placeholder={`Question text goes here`}
                      suffix={
                        <Img src="img_plus.svg" width={32} height={32} alt="plus" className="h-[32px] w-[32px]" />
                      }
                      className="gap-[35px] font-roboto font-bold sm:px-5"
                    />
                    <Input
                      shape="round"
                      color="undefined_undefined"
                      name="plus_two"
                      placeholder={`Question text goes here`}
                      suffix={
                        <Img src="img_plus.svg" width={32} height={32} alt="plus" className="h-[32px] w-[32px]" />
                      }
                      className="gap-[35px] font-roboto font-bold sm:px-5"
                    />
                    <Input
                      shape="round"
                      color="undefined_undefined"
                      name="plus_three"
                      placeholder={`Question text goes here`}
                      suffix={
                        <Img src="img_plus.svg" width={32} height={32} alt="plus" className="h-[32px] w-[32px]" />
                      }
                      className="gap-[35px] font-roboto font-bold sm:px-5"
                    />
                  </div>
                  <Heading size="xl" as="h5" className="mt-[7px] !font-roboto !text-indigo-700">
                    Ficou com dúvida?
                  </Heading>
                  <Text as="p" className="!font-roboto !text-indigo-400">
                    Fale conosco!
                  </Text>
                  <Input
                    size="xs"
                    shape="round"
                    color="undefined_undefined"
                    name="contactvalue"
                    placeholder={`Contact`}
                    className="mt-2 w-[23%] font-roboto font-bold sm:px-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
