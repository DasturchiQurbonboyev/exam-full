import React, { useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import emptyCart from '../../assets/images/empty/empty-cart.webp';
import { incCart, decCart, clearCart, removeFromCart } from '../../context/cartSlice';
import { useGetProductQuery } from '../../context/productApi';
import { toast } from 'react-toastify';

const Cart = () => {
    const cart = useSelector(state => state.cart.value);
    const { data, isLoading } = useGetProductQuery();
    const dispatch = useDispatch();
    let sum = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    const handleClearCart = () => {
        const userConfirmed = window.confirm('Siz haqiqatdan ham bu harakatni bajarishni xohlaysizmi?');
        if (userConfirmed) {
            dispatch(clearCart());
            toast.error("Savatcha tozalandi");
        }
    };

    const handleRemoveCart = (el) => {
        const userConfirmed = window.confirm('Siz haqiqatdan ham bu harakatni bajarishni xohlaysizmi?');
        if (userConfirmed) {
            dispatch(removeFromCart(el));
            toast.error("Mahsulot savatchadan o'chirildi");
        }
    };

    const handleQuantityIncrease = (el) => {
        dispatch(incCart(el));
    };

    const handleQuantityDecrease = (el) => {
        dispatch(decCart(el));
    };

    const carts = localStorage.getItem("carts");
    let items;

    if (carts) {
        const cartsArray = JSON.parse(carts);
        items = cartsArray.map((el) =>
            <div key={el.id} className='px-[40px] py-[24px] shadow-md grid min-[450px]:grid-cols-2 min-[530px]:grid-cols-3 min-[850px]:grid-cols-4 items-baseline min-[850px]:items-center'>
                <div className='grid max-[450px]:justify-center justify-start gap-5'>
                    <div className='flex juc justify-center relative'>
                        <Link to={`/single/${el.id}`}>
                            <img src={el.image[0]} className='w-[80px] object-cover' alt="" />
                        </Link>
                        <div onClick={() => handleRemoveCart(el)} className='absolute cursor-pointer bg-red-600 -right-2 -top-4 h-6 w-6 flex justify-center items-center rounded-[50%]'>
                            <IoMdClose className='text-white size-[20px]' />
                        </div>
                    </div>
                    <p>{el.title}</p>
                </div>
                <p className='text-center'>$ {el.price}</p>
                <div className='flex max-[530px]:pt-[15px] max-[450px]:justify-center max-[530px]:justify-start justify-center'>
                    <div className='flex items-center gap-3 w-[80px] min-[530px]:pt-[15px] justify-between border p-2 rounded-md'>
                        <p>{el.quantity}</p>
                        <div>
                            <FaChevronUp onClick={() => handleQuantityIncrease(el)} className='cursor-pointer' />
                            <button disabled={el.quantity <= 1} onClick={() => handleQuantityDecrease(el)}>
                                <FaChevronDown className='cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>
                <p className='max-[530px]:text-center max-[850px]:pt-[15px] font-[700] min-[850px]:text-end'>$ {el.price * el.quantity}</p>
            </div>
        );
    } else {
        items = <p>No items in the cart.</p>;
    }

    if (cart.length === 0) {
        return (
            <div>
                <div className='flex justify-center items-center'>
                    <img src={emptyCart} alt="" />
                </div>
                <div className='flex justify-center'>
                    <Link to="/" className='text-[17px] font-[500] bg-[#ee7d7d] text-white px-[18px] py-3 rounded-lg transform transition-transform hover:scale-105 duration-200 active:scale-95'>
                        ← Bosh sahifaga qaytish
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='pt-[60px]'>
            <div className='kontainer grid gap-5'>
                <div className='text-end flex justify-end'>
                    <button onClick={handleClearCart} className='flex items-center gap-3'><FaRegTrashAlt className='size-7' /> Clear All</button>
                </div>
                <div className='max-[850px]:hidden px-[40px] py-[24px] shadow-md grid grid-cols-4 items-center'>
                    <p>Product</p>
                    <p className='text-center'>Price</p>
                    <p className='text-center'>Quantity</p>
                    <p className='text-end'>Subtotal</p>
                </div>
                {items}
                <div className='flex max-[530px]:flex-col gap-5 justify-between'>
                    <button className='px-12 py-4 border rounded-md'>Return To Shop</button>
                    <button className='px-12 py-4 border rounded-md'>Update Cart</button>
                </div>
                <div className='grid min-[650px]:grid-cols-2 gap-3 mt-20'>
                    <div className='grid min-[850px]:grid-cols-2 gap-2 items-start'>
                        <input className='border w-full rounded-md px-[24px] py-4 outline-none' placeholder="Coupon Code" type="text" />
                        <div className='flex justify-end'>
                            <button className='max-w-[270px] w-full py-4 border rounded-md text-white bg-[#DB4444]'>Apply Coupon</button>
                        </div>
                    </div>
                    <div className='border border-[#000] rounded-md px-6 py-8'>
                        <h5>Cart Total</h5>
                        <div className='flex justify-between items-center py-4 border-b-2'>
                            <p>Subtotal:</p>
                            <p>{cart.length}</p>
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
                                <button className='max-w-[270px] w-full py-4 border rounded-md text-white bg-[#DB4444]'>Proceed to checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
