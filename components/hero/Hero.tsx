import Image from "next/image";

const Hero = (): JSX.Element => {
    return (
        <section className="w-full ">
            <div className="flex flex-col mt-[100px] items-center w-full">
                <p className="font-poppins-semibold font-bold text-[#242331] text-[56px] text-center tracking-[0] leading-[70px]">
                    Build your audience and grow your
                </p>
                <p className="font-poppins-semibold font-bold text-[#242331] text-[56px] text-center tracking-[0] leading-[70px]">
                    brand
                </p>
            </div>
            <div className="flex flex-col items-center my-10  ">
                <p className=" self-stretch mt-[-1.00px] font-nunito-sans font-normal text-[#797979] text-[24px] text-center tracking-[0] leading-[43.2px]">
                    no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your
                </p>
                <p className=" self-stretch mt-[-1.00px] font-nunito-sans font-normal text-[#797979] text-[24px] text-center tracking-[0] leading-[43.2px]">
                    workload grows.
                </p>
            </div>
            <div className="flex flex-col  items-center  ">
                <div className="flex flex-col w-[251px] items-center   flex-[0_0_auto] bg-[#0c5bc6] rounded-[5px] border-2 border-solid">
                    <button className=" w-[251px] h-[51.15px] mt-[-2.00px] [font-family:'Nunito-Bold',Helvetica] font-bold text-white text-[20px] text-center tracking-[0] leading-[30px]">
                        Get Started Now
                    </button>
                </div>
            </div>
            <div className="flex justify-center w-full relative  h-[600px]">
                <Image fill className="" alt="hero" src="/assets/landing/hero.png" />
            </div>
        </section>
    );
};


export default Hero
