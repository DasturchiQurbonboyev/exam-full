import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight, FaRegEye, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishes } from '../../context/wishlistSlice'
import { FcLike } from 'react-icons/fc'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { toggleSingle } from '../../context/singleSlice'
import { addToCart } from '../../context/cartSlice'

import AOS from 'aos';
import 'aos/dist/aos.css';



const Products = ({ data, str, month, all, hoverBtn, wishlistTitle }) => {
    const wishes = useSelector(state => state.wishlist.value)

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    const dispatch = useDispatch()
    let products = data?.slice(0, all)?.map((el) => <div data-aos="fade-up" key={el?.id} className='card w-[277px] border p-[14px]      '>
        <div className='relative z-10'>
            {wishlistTitle ? <div className='absolute right-4 top-2 flex flex-col gap-2'>
                <button onClick={() => dispatch(toggleWishes(el))} className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                    {
                        wishes.some(w => w?.id == el.id) ?
                            <FcLike onClick={() => toast.error("Wishlistdan o'chirildi")} className="size-6" /> :
                            <FaRegHeart onClick={() => toast.success("Wishlistga qo'shildi")} className=' size-6' />
                    }
                </button>
                <button onClick={() => dispatch(toggleSingle(el))} className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px]    '>
                    <Link to={"/single"}><FaRegEye className=' size-6' /></Link>

                </button>
            </div> :
                <div className='absolute right-4 top-2 flex flex-col gap-2'>
                    <button onClick={() => dispatch(toggleWishes(el))} className='bg-white flex justify-center items-center rounded-[50%] h-[30px] w-[30px] '>
                        <RiDeleteBin5Line onClick={() => toast.error("Wishlistdan o'chirildi")} className="size-6" />
                    </button>
                </div>}
            <div onClick={() => dispatch(toggleSingle(el))}>
                <Link to={"/single"}>
                    <img className='w-full h-[220px] object-cover   ' src={el?.thumbnail} alt="" />
                </Link>
            </div>
            <div className={`text-center  `}>
                <button onClick={() => {
                    dispatch(addToCart(el)),
                        toast.success("Maxsulot Cartga qo'shildi")
                }} className='bg-black text-white w-full py-2'>Add To Cart</button>
            </div>
        </div>
        <div>
            <h2 className='text-[16px]'>{el?.title}</h2>
            <span className='text-[red]'>${el?.price}</span>
            <span className='ml-3 line-through text-[#666]  '>${el?.price + 1}</span>
        </div>
    </div>)


    return (
        <div className='kontainer'>
            <div className='pt-[60px]'>
                {wishlistTitle ?
                    <div data-aos="fade-up" className='flex items-center gap-2'>
                        <div className='w-[20px] rounded-md bg-red-500 h-10'></div>
                        <h1 className='text-red-500'>{month}</h1>
                    </div> : <></>}
                <div data-aos="fade-up" className='flex justify-between items-center '>
                    <h2 className='text-[36px] font-[600]'>{str}</h2>
                    {
                        !hoverBtn
                            ?
                            <button className='bg-red-500 px-[48px] py-[16px] rounded-md  text-white  '>View All</button>
                            :
                            <div className='flex gap-3'>
                                <div className='w-[46px] h-[46px] bg-[#F5F5F5] flex justify-center items-center rounded-[50%]  '><FaArrowLeft /></div>
                                <div className='w-[46px] h-[46px] bg-[#F5F5F5] flex justify-center items-center rounded-[50%]  '><FaArrowRight /></div>
                            </div>
                    }

                </div>
                <div className="wrapper flex justify-between flex-wrap py-[50px] gap-[10px]   ">
                    {products}
                </div>
                {hoverBtn
                    ?
                    <div data-aos="fade-up" className='text-center'><button className='bg-red-500 px-[48px] py-[16px] rounded-md  text-white  '>View All Products </button></div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Products