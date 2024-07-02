import React from 'react'
import login from "../../assets/images/logIn/Side.png"
import google from "../../assets/images/logIn/Icon-Google.png"
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='kontainer'>
            <div className=' pt-[110px] flex items-center gap-[50px] justify-between' >
                <div className=''>
                    <img src={login} alt="" />
                </div>
                <div className='grid gap-[40px]'>
                    <h2 className='text-[36px] font-[500] leading-[30px]    '>Log in to Exclusive</h2>
                    <p className='text-[16px] font-[400] leading-[24px]     '>Enter your details below</p>
                    <div className='flex flex-col gap-5'>
                        <input className='outline-none border-b-2 px-3 py-2' type="text" placeholder='Name' />
                        <input className='outline-none border-b-2 px-3 py-2' type="text" placeholder='Email or Phone Number' />
                        <input className='outline-none border-b-2 px-3 py-2' type="password" placeholder='Password' />
                    </div>
                    <div className='grid'>
                        <button className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md   '>Create Account</button>
                    </div>
                    <div className='cursor-pointer flex gap-5 border py-4 justify-center rounded-md'>
                        <img src={google} alt="" />
                        <p>Sign up with Google</p>
                    </div>
                    <div className='flex justify-center gap-4 items-center'>
                        <p>Already have account?</p>
                        <Link className='border-b-2 pb-1 border-[#000]' to={"/log-in"}>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp