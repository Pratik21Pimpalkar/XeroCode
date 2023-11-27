import Image from "next/image"


const data = [
    {
        title: 'Infrastructure',
        description: 'Automated Cloud Infrastructure Workflow',
        imageSrc: '/assets/landing/infra.svg',
    },
    {
        title: 'Security',
        description: 'Modern Secure Infrastructure Approach',
        imageSrc: '/assets/landing/security.svg',
    },
    {
        title: 'Networking',
        description: 'Flexible Secure Application Connectivity',
        imageSrc: '/assets/landing/networking.svg',
    },
    {
        title: 'Applications',
        description: 'Automate Application Deployment for Agility',
        imageSrc: '/assets/landing/application.svg',
    },
];

const SelfServices = () => {
    return (
        <div className="w-full md:mt-44 mt-10">
            <div className="w-full ">
                <p className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-transparent md:text-[44px] text-xl tracking-[0] md:leading-[55px]  text-center ">
                    <span className="text-[#242331]">  Self serve infrastructure platform for <span className="text-[#0c5bc6] text-center">scaling teams</span></span>
                </p>
            </div>

            <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-center md:gap-y-20 gap-y-10 md:mt-24 mt-10">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        <div className="w-[72px] h-[72px] p-3 shadow-xl rounded-xl shadow-gray-300 flex items-center justify-center">
                            <div className="relative w-[40px] h-[40px]">
                                <Image fill src={item.imageSrc} alt={item.title} />
                            </div>
                        </div>
                        <div>
                            <div className="w-[245.71px] h-[30px] mt-[-1.00px] font-semibold text-textbright-grey md:text-[24px] text-md tracking-[0] leading-[38.4px] ">
                                {item.title}
                            </div>
                            <p className="font-normal text-[#5d587a] md:text-[16px] text-sm tracking-[0] leading-[28.8px] ">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelfServices