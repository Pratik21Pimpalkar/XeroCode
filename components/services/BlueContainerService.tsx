import Image from "next/image";

const BlueContainerService = (): JSX.Element => {
    return (
        <div className="w-full bg-[#0c5bc6] rounded-[35px] my-44 p-[8.8rem]">
            <p className=" font-semibold text-white text-[44px] text-center">
                Modernize Apps, Infrastructure With Cloud Native Tech For Resilience, Scalability.
            </p>
            <div className="mt-36">
                <div className="grid grid-cols-3  place-items-end">
                    <div className="w-full h-[400px] col-span-2 relative">
                        <Image
                            fill
                            className=""
                            alt="Cards screen"
                            src="/assets/landing/bluecard-1.svg"
                        />
                    </div>
                    <div className="flex flex-col  items-start justify-end gap-[30px] ">
                        <p className="font-semibold text-white  text-[44px]  ">
                            Real-time Risk Monitoring
                        </p>
                        <p className="text-[20px] text-white  leading-[36px] font-extralight font-nunito-sans  ">
                            Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain
                            ongoing compliance with more than 05+ different regulatory standards.
                        </p>
                    </div>

                </div>
                <div className="grid grid-cols-2  place-items-end my-24">
                    <div className="flex flex-col  items-start justify-end gap-[30px] ">
                        <p className="font-semibold text-white  text-[44px]  ">
                            Collaborative <br /> workflows
                        </p>
                        <p className="text-[20px] text-white  leading-[36px] font-extralight font-nunito-sans  ">
                            Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.
                        </p>
                    </div>
                    <div className="w-full h-[400px]  relative">
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