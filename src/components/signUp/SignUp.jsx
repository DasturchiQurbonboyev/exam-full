import React, { useEffect, useState } from 'react';
import login from "../../assets/images/logIn/Side.png";
import google from "../../assets/images/logIn/Icon-Google.png";
import { Link } from 'react-router-dom';

const SignUp = () => {


    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    const [isNameFocused, setIsNameFocused] = useState(false);
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
            <div className='pt-[60px] grid min-[800px]:grid-cols-2 items-center gap-[50px]'>
                <div className='max-[800px]:hidden'>
                    <img src={login} alt="" />
                </div>
                <div className='grid gap-[40px]'>
                    <h2 className=' text-[28px]  min-[400px]:text-[36px] font-[500] leading-[30px] max-[800px]:text-center'>Log in to Exclusive</h2>
                    <p className='text-[16px] font-[400] leading-[24px] max-[800px]:text-center'>Enter your details below</p>
                    <div className='flex flex-col gap-5'>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className={`outline-none border-b-2 px-3 py-2 w-full transition-all duration-300 ease-in-out ${isNameFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsNameFocused)}
                                onBlur={handleBlur(setIsNameFocused)}
                            />
                            <label
                                htmlFor="name"
                                className={`absolute left-3 transition-all duration-300 ease-in-out ${isNameFocused ? '-top-4 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="email"
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
                                id="password"
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
                    <div className='grid'>
                        <button className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md transform transition-transform duration-300 hover:scale-105 active:scale-95'>
                            Create Account
                        </button>
                    </div>
                    <div className='cursor-pointer flex gap-5 border py-4 justify-center rounded-md  transform transition-transform duration-300 hover:scale-105 active:scale-95'>
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
    );
};

export default SignUp;
