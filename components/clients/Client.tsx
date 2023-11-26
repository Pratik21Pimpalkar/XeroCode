import Image from "next/image";

const Client = (): JSX.Element => {
    return (
        <div className="w-full flex justify-center mt-24 ">
            <div className="flex flex-col w-full gap-10">
                <div className="flex w-full justify-evenly">
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client1.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client2.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client3.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client4.svg"} className="object-contain" alt='client' />
                    </div>
                </div>

                <div className="flex w-full justify-evenly">
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client1.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client2.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client3.svg"} className="object-contain" alt='client' />
                    </div>
                    <div className="md:w-[9.5rem] md:h-[3.5rem] w-[5rem] h-[0.9rem] relative">
                        <Image fill src={"/assets/landing/client4.svg"} className="object-contain" alt='client' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client