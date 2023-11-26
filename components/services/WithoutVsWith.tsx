import Image from "next/image"

const WithoutVsWith = () => {
    return (
        <section className="grid w-full md:grid-cols-2 grid-cols-1 md:mt-28 mt-10 ">
            <div>
                <div className=" font-nunito-sans font-bold text-[#242331] md:text-[28px] text-lg text-center tracking-[0] leading-[30.8px]">
                    Without Xerocodee
                </div>
                <div className="w-full relative h-[400px] md:mt-24 mt-5">
                    <Image alt='without' fill src={"/assets/landing/without.png"} className="object-contain" />
                </div>
            </div>
            <div>
                <div className=" font-nunito-sans font-bold text-[#242331] md:text-[28px] text-lg text-center tracking-[0] leading-[30.8px]">
                    Xerocodee
                </div>
                <div className="w-full relative h-[400px] md:mt-24 mt-2">
                    <Image alt='without' fill src={"/assets/landing/with.svg"} className="object-contain" />
                </div>
            </div>
        </section>

    )
}

export default WithoutVsWith