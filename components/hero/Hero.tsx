import Image from "next/image";

const Hero = (): JSX.Element => {
    return (
        <section className="w-full ">
            <div className="flex flex-col md:mt-[100px] mt-[3rem] items-center w-full">
                <p className="font-poppins-semibold font-bold text-[#242331] md:text-[56px] text-[27px] text-center tracking-[0] md:leading-[70px]">
                    Build your audience and grow your <br className="hidden lg:block" /> brand
                </p>
            </div>
            <div className="flex flex-col items-center md:my-10 my-5  ">
                <p className=" self-stretch mt-[-1.00px] font-nunito-sans font-normal text-[#797979] md:text-[24px] text-[20px] text-justify md:text-center tracking-[0] md:leading-[43.2px]">
                    no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as <br className="hidden lg:block" /> your  workload grows.
                </p>
            </div>
            <div className="flex flex-col items-center  ">
                <button className=" px-4 md:py-2 py-1 bg-[#0c5bc6]  font-nunito-sans font-bold text-white md:text-[20px] text-sm text-center tracking-[0] leading-[30px] rounded-[5px] border-2 border-solid">
                    Get Started Now
                </button>
            </div>

            <div className="md:flex justify-center w-full relative h-[36rem] hidden  ">
                <Image fill className="object-contain" alt="hero" src="/assets/landing/heroDesktop.svg" />
            </div>
            <div className="flex justify-center w-full relative h-[12rem] mt-10  md:hidden  ">
                <Image fill className="object-cover" alt="hero" src="/assets/landing/heroDesktop.svg" />
            </div>
        </section>
    );
};


export default Hero
