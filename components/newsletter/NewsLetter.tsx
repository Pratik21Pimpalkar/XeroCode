import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
const NewsLetter = () => {
    return (
        <div className="bg-[#c6deff] w-full rounded-[1.875rem] p-[4rem] flex flex-col items-center justify-center mb-[16rem] ">
            <div className="w-[9rem] h-[9rem] relative">
                <Image alt="newsletter" fill src={'/assets/landing/newsletter.svg'} />
            </div>
            <div >
                <p className="text-[#242331] font-poppins-semibold capitalize font-semibold text-[44px]  text-center">Subscribe to Our Newsletter & get <br /> the Coupon code.</p>
                <p className="mt-7 text-[#242331] opacity-80 font-nunito-sans  font-normal text-[20px]  text-center">All your information is completely confidential</p>
            </div>
            <div className="grid grid-cols-3 w-[650px] gap-4 mt-16">
                <Input type="email" placeholder="Type your email" className="col-span-2 border-none bg-white rounded-[0.5rem] px-5 py-9 placeholder:text-slate-400 placeholder:text-xl " />
                <Button className="col-span-1 bg-[#0C5BC6] rounded-xl py-9 text-white text-[1.5rem]">Subscribe</Button>
            </div>
        </div>
    )
}

export default NewsLetter