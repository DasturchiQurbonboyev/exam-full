import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaRegEye, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { toggleToWishes } from '../../context/wishlistSlice'
import { addToCart } from '../../context/cartSlice'
import { useGetProductQuery } from '../../context/productApi'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './ProductSwiper.css';
import { EffectCube, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = ({ homeTitle, homeType, buttonNext, allProductBtntop, allProductBtnbottom, productSize }) => {
    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value);

    const { data, isError, isLoading } = useGetProductQuery()

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    const [allProduct, setAllProduct] = useState(productSize)

    const dispatch = useDispatch()
    let products = data?.slice(0, allProduct)?.map((el) =>
        <div data-aos="fade-up" key={el.id} className='card w-[277px] border p-[14px]  bg-[#F5F5F5] rounded-lg     '>
            <div className='relative z-10'>

                {wishlist &&
                    <div className='absolute z-20 right-4 top-2 flex flex-col gap-2'>

                        <button onClick={() => dispatch(toggleToWishes(el))} className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                            {
                                wishlist.some(w => w?.id == el.id) ?
                                    <FcLike className="w-[26px] h-[26px]" /> :
                                    <FaRegHeart className=' size-6' />
                            }
                        </button>

                        <button className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                            <Link to={`/single/${el.id}`}><FaRegEye className=' size-6' /></Link>
                        </button>

                    </div>

                }

                <div >
                    <Link >
                        {/* to={`/single/${el.id}`} */}

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
                    </Link>
                </div>
                <div onClick={() => dispatch(addToCart(el))} className={`text-center relative   `}>
                    <button className='bg-black text-white w-full py-2'>Add To Cart
                    </button>
                    <div className={`${!cart.some(w => w?.id == el.id) && "hidden "} absolute  top-2 right-9`}>
                        <img className='w-7' src="https://pngicon.ru/file/uploads/zelenaja-galochka.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-[16px]'>{el.title}</h2>
                <span className='text-[red]'>${el.price}</span>
                <span className='ml-3 line-through text-[#666]  '>${el.oldPrice}</span>
            </div>
        </div >
    )


    return (
        <div className='kontainer'>
            <div className='pt-[60px]'>

                {homeType && <div data-aos="fade-up" className='flex items-center gap-2'>
                    <div className='w-[20px] rounded-md bg-red-500 h-10'></div>
                    <h1 className='text-red-500'>{homeType}</h1>
                </div>}

                <div data-aos="fade-up" className='flex justify-between items-center '>
                    <h2 className='text-[36px] font-[600]'>{homeTitle}</h2>
                    {
                        allProductBtntop &&
                        <button onClick={() => setAllProduct(data?.length)} className='bg-red-500 px-[48px] py-[16px] rounded-md  text-white  '>View All</button>

                    }
                    {
                        buttonNext &&
                        <div className='flex gap-3'>
                            <div className='w-[46px] h-[46px] bg-[#F5F5F5] flex justify-center items-center rounded-[50%]  '><FaArrowLeft /></div>
                            <div className='w-[46px] h-[46px] bg-[#F5F5F5] flex justify-center items-center rounded-[50%]  '><FaArrowRight /></div>
                        </div>
                    }



                </div>
                <div className="wrapper flex flex-wrap justify-center max-[911px]:justify-between    py-[50px] gap-[10px]   ">
                    {products}
                </div>
                {
                    allProductBtnbottom &&
                    <div data-aos="fade-up" className='text-center'><button onClick={() => setAllProduct(data?.length)} className='bg-red-500 px-[48px] py-[16px] rounded-md  text-white  '>View All Products </button></div>
                }

            </div>
        </div>
    )
}

export default Products