import React, { useEffect, useState } from 'react';
import login from '../../assets/images/logIn/Side.png';
import './LogIn.css'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const LogIn = () => {

    const [username, setUsername] = useState("john32");
    const [password, setPassword] = useState("87654321");
    const [loading, setLoading] = useState(false);
    const [showpassword, setShowpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!username.trim() || !password.trim()) {
            setLoading(false);
            return toast.warn("Iltimos ma'lumotni to'ldiring");
        }


        if (username === "john32" && password === "87654321") {
            localStorage.setItem("token", "Admin__token");
            window.open("/account", "_self");
            toast.success('Muvaffaqiyatli kirdingiz!');
        } else {
            toast.error("Username yoki Parol noto'g'ri");
        }

        setLoading(false);
    };

    if (loading) {
        return <Loading />;
    }


    useEffect(() => {
        scrollTo(0, 0)
    }, [])


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
            <form onSubmit={handleSubmit} className='max-[600px]:pt-[100px] pt-[60px] grid min-[800px]:grid-cols-2 gap-[50px]'>
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
                                id='#email'
                                onChange={e => setUsername(e.target.value)}
                                className={`outline-none border-b-2 px-3 py-2 w-full transition-all duration-300 ease-in-out ${isEmailFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsEmailFocused)}
                                onBlur={handleBlur(setIsEmailFocused)}
                            />
                            <label
                                htmlFor="#email"
                                className={`absolute left-3 transition-all duration-300 ease-in-out ${isEmailFocused ? '-top-4 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}
                            >
                                Email or Phone Number
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type={`${!showpassword ? "password" : "text"}`}
                                id="#password"
                                onChange={e => setPassword(e.target.value)}
                                className={`outline-none border-b-2 px-3 py-2 w-full transition-all duration-300 ease-in-out ${isPasswordFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsPasswordFocused)}
                                onBlur={handleBlur(setIsPasswordFocused)}

                            />
                            <button type='button' className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-700' onClick={() => setShowpassword(p => !p)}>
                                {password ? (showpassword ? <FaEyeSlash /> : <FaRegEye />) : null}
                            </button>
                            <label
                                htmlFor="#password"
                                className={`absolute left-3 transition-all duration-300 ease-in-out ${isPasswordFocused ? '-top-4 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}
                            >
                                Password
                            </label>
                        </div>
                    </div>
                    <div className='flex max-[400px]:flex-col-reverse justify-between  min-[400px]:items-center'>
                        <button disabled={loading} type='submit' className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md transform transition-transform duration-300 hover:scale-105 active:scale-95'>
                            Log In
                        </button>
                        <p className='text-[#DB4444] cursor-pointer max-[400px]:pb-6 hover-underline-animation  '>Forget Password?</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
