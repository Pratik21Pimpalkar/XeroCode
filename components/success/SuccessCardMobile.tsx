import Image from "next/image"

const SuccessCardMobile = () => {
    return (
        <div>
            <div className="col-span-1 flex items-center justify-center md:order-none order-first">
                <div className="rounded-full relative border-[10px] w-[120px] h-[120px] border-[#0C5BC6]">
                    <Image fill src={"/assets/landing/avatar.svg"} alt="avatar" />
                </div>
            </div>
            <div className="my-2">
                <p className="text-[#242331] md:text-[1.125rem] text-md font-nunito-sans text-center">
                    <span className="w-[25px] h-[25px] relative inline-block mr-2 ">
                        <Image fill src={"/assets/landing/quotes.svg"} alt="avatar" className="" />
                    </span>  There are many variations of passages of Lorem Ipsum available
                    but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
                </p>
            </div>

            <div className="font-nunito-sans mt-5 ">
                <p className="text-[#242331] text-[1.125rem] text-center font-semibold">-Abcdefgh Ijklmnop</p>
                <p className="text-center text-sm text-[#5E587A]"> Frontend Engineer</p>
            </div>
        </div>
    )
}

export default SuccessCardMobile