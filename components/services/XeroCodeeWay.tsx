"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from "next/image"

interface PropsArrayData {
    isTabs?: boolean,
    tablist?: string[],
    imageSrc: string,
    title: string,
    desc: string,
    rightImg?: boolean
}

interface Props {
    id: string,
    title: string,
    desc: string,
    data: PropsArrayData[]
}

const XeroCodeeWay = ({ id, title, desc, data }: Props) => {


    return (
        <section>
            <div>
                <div className="flex flex-col justify-center items-center  mb-16">
                    <p className=" font-poppins-semibold font-semibold text-transparent text-[36px] tracking-[0] leading-[55px] whitespace-nowrap text-center  ">
                        <span className="text-[#242331] flex gap-2 items-center"> {id} </span>
                    </p>
                    <img src="/assets/landing/line.svg" alt="rocket" />
                </div>

                <div className="flex flex-col justify-center items-center  mb-20">
                    <p className=" font-poppins-semibold font-semibold text-transparent text-[24px] tracking-[0] leading-[55px] whitespace-nowrap text-center  ">
                        <span className="text-[#242331] flex gap-2 items-center"> {title}</span>
                    </p>
                    <p className="font-nunito-sans font-normal text-[#494369] text-[16px] text-center tracking-[0] leading-[36.0px] ">
                        {desc}
                    </p>
                </div>

                {data.map((content) => content.isTabs ?
                    <Tabs defaultValue="apps0" className="w-full">
                        <TabsList className="grid  w-1/3 grid-cols-3  gap-2 ">
                            {content.tablist?.map((tab, index) => {
                                return (<TabsTrigger key={index} value={`${"apps" + index}`} className="tabslist">{tab}</TabsTrigger>)
                            })}
                        </TabsList>
                        <TabsContent value="apps0" className="border-none">
                            <Card className="border-none  shadow-none">
                                <CardContent className="space-y-2 grid grid-cols-2 place-items-center">
                                    <div className="`w-3/4 p-36  relative" >
                                        <Image fill alt="dashboard" src={content.imageSrc} className="object-contain" />
                                    </div>
                                    <div>
                                        <p className=" font-poppins-semibold font-semibold text-transparent text-[20px] tracking-[0] leading-[55px] whitespace-nowrap text-center  ">
                                            <span className="text-[#242331] flex gap-2 items-center">{content.title}</span>
                                        </p>
                                        <p className="font-nunito-sans font-normal text-[#494369] text-[16px]  tracking-[0] leading-[36.0px] ">
                                            {content.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs> :
                    <div className="space-y-2 grid grid-cols-2  place-items-center">
                        <div className={`w-[400px] p-36  relative ${!content.rightImg && "order-last"}`} >
                            <Image fill alt="dashboard" src={content.imageSrc} className="object-contain" />
                        </div>
                        <div>
                            <p className=" font-poppins-semibold font-semibold text-transparent text-[20px] tracking-[0] leading-[55px] whitespace-nowrap text-center  ">
                                <span className="text-[#242331] flex gap-2 items-center">{content.title}</span>
                            </p>
                            <p className="font-nunito-sans font-normal text-[#494369] text-[16px]  tracking-[0] leading-[36.0px] ">
                                {content.desc}
                            </p>
                        </div>
                    </div>
                )}


            </ div>
        </section >
    )
}

export default XeroCodeeWay