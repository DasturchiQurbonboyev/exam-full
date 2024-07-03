import React, { useState } from 'react';
import login from '../../assets/images/logIn/Side.png';

const LogIn = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleFocus = (setter) => () => {
        setter(true);
    };

    const handleBlur = (setter) => (e) => {
        if (e.target.value === '') {
            setter(false);
        }
    };

    return (
        <div className='kontainer'>
            <div className='pt-[110px] grid min-[800px]:grid-cols-2 gap-[50px]'>
                <div className='max-[800px]:hidden '>
                    <img src={login} alt="" />
                </div>
                <div className='grid gap-[40px]'>
                    <h2 className=' text-[28px]  min-[400px]:text-[36px] font-[500] leading-[30px] max-[800px]:text-center    '>Log in to Exclusive</h2>
                    <p className='text-[16px] font-[500] leading-[24px] max-[800px]:text-center '>Enter your details below</p>
                    <div className='flex flex-col gap-5'>
                        <div className="relative">
                            <input
                                type="text"
                                className={`outline-none border-b-2 px-3 py-2 w-full transition-all duration-300 ease-in-out ${isEmailFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsEmailFocused)}
                                onBlur={handleBlur(setIsEmailFocused)}
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-3 transition-all duration-300 ease-in-out ${isEmailFocused ? '-top-4 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}
                            >
                                Email or Phone Number
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                // id="#password"
                                className={`outline-none border-b-2 px-3 py-2 w-full transition-all duration-300 ease-in-out ${isPasswordFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsPasswordFocused)}
                                onBlur={handleBlur(setIsPasswordFocused)}
                            />
                            <label
                                htmlFor="password"
                                className={`absolute left-3 transition-all duration-300 ease-in-out ${isPasswordFocused ? '-top-4 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}
                            >
                                Password
                            </label>
                        </div>
                    </div>
                    <div className='flex max-[400px]:flex-col-reverse justify-between  min-[400px]:items-center'>
                        <button className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md transform transition-transform duration-300 hover:scale-105 active:scale-95'>
                            Log In
                        </button>
                        <p className='text-[#DB4444] cursor-pointer max-[400px]:pb-6  '>Forget Password?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
