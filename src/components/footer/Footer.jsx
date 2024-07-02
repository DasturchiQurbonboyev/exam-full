import React from 'react'
import right from "../../assets/images/footer/icon-send.png"
import qrKode from "../../assets/images/footer/qr-kode.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>


            <footer className="bg-black mt-10">
                <div className="">
                    <div className="grid  kontainer  grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Exclusive</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Subscribe</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Get 10% off your first order</a>
                                </li>
                                <li className="mb-4">
                                    <div className='flex items-center border  justify-center py-2 rounded-md'>
                                        <input className='px-[5px] w-[180px]  outline-none bg-black' type="text" name="" id="" placeholder='Enter your email' />
                                        <button><img src={right} alt="" /></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">exclusive@gmail.com</a>
                                </li>
                                <li className="mb-4">
                                    <a href="+88015-88888-9999" className="hover:underline">+88015-88888-9999</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Account</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">My Account</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Login / Register</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Cart</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Wishlist</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Shop</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Link</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms Of Use</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">FAQ</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download App</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Save $3 with App New User Only</a>
                                </li>
                                <li className="mb-4">
                                    <img src={qrKode} alt="" />
                                </li>
                                <li className="mb-4">
                                    <div className='flex gap-6'>
                                        <FaFacebookF />
                                        <FaTwitter />
                                        <FaInstagram />
                                        <FaLinkedinIn />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
                        <div className="kontainer">
                            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer