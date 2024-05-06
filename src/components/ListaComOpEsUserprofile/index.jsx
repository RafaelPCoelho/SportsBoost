import React from "react";
import { Button, Img, Heading } from "./..";

export default function ListaComOpEsUserprofile({
  dynamictext = "Escolha 1 esporte",
  dynamictext1 = "Tiro com arco",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full flex-col gap-[3px]">
        <div className="flex pt-2">
          <Heading size="2xl" as="h6" className="tracking-[0.77px] !text-gray-900_04">
            {dynamictext}
          </Heading>
        </div>
        <div className="relative h-[50px] md:h-auto">
          <div className="flex w-[95%] items-start justify-between gap-5">
            <Heading size="xl" as="h6" className="!font-roboto !text-light_blue-400">
              {dynamictext1}
            </Heading>
            <Button size="sm" className="w-[36px] rotate-[-180deg] rounded-[10px]">
              <Img src="img_arrow_down_gray_900_04.svg" width={36} height={36} />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[50px] w-full rounded-[15px] bg-light_blue-400_19" />
        </div>
      </div>
    </div>
  );
}
