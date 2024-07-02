import React, { useEffect } from 'react'
import arrival1 from '../../assets/images/hero/arrival1.png'
import arrival2 from '../../assets/images/hero/arrival2.png'
import arrival3 from '../../assets/images/hero/arrival3.png'
import arrival4 from '../../assets/images/hero/arrival4.png'
import './Arrival.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Arrival = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className='kontainer'>
            <div className='flex items-center gap-2 pt-[100px]'>
                <div className='w-[20px] bg-red-500 h-10 rounded-md'></div>
                <p className='text-[#DB4444]'>Featured</p>
            </div>
            <p className='text-[36px] font-[600] leading-[48px] mt-5    '>New Arrival</p>
            <div className='grid min-[990px]:grid-cols-2 gap-[30px] pt-[60px]'>

                <div data-aos="fade-up" className='arrival__box'>
                    <div className='bg-black h-full flex justify-center items-center'>
                        <img className='' src={arrival1} alt="" />
                    </div>
                    <div className='arrival__content p-[20px] min-[400px]:p-[50px] text-white'>
                        <div className='grid gap-2'>
                            <p className='text-[24px] font-[600] leading-[24px]    '>PlayStation 5</p>
                            <p className='max-w-[240px] text-[14px] leading-[24px]    '>Black and White version of the PS5 coming out on sale.</p>
                            <div className='flex '>
                                <p className='border-b-2 cursor-pointer text-[16px] font-[500]  leading-[24px]      '>Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-[30px]'>
                    <div data-aos="fade-up" className='arrival__box '>
                        <div className='bg-[#0e0d0d] h-full flex items-center justify-end'>
                            <img className='' src={arrival2} alt="" />
                        </div>
                        <div className='arrival__content p-[30px] text-white'>
                            <div className='grid gap-2'>
                                <p className='text-[24px] font-[600] leading-[24px]    '>Women’s Collections</p>
                                <p className='max-w-[240px] text-[14px] leading-[24px]    '>Featured woman collections that give you another vibe.</p>
                                <div className='flex '>
                                    <p className='border-b-2 cursor-pointer text-[16px] font-[500]  leading-[24px]      '>Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid min-[520px]:grid-cols-2 gap-[30px]'>
                        <div data-aos="fade-up" className='arrival__box '>
                            <div className='h-full bg-black flex justify-center items-center'>
                                <img src={arrival3} alt="" />
                            </div>
                            <div className='arrival__content p-[20px] text-white'>
                                <div className='grid gap-2'>
                                    <p className='text-[24px] font-[600] leading-[24px]    '>PlayStation 5</p>
                                    <p className='max-w-[240px] text-[14px] leading-[24px]    '>Black and White version of the PS5 coming out on sale.</p>
                                    <div className='flex '>
                                        <p className='border-b-2 cursor-pointer text-[16px] font-[500]  leading-[24px]      '>Shop Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='arrival__box'>
                            <div className='h-full bg-black flex justify-center items-center'>
                                <img src={arrival4} alt="" />
                            </div>
                            <div className='arrival__content p-[20px] text-white'>
                                <div className='grid gap-2'>
                                    <p className='text-[24px] font-[600] leading-[24px]    '>PlayStation 5</p>
                                    <p className='max-w-[240px] text-[14px] leading-[24px]    '>Black and White version of the PS5 coming out on sale.</p>
                                    <div className='flex '>
                                        <p className='border-b-2 cursor-pointer text-[16px] font-[500]  leading-[24px]      '>Shop Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrival