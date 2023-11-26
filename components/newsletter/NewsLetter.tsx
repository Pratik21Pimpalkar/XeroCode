import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
const NewsLetter = () => {
    return (
        <div className="bg-[#c6deff] w-full md:rounded-[1.875rem] rounded-[1.2rem] md:p-[4rem] p-5 flex flex-col items-center justify-center md:mb-[16rem] mb-16">
            <div className="md:w-[9rem] md:h-[9rem] w-[3rem] h-[3rem] relative">
                <Image alt="newsletter" fill src={'/assets/landing/newsletter.svg'} />
            </div>
            <div >
                <p className="text-[#242331] md:text-md  font-poppins-semibold capitalize font-semibold md:text-[44px]  text-center">Subscribe to Our Newsletter & get <br /> the Coupon code.</p>
                <p className="md:mt-7 mt-3 text-[#242331] opacity-80 font-nunito-sans  font-normal md:text-[20px] text-xs  text-center">All your information is completely confidential</p>
            </div>
            <div className="grid grid-cols-4 md:gap-4 gap-2 md:mt-16 mt-5 w-full md:w-3/5">
                <Input type="email" placeholder="Type your email" className="col-span-3 border-none bg-white rounded-[0.5rem] md:px-5 md:py-9 px-1 py-2 placeholder:text-slate-400 md:placeholder:text-xl  placeholder:text-sm" />
                <Button className="col-span-1 bg-[#0C5BC6] md:rounded-xl rounded-[0.32rem] w-[4rem] md:w-auto  md:py-9 text-[0.8rem] py-[0.25rem] text-white md:text-[1.5rem]">Subscribe</Button>
            </div>
        </div>
    )
}

export default NewsLetter