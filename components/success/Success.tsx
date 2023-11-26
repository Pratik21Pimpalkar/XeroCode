"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import SuccessCard from "./SuccessCard";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import SuccessCardMobile from './SuccessCardMobile';

const Success = () => {
    return (
        <section className="my-36">
            <p className=" [font-family:'Poppins-SemiBold',Helvetica] font-semibold  md:text-[44px]  text-2xl tracking-[0] leading-[55px]  text-center text-[#242331]   ">
                See our success stories
            </p>
            <div className=" mt-24 hidden md:block">
                <Swiper className='sample-slider '
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]} >
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                    <SwiperSlide > <SuccessCard /></SwiperSlide>
                </Swiper>
            </div>
            <div className=" mt-24 md:hidden block">
                <Swiper className='sample-slider-2  '
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]} >
                    <SwiperSlide > <SuccessCardMobile /></SwiperSlide>
                    <SwiperSlide > <SuccessCardMobile /></SwiperSlide>
                    <SwiperSlide > <SuccessCardMobile /></SwiperSlide>
                    <SwiperSlide > <SuccessCardMobile /></SwiperSlide>
                </Swiper>
            </div>
        </section >
    );
};

export default Success;
