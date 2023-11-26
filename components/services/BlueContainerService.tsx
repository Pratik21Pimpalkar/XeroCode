import Image from "next/image";

const BlueContainerService = (): JSX.Element => {
    return (
        <div className="w-full bg-[#0c5bc6] md:rounded-[30px] rounded-[25px] md:my-44 my-10 md:p-[8.8rem] p-[2rem]">
            <p className=" font-semibold text-white md:text-[44px] text-2xl text-center leading-normal">
                Modernize Apps, Infrastructure With Cloud Native Tech For Resilience, Scalability.
            </p>
            <div className="md:mt-36 mt-20">
                <div className="grid md:grid-cols-3 grid-cols-1 place-items-end">
                    <div className="w-full md:h-[400px] h-[150px] md:col-span-2 relative">
                        <Image
                            fill
                            className="object-cover"
                            alt="Cards screen"
                            src="/assets/landing/bluecard-1.svg"
                        />
                    </div>
                    <div className="flex flex-col  items-start justify-end gap-[30px] ">
                        <p className="font-semibold text-white  md:text-[44px] text-xl leading-normal  ">
                            Real-time Risk Monitoring
                        </p>
                        <p className="md:text-[20px] text-white  md:leading-[36px]  font-extralight font-nunito-sans  ">
                            Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain
                            ongoing compliance with more than 05+ different regulatory standards.
                        </p>
                    </div>

                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 place-items-end md:my-24 my-5">
                    <div className="flex flex-col  items-start justify-end gap-[30px]   ">
                        <p className="font-semibold text-white  md:text-[44px] text-2xl leading-normal  ">
                            Collaborative <br /> workflows
                        </p>
                        <p className="md:text-[20px] text-white  md:leading-[36px] font-extralight font-nunito-sans  ">
                            Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.
                        </p>
                    </div>
                    <div className="w-full h-[400px] md:col-span-2  relative order-first md:order-none">
                        <Image
                            fill
                            className=""
                            alt="Cards screen"
                            src="/assets/landing/blue-card-2.svg"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlueContainerService