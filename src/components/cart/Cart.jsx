import React, { useEffect } from 'react'
import { FaChevronDown, FaChevronUp, FaRegTrashAlt, FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { incCart, decCart, remuverFromCart, clearCart } from '../../context/cartSlice'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Cart = () => {
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    let sum = carts.reduce((acc, el) => {
        console.log(el);
        return acc + el.quantity * el.price
    }, 0)


    useEffect(() => {
        scrollTo(0, 0)
    }, [])


    let items = carts?.map((el) =>
        <div key={el.id} className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
            <div className='flex items-center gap-5 relative'>
                <img src={el.thumbnail} className='w-[100px]' alt="" />
                <p>{el.title}</p>
                <div onClick={() => dispatch(remuverFromCart(el))} className='absolute cursor-pointer bg-red-600 -top-[7px] left-[85px] h-6 w-6 flex justify-center items-center rounded-[50%]  '><IoMdClose className='text-white size-[20px]' /></div>
            </div>
            <p>$ {el.price} </p>
            <div className='flex items-center gap-3 w-[80px] justify-between  border p-2 rounded-md '>
                <p>{el.quantity}</p>
                <div>
                    <FaChevronUp onClick={() => dispatch(incCart(el))} className='cursor-pointer' />
                    <button disabled={el.quantity <= 1}>
                        <FaChevronDown onClick={() => dispatch(decCart(el))} className='cursor-pointer' />
                    </button>
                </div>
            </div>
            <p className='text-end'>$ {el.price * el.quantity} </p>
        </div>)
    return (

        <div className='pt-[120px]    '>
            <div className='kontainer grid gap-10'>
                <div className='text-end flex justify-end'>
                    <button onClick={() => dispatch(clearCart())} className=' flex items-center gap-3'><FaRegTrashAlt className='size-7' /> Clear All </button>
                </div>
                <div className='px-[40px] py-[24px] shadow-md grid grid-cols-4   items-center    '>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p className='text-end'>Subtotal</p>
                </div>

                {
                    items
                }

                <div className='flex justify-between'>
                    <button className='px-12 py-4 border rounded-md       ' >Return To Shop</button>
                    <button className='px-12 py-4 border rounded-md       ' >Update Cart</button>
                </div>
                <div className='flex justify-between mt-20 '>
                    <div className='flex gap-4 items-start'>
                        <input className='border w-[300px] rounded-md px-[24px] py-4 outline-none ' placeholder="Coupon Code" type="text" name="" id="" />
                        <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Apply Coupon</button>
                    </div>
                    <div className='border border-[#000] rounded-md px-6 py-8 w-[470px]   '>
                        <h5>Cart Total</h5>
                        <div className='flex justify-between items-center py-4 border-b-2'>
                            <p>Subtotal:</p>
                            <p>{carts.length}</p>
                        </div>
                        <div className='flex justify-between items-center py-4 border-b-2'>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <p>Total:</p>
                            <p>$ {sum}</p>
                        </div>
                        <div className='text-center'>
                            <Link className='text-[16px]' to={"/checkOut"}>
                                <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Procees to checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Cart