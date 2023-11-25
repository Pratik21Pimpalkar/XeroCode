"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import SuccessCard from "./SuccessCard";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Success = () => {
    return (
        <section className="my-36">
            <p className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold  text-[44px] tracking-[0] leading-[55px]  text-center text-[#242331]   ">
                See our success stories
            </p>
            <div className=" mt-24">
                <Swiper className='sample-slider'
                    pagination={{
                        dynamicBullets: true,
                    }}
                    style={{ "--swiper-pagination-bullet-size": "14px" }}
                    navigation={true}
                    modules={[Pagination, Navigation]} >
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>

                </Swiper>
            </div>
        </section >
    );
};

export default Success;
