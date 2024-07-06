import React, { useEffect, useState } from 'react'
import editblack from '../../../assets/admin/editblack.png'
// import product from '../../../assets/hero/product.png'
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri'
import './ManageProductPage.css'
import { useGetProductQuery } from '../../../context/productApi'
import { SwiperSlide, Swiper } from 'swiper/react'


import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';


let initialState = {
    category: "",
    description: "",
    id: "",
    price: "",
    title: ""
}

const ManageProductPage = () => {

    const [edit, setEdit] = useState(null)
    const { data, isLoading, isError } = useGetProductQuery();

    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState(edit)
    }, [])



    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <div className=' '>
            <h2 className='text-[#454545] text-[28px] font-[500]'>
                Manage product
            </h2>

            <div className='mt-[43px] flex flex-wrap gap-5'>
                {
                    data?.map((el, inx) => (
                        <div key={inx} className='max-w-[240px] border px-[16px] py-[28px]'>
                            <div className='product__img__cart'>
                                <Swiper
                                    effect={'cube'}
                                    grabCursor={false}
                                    cubeEffect={{
                                        shadow: false,
                                        slideShadows: false,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    pagination={false}
                                    modules={[EffectCube, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className='swiperImg' src={el.image[0]} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='swiperImg' src={el.image[1]} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='swiperImg' src={el.image[2]} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='swiperImg' src={el.image[3]} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <h5 className='mb-[10px] text-[#454545] text-[20px] leading-[22px] font-[500] line-clamp-1    '>{el.title}</h5>
                            <div className='flex gap-10 justify-between items-end'>
                                <div>
                                    <p>
                                        <del className='text-[#9F9F9F] text-[12px]'>
                                            {el.price + 50}₽
                                        </del>
                                    </p>
                                    <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
                                        {el.price}₽
                                    </p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <div onClick={() => setEdit(el)} className='cursor-pointer border px-[16px] py-[6px] w-[50px] rounded-[100px]   '>
                                        <img src={editblack} alt="" />
                                    </div>
                                    <div className='bg-[#454545] cursor-pointer w-[50px] flex justify-center items-center  px-[16px] py-[2px] rounded-[100px]   '>
                                        <RiDeleteBin6Line size={30} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                edit ?
                    <div className='edit'>
                        <div onSubmit={handleSubmit} className='edit__module  '>
                            <div className='flex justify-end'>
                                <RiCloseLine onClick={() => setEdit(null)} className='cursor-pointer' size={25} />
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor="title">Product Name:</label><br />
                                <input value={state?.title} onChange={e => setState(prev => ({ ...prev, title: e.target.value }))} className='border mt-1 w-full px-3  py-1 rounded-[8px] outline-none  ' type="text" id='title' />
                            </div>

                            <button type='submit' className='border px-[15px] py-[4px]  mt-[25px] rounded-[10px] bg-[#0006] text-white  '>Save</button>
                        </div>
                    </div> :
                    <></>
            }
        </div>
    )
}

export default ManageProductPage