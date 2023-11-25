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
        <div className="w-full mt-44">
            <div className="w-full ">
                <p className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-transparent text-[44px] tracking-[0] leading-[55px] whitespace-nowrap text-center ">
                    <span className="text-[#242331]">  Self serve infrastructure platform for <span className="text-[#0c5bc6] text-center">scaling <br />teams</span></span>
                </p>
                <p className="[font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#494369] text-[20px] text-center tracking-[0] leading-[36.0px] my-6">
                </p>
            </div>

            <div className=" grid grid-cols-2 justify-items-center gap-y-20 mt-24">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        <div className="w-[72px] h-[72px] p-3 shadow-xl rounded-xl shadow-gray-300 flex items-center justify-center">
                            <div className="relative w-[40px] h-[40px]">
                                <Image fill src={item.imageSrc} alt={item.title} />
                            </div>
                        </div>
                        <div>
                            <div className="w-[245.71px] h-[30px] mt-[-1.00px] font-semibold text-textbright-grey text-[24px] tracking-[0] leading-[38.4px] whitespace-nowrap">
                                {item.title}
                            </div>
                            <p className="font-normal text-[#5d587a] text-[16px] tracking-[0] leading-[28.8px] whitespace-nowrap">
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