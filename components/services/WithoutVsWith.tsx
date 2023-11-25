import Image from "next/image"

const WithoutVsWith = () => {
    return (
        <section className="grid w-full grid-cols-2 mt-28 ">
            <div>
                <div className=" [font-family:'Nunito-Bold',Helvetica] font-bold text-[#242331] text-[28px] text-center tracking-[0] leading-[30.8px]">
                    Without Xerocodee
                </div>
                <div className="w-full relative h-[400px] mt-24">
                    <Image alt='without' fill src={"/assets/landing/without.png"} className="object-contain" />
                </div>
            </div>
            <div>
                <div className=" [font-family:'Nunito-Bold',Helvetica] font-bold text-[#242331] text-[28px] text-center tracking-[0] leading-[30.8px]">
                    Xerocodee
                </div>
                <div className="w-full relative h-[400px] mt-24">
                    <Image alt='without' fill src={"/assets/landing/with.png"} className="object-contain" />
                </div>
            </div>
        </section>

    )
}

export default WithoutVsWith