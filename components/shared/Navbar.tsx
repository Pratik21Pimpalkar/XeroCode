import Image from "next/image";

const Navbar = (): JSX.Element => {
    return (
        <nav className="flex justify-center mt-[10px] w-full">
            <div className="flex items-center gap-[33px] py-[20px] px-[115px] w-full bg-white rounded-[10px] overflow-hidden border border-solid border-[#e5e5e580] shadow-md">
                <div className="flex  mr-auto ">
                    <Image width="164" height="40" alt="Logo" src="/assets/landing/logo.svg" />
                </div>
                <div className=" gap-[33px] flex items-center mr-auto">
                    <div className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#242331] text-[18px] tracking-[0] leading-[32.4px] whitespace-nowrap">
                        Home
                    </div>
                    <div className="relative  [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#242331] text-[18px] tracking-[0] leading-[32.4px] whitespace-nowrap">
                        Team
                    </div>
                    <div className=" [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#242331] text-[18px] tracking-[0] leading-[32.4px] whitespace-nowrap">
                        Contact
                    </div>
                    <div className=" [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#242331] text-[18px] tracking-[0] leading-[32.4px] whitespace-nowrap">
                        Careers
                    </div>
                </div>
                <div className=" gap-[264px] flex items-center ">
                    <div className="flex-col w-[113.3px] justify-end rounded-[5px] border-2 border-solid border-[#0c5bc6] flex items-center ">
                        <button className="relative w-[113.3px] h-[39.23px] mt-[-2.00px] [font-family:'Nunito-Medium',Helvetica] font-medium text-[#0c5bc6] text-[18px] text-center tracking-[0] leading-[27px]">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar