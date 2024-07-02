import React, { useEffect } from 'react'
import frame from "../../assets/images/checkout/Frame.png"
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const carts = useSelector(state => state.cart.value);
    console.log(carts);

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    let sum = carts.reduce((acc, el) => {
        console.log(el);
        return acc + el.quantity * el.price
    }, 0)


    let items = carts?.map((el) =>
        <div key={el.id} className=' py-[24px]  flex justify-between   items-center    '>
            <div className='flex items-center gap-3'>
                <img src={el.thumbnail} className='w-[80px]' alt="" />
                <p>{el.title}</p>
            </div>
            <p>$ {el.price}</p>
        </div>)


    return (
        <div className='pt-[120px]'>
            <div className='kontainer'>
                <h2 className='text-[36px] font-[500] leading-[30px] mb-12    '>Billing Details</h2>
                <div className='flex gap-10 justify-between'>
                    <div className='w-[470px] flex flex-col gap-8'>
                        <div>
                            <label className='text-[#666]    ' >First Name*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Company Name</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Street Address*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Apartment, floor, etc. (optional)</label><br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Town/City*</label><br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Phone Number*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div>
                            <label className='text-[#666]    ' >Email Address*</label> <br />
                            <input className=' outline-none px-4 bg-[#F5F5F5] w-full h-[50px]   ' type="text" />
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            {items}


                        </div>
                        <div className=' py-[24px] border-b-2 flex justify-between   items-center    '>
                            <p>Subtotal:</p>
                            <p>$ {sum}</p>
                        </div>
                        <div className=' py-[24px] border-b-2  flex justify-between   items-center    '>
                            <p>Shopping :</p>
                            <p>Free</p>
                        </div>
                        <div className=' py-[24px]   flex justify-between   items-center    '>
                            <p>Total:</p>
                            <p>$ {sum}</p>
                        </div>
                        <div className='flex gap-4 justify-between mb-8'>
                            <div className='flex gap-4'>
                                <input type="radio" />
                                <p>Bank</p>
                            </div>
                            <img src={frame} alt="" />
                        </div>
                        <div className='flex gap-4 mb-8'>
                            <input type="radio" />
                            <p>Cash on delivery</p>
                        </div>
                        <div className='flex gap-4 items-start mb-8'>
                            <input className='border w-[300px] rounded-md px-[24px] py-4 outline-none ' placeholder="Coupon Code" type="text" />
                            <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Apply Coupon</button>
                        </div>
                        <button className='px-12 py-4 border rounded-md  text-white bg-[#DB4444]      ' >Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut