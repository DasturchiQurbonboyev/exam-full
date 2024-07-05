import React, { useEffect, useState } from 'react';
import frame from "../../assets/images/checkout/Frame.png";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../../context/cartSlice';

const BOT_TOKEN = "7479336002:AAE-fiEczU4hqcNKjmeBKZhRtwj_toutzJI"
const CHAT_ID = "-4218604797"

const CheckOut = () => {
    const carts = useSelector(state => state.cart.value);

    const [person, setPerson] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [optional, setOptional] = useState("");
    const [city, setCity] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [saveInfo, setSaveInfo] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("bank");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePayment = (e) => {
        let text = "Buyurtma %0A%0A"
        text += `Ismi Familyasi: ${person} %0A`
        text += `Kampaniya nomi: ${company} %0A`
        text += `Address: ${address} %0A`
        text += `Buyritmachi fikri: ${optional} %0A`
        text += `Shahar: ${city} %0A`
        text += `Telefon: ${number} %0A`
        text += `Email: ${email} %0A%0A`

        let quantity = 1
        carts?.forEach(el => {
            text += `<b>Maxsulot: ${quantity}</b> %0A%0A`
            text += `Nomi: ${el.title} %0A`
            text += `Miqdori: ${el.quantity} %0A`
            text += `Narxi: ${el.price} $ %0A%0A`
            quantity++
        })

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
        let api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        dispatch(clearCart())
        window.scrollTo(0, 0)
        toast.success("Buyurtma qabul qilindi, tez orada siz bilan bog'lanamiz")

        navigate('/'); // Home sahifasiga yo'naltirish
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let sum = carts.reduce((acc, el) => {
        return acc + el.quantity * el.price;
    }, 0);

    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [isCompanyNameFocused, setIsCompanyNameFocused] = useState(false);
    const [isStreetAddressFocused, setIsStreetAddressFocused] = useState(false);
    const [isOptionalAddressFocused, setIsOptionalAddressFocused] = useState(false);
    const [isTownCityFocused, setIsTownCityFocused] = useState(false);
    const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
    const [isEmailAddressFocused, setIsEmailAddressFocused] = useState(false);
    const [isCouponFocused, setIsCouponFocused] = useState(false);

    const handleFocus = (setter) => () => {
        setter(true);
    };

    const handleBlur = (setter) => (e) => {
        if (e.target.value === '') {
            setter(false);
        }
    };

    let items = carts?.map((el) => (
        <div key={el.id} className='py-[24px] flex justify-between gap-2 items-center'>
            <div className='flex max-[400px]:flex-col items-center gap-3'>
                <Link to={`/single/${el.id}`}>
                    <img src={el.image[0]} className='w-[80px]' alt={el.title} />
                </Link>
                <p className='line-clamp-1 cursor-default' title={el.description}>{el.title}</p>
            </div>
            <p className='w-[100px] text-end cursor-default'>$ {el.price * el.quantity}</p>
        </div>
    ));

    return (
        <div className='pt-[60px]'>
            <div className='kontainer'>
                <h2 className='text-[36px] font-[500] leading-[30px] mb-12'>Billing Details</h2>
                <div className='grid grid-cols-1 min-[730px]:grid-cols-2 gap-10 justify-between'>
                    <div className='flex flex-col gap-6'>
                        <div className=' relative'>
                            <label htmlFor='firstName' className={`absolute left-3 transition-all duration-300 ease-in-out ${isFirstNameFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                First Name*
                            </label>
                            <input
                                required
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                                type='text'
                                id='firstName'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isFirstNameFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsFirstNameFocused)}
                                onBlur={handleBlur(setIsFirstNameFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='companyName' className={`absolute left-3 transition-all duration-300 ease-in-out ${isCompanyNameFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Company Name
                            </label>
                            <input
                                required
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                type='text'
                                id='companyName'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isCompanyNameFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsCompanyNameFocused)}
                                onBlur={handleBlur(setIsCompanyNameFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='streetAddress' className={`absolute left-3 transition-all duration-300 ease-in-out ${isStreetAddressFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Street Address*
                            </label>
                            <input
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type='text'
                                id='streetAddress'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isStreetAddressFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsStreetAddressFocused)}
                                onBlur={handleBlur(setIsStreetAddressFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='optionalAddress' className={`absolute left-3 transition-all duration-300 ease-in-out ${isOptionalAddressFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Apartment, floor, etc. (optional)
                            </label>
                            <input
                                value={optional}
                                onChange={(e) => setOptional(e.target.value)}
                                type='text'
                                id='optionalAddress'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isOptionalAddressFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsOptionalAddressFocused)}
                                onBlur={handleBlur(setIsOptionalAddressFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='townCity' className={`absolute left-3 transition-all duration-300 ease-in-out ${isTownCityFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Town/City*
                            </label>
                            <input
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                type='text'
                                id='townCity'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isTownCityFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsTownCityFocused)}
                                onBlur={handleBlur(setIsTownCityFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='phoneNumber' className={`absolute left-3 transition-all duration-300 ease-in-out ${isPhoneNumberFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Phone Number*
                            </label>
                            <input
                                required
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                type='text'
                                id='phoneNumber'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isPhoneNumberFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsPhoneNumberFocused)}
                                onBlur={handleBlur(setIsPhoneNumberFocused)}
                            />
                        </div>
                        <div className='relative'>
                            <label htmlFor='emailAddress' className={`absolute left-3 transition-all duration-300 ease-in-out ${isEmailAddressFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-400'}`}>
                                Email Address*
                            </label>
                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='text'
                                id='emailAddress'
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isEmailAddressFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                onFocus={handleFocus(setIsEmailAddressFocused)}
                                onBlur={handleBlur(setIsEmailAddressFocused)}
                            />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input
                                id='#save'
                                type='checkbox'
                                checked={saveInfo}
                                onChange={(e) => setSaveInfo(e.target.checked)}
                            />
                            <label className='cursor-default' htmlFor='#save'>Save this information for faster check-out next time</label>
                        </div>
                    </div>
                    <div className='flex-grow'>
                        <div className='overflow-auto h-[400px]'>
                            {items}
                        </div>
                        <div className='py-[24px] border-b-2 flex justify-between items-center'>
                            <p>Subtotal:</p>
                            <p>$ {sum}</p>
                        </div>
                        <div className='py-[24px] border-b-2 flex justify-between items-center'>
                            <p>Shipping :</p>
                            <p>Free</p>
                        </div>
                        <div className='py-[24px] flex justify-between items-center'>
                            <p>Total:</p>
                            <p>$ {sum}</p>
                        </div>
                        <div className='flex gap-4 justify-between mb-8'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    id='#bank'
                                    type='radio'
                                    name='paymentMethod'
                                    value="bank"
                                    checked={paymentMethod === "bank"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label className='cursor-pointer' htmlFor='#bank'>Bank</label>
                            </div>
                            <img src={frame} alt='' />
                        </div>
                        <div className='flex gap-4 mb-8 items-center'>
                            <input
                                id='#cash'
                                type='radio'
                                name='paymentMethod'
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className='cursor-pointer' htmlFor='#cash'>Cash on delivery</label>
                        </div>
                        <div className=' relative flex max-[530px]:flex-col gap-4 items-start mb-8'>
                            <label htmlFor='streetAddress' className={`absolute left-3 transition-all duration-300 ease-in-out ${isCouponFocused ? '-top-5 text-blue-500 text-sm' : 'top-2 text-gray-500'}`}>
                                Coupon Code*
                            </label>
                            <input
                                className={`outline-none border-b-2 px-4 bg-[#F5F5F5] w-full h-[50px] transition-all duration-300 ease-in-out ${isCouponFocused ? 'border-blue-500' : 'border-gray-300'}`}
                                placeholder=''
                                type='text'
                                onFocus={handleFocus(setIsCouponFocused)}
                                onBlur={handleBlur(setIsCouponFocused)}
                            />
                            <button className='max-w-[250px] w-full py-4 border rounded-md text-white bg-[#DB4444]'>
                                Apply Coupon
                            </button>
                        </div>
                        <button onClick={() => { handlePayment() }} className='px-12 py-4 border rounded-md text-white bg-[#DB4444]'>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
