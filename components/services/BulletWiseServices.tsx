import XeroCodeeWay from "./XeroCodeeWay"
import { xeroData } from "@/constants/constants"

const BulletWiseServices = () => {
    return (
        <div className="border-[2px] rounded-2xl md:p-20 p-5 border-gray-300">
            <div className="flex justify-center items-center md:gap-5 md:mb-28 mb-5 ">
                <p className="  font-poppins-semibold font-semibold text-transparent md:text-[44px] text-xl tracking-[0] leading-[55px]  text-center  ">
                    <span className="text-[#242331] flex gap-2 items-center"> The Xerocodee way </span>
                </p>
                <img src="/assets/landing/rocket.svg" className="w-7 h-7" alt="rocket" />
            </div>
            {
                xeroData.map((data, index) => < XeroCodeeWay key={data.id} id={data.id} title={data.title} desc={data.desc} data={data.data} />)
            }
        </div>
    )
}

export default BulletWiseServices