import React, { useEffect } from 'react'
import hero from "../../assets/images/hero/hero.png"
import apple from "../../assets/images/hero/apple.png"
import show from "../../assets/images/hero/show.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css'
import './Hero.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <div className='kontainer'>
            <div className='pb-6 pt-[60px]     '>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div data-aos="fade-up" className='bg-black p-[18px] rounded-md  grid  min-[650px]:grid-cols-2 w-full '>
                            <div className='min-[400px]:pt-[40px] grid gap-5  min-[400px]:pl-[64px] pb-[47px]    '>
                                <div data-aos="zoom-in" className='flex items-center gap-[34px]'>
                                    <div>
                                        <img src={apple} alt="" />
                                    </div>
                                    <p className='text-white text-[16px] leading-[24px]  '>iPhone 14 Series</p>
                                </div>
                                <h1 data-aos="zoom-in" className='text-white text-[35px] lg:text-[48px] font-[600] text-start max-w-[290px] leading-[40px] lg:leading-[60px]   '>Up to 10% off Voucher</h1>
                                <div data-aos="zoom-in" className='flex pt-[2px] items-center gap-2'>
                                    <p className='text-white border-b-2 mb-2 font-[500] leading-[24px] text-[16px]    '>Shop Now</p>
                                    <div className='flex items-center'>
                                        <img src={show} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in" className='flex justify-center'>
                                <img className='w-full' src={hero} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div data-aos="zoom-in" className='mb-[40px] pt-[40px]   '>
                </div>
            </div>
        </div>
    )
}

export default Hero