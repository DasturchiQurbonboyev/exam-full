import React, { useEffect } from 'react'
import img from "../../assets/images/hero/Frame694.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Music = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div data-aos="fade-up" className='kontainer rounded-md bg-black items-center grid grid-cols-2'>
            <div className='flex flex-col justify-center gap-10 pt-10 pl-10 pb-10'>
                <p data-aos="fade-up" className='text-[#00FF66]    '>Categories</p>
                <h2 data-aos="fade-up" className=' text-[#FAFAFA] text-[48px] font-[600]   '  >Enhance Your Music Experience</h2>
                <div className='flex gap-[24px]'>
                    <div data-aos="fade-up" className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5 className='font-[700] leading-[20px]'>25</h5>
                        <p>Hours</p>
                    </div>
                    <div data-aos="fade-up" className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5 className='font-[700] leading-[20px]'>25</h5>
                        <p>Hours</p>
                    </div>
                    <div data-aos="fade-up" className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5 className='font-[700] leading-[20px]'>25</h5>
                        <p>Hours</p>
                    </div>
                    <div data-aos="fade-up" className='w-[62px] h-[62px] bg-white flex flex-col items-center rounded-[50%] justify-center    '>
                        <h5 className='font-[700] leading-[20px]'>25</h5>
                        <p>Hours</p>
                    </div>
                </div>
                <div>
                    <button data-aos="fade-up" className='bg-[#00FF66] px-12 py-4 rounded-md    '>Buy Now!</button>
                </div>
            </div>
            <div data-aos="fade-up">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Music