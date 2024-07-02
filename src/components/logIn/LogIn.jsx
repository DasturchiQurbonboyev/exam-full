import React from 'react'
import login from '../../assets/images/logIn/Side.png'


const LogIn = () => {
    return (
        <div className='kontainer'>
            <div className='pt-[110px] flex items-center justify-between gap-[50px]   ' >
                <div>
                    <img src={login} alt="" />
                </div>
                <div className='grid gap-[40px]'>
                    <h2 className='text-[36px] font-[500] leading-[30px]    '>Log in to Exclusive</h2>
                    <p className='text-[16px] font-[400] leading-[24px]     '>Enter your details below</p>
                    <div className='flex flex-col gap-5'>
                        <input className=' outline-none border-b-2 px-3 py-2' type="text" placeholder='Email or Phone Number' />
                        <input className=' outline-none border-b-2 px-3 py-2' type="password" placeholder='Password' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md   '>Log In</button>
                        <p className='text-[#DB4444] cursor-pointer    '>Forget Password?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn