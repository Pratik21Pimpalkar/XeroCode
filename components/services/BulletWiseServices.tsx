import XeroCodeeWay from "./XeroCodeeWay"
import { xeroData } from "@/constants/constants"

const BulletWiseServices = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-5 mb-36">
                <p className="  font-poppins-semibold font-semibold text-transparent text-[44px] tracking-[0] leading-[55px] whitespace-nowrap text-center  ">
                    <span className="text-[#242331] flex gap-2 items-center"> The Xerocodee way </span>
                </p>
                <img src="/assets/landing/rocket.svg" alt="rocket" />
            </div>
            {
                xeroData.map((data, key) => < XeroCodeeWay key={key} id={data.id} title={data.title} desc={data.desc} data={data.data} />)
            }
        </>
    )
}

export default BulletWiseServices