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
                <div className="flex flex-col justify-center items-center  md:mb-16 my-10">
                    <p className=" font-poppins-semibold font-semibold text-transparent md:text-[36px] text-xl tracking-[0] md:leading-[55px]  text-center  ">
                        <span className="text-[#242331] flex gap-2 items-center"> {id} </span>
                    </p>
                    <img src="/assets/landing/line.svg" alt="line" className="w-13 md:w-fit" />
                </div>

                <div className="flex flex-col justify-center items-center  md:mb-20 mb-5">
                    <p className=" font-poppins-semibold font-semibold text-transparent md:text-[24px] 
                    text-lg tracking-[0] md:leading-[55px]  text-center  ">
                        <span className="text-[#242331] flex gap-2 items-center"> {title}</span>
                    </p>
                    <p className="font-nunito-sans font-normal text-[#494369] md:text-[16px] text-sm text-center tracking-[0] leading-[36.0px] ">
                        {desc}
                    </p>
                </div>

                {data.map((content, index) => content.isTabs ?
                    <Tabs defaultValue="apps0" className="w-full" key={index}>
                        <TabsList className="grid  md:w-1/3 md:grid-cols-3 grid-cols-2 h-auto  gap-2 ">
                            {content.tablist?.map((tab, index) => {
                                return (<TabsTrigger key={index} value={`${"apps" + index}`} className="tabslist">{tab}</TabsTrigger>)
                            })}
                        </TabsList>
                        <TabsContent value="apps0" className="border-none">
                            <Card className="border-none  shadow-none">
                                <CardContent className="space-y-2 grid lg:grid-cols-2 grid-cols-1 place-items-center">
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
                    <div className="space-y-[5rem] grid md:grid-cols-2  grid-cols-1 place-items-center justify-items-center" key={index}>
                        <div className={`w-full h-[120px] p-5  relative ${!content.rightImg && "md:order-last "} order-first`} >
                            <Image fill alt="dashboard" src={content.imageSrc} className="object-contain" />
                        </div>
                        <div>
                            <p className=" font-poppins-semibold font-semibold text-transparent text-[20px] tracking-[0] md:leading-[55px]  text-center  ">
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