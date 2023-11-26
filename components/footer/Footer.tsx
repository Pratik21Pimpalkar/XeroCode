import Image from "next/image";
import { Separator } from "../ui/separator";

const Footer = () => {
    return (
        <footer className="bg-[#C6DEFF1A] p-2">
            <div className=" flex  flex-col items-center justify-center ">
                <div className="grid  grid-cols-1 md:grid-cols-4 w-4/5 place-content-center mt-10">
                    <div className="md:p-3 font-nunito-sans text-left text-[#494369]  ">
                        <img src="/assets/landing/logo.svg" className="mb-10" />
                        <p>You get just what you need to run your cloud
                            workloads--no more, no less.
                            Deploy from our single pane of glass,
                            manage them with ease and scale
                            up as fast as your workload grows</p>
                        <div className="space-x-2 mt-10">
                            <div className=" relative inline-block bg-[#C6DEFF] cursor-pointer hover:-translate-y-1 transition-transform rounded-full  p-[0.65rem]">
                                <Image width={32} height={32} src={"/assets/landing/github.svg"} alt="github" className="p-0 w-8 h-8" />
                            </div>
                            <div className=" relative inline-block bg-[#e1ebfa] cursor-pointer hover:-translate-y-1 transition-transform rounded-full  p-[0.65rem]">
                                <Image width={32} height={32} src={"/assets/landing/linkedin.svg"} alt="github" className="p-0 w-8 h-8" />
                            </div>
                            <div className=" relative inline-block bg-[#EDF4FF] cursor-pointer hover:-translate-y-1 transition-transform rounded-full  p-[0.65rem]">
                                <Image width={32} height={32} src={"/assets/landing/mail.svg"} alt="github" className="p-0 w-8 h-8" />
                            </div>
                            <Separator className="my-4 bg-gray-400 md:hidden block" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2">
                        <div className="md:p-4">
                            <p className="text-2xl font-semibold leading-160 font-poppins-semibold capitalize text-[#332C5C]">Our links</p>
                            <div className="space-y-4 mt-6">
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Home</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">About Us</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Integration</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Team</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Blog</p>
                            </div>
                        </div>
                        <div className="md:p-4 text-right md:text-left">
                            <p className="text-2xl font-semibold leading-160 font-poppins-semibold capitalize text-[#332C5C] ">Other links</p>
                            <div className="space-y-4 mt-6">
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">FAQ</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Careers</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Privacy Ploicy</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Trems & Condition</p>
                                <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Support</p>
                            </div>
                        </div>

                    </div>
                    <div className="md:p-4 col-span-2 md:col-span-1 mt-10 md:mt-0  text-center md:text-left">
                        <p className="text-2xl font-semibold leading-160 font-poppins-semibold capitalize text-[#332C5C] ">Our Services</p>
                        <div className="space-y-4 mt-6">
                            <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Infrastructure provisioning</p>
                            <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Network infrastructure automation</p>
                            <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Cost optimization</p>
                            <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">Cloud migration</p>
                            <p className="text-#494369  font-nunito-sans text-base font-normal cursor-pointer leading-180">    Kubernetes at scale</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-[#5E587A] font-nunito-sans text-xs font-normal leading-8 mt-5 md:p-6 p-2 w-4/5">
                    <p>Terms & Condition  |   Privacy Policy </p>
                    <p>Copyright © 2023 <strong>EXOCODE TECHNOLOGIES</strong>  | All rights reserved </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
