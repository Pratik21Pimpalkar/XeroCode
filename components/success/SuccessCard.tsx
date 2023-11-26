import Image from "next/image"

const SuccessCard = () => {
    return (
        <div className="flex justify-center">
            <div className="grid md:grid-cols-6 grid-cols-1 md:w-4/5">
                <div className="bg-[#0C5BC6] flex items-center justify-center w-full h-full rounded-l-[50px]  " >
                    <div className="w-[120px] h-[120px] relative">
                        <Image fill src={"/assets/landing/doublequotes.svg"} alt="avatar" />
                    </div>
                </div>
                <div className="col-span-4  p-[40px]">
                    <div className="my-2">
                        <p className="text-[#242331] text-[1.125rem] [font-family:'Nunito_Sans-Regular',Helvetica]">
                            There are many variations of passages of Lorem Ipsum available
                            but the majority have sufferg alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage.
                        </p>
                    </div>
                    <div className="flex flex-col  md:items-end">
                        <p className="text-[#242331] text-[1.125rem] font-medium">-Abcdefgh Ijklmnop</p>
                        <p> Frontend Engineer</p>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center md:order-none order-first">
                    <div className="rounded-full relative border-[10px] w-[120px] h-[120px] border-[#0C5BC6]">
                        <Image fill src={"/assets/landing/avatar.svg"} alt="avatar" />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SuccessCard