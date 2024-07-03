import React, { useEffect, useState } from "react";
import phone from "../../assets/images/home/phone.png";
import sms from "../../assets/images/home/sms.png";
const ContactComponent = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    const [isBouncing, setIsBouncing] = useState(false);

    const handleClick = () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 500);
    };

    return (
        <div className="kontainer contact">
            <div className="min-[950px]:flex gap-[30px] pt-[60px] ">
                <div className="max-[600px]:block   max-[950px]:flex max-[950px]:justify-between max-[950px]:gap-5 shadow-custom  rounded-[4px] max-[600px]:px-4 max-[600px]:py-5   min-[600px]:px-8 min-[600px]:py-10   ">
                    <div className="min-[600px]:min-w-[220px]">
                        <div className="flex items-center gap-4 pb-6">
                            <img src={phone} alt="" />
                            <span className="font-[500] text-[16px]">Call To Us</span>
                        </div>
                        <p className="text-[16px] leading-[21px] font-[400] pb-4">We are available 24/7, 7 days a week.</p>
                        <p className="text-[16px] leading-[21px] font-[400] pb-8">Phone: +8801611112222</p>
                    </div>
                    <hr />
                    <div>
                        <div className="flex items-center gap-4 pb-6 max-[600px]:pt-8 min-[950px]:pt-8">
                            <img src={sms} alt="" />
                            <span className="font-[500] text-[16px]">Write To US</span>
                        </div>
                        <p className="text-[16px] leading-[21px] font-[400] pb-4 max-w-[250px]">Fill out our form and we will contact you within 24 hours.</p>
                        <p className="text-[16px] leading-[21px] font-[400] pb-4">Emails: customer@exclusive.com</p>
                        <p className="text-[16px] leading-[21px] font-[400] pb-4">Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className=" max-[950px]:mt-[30px] shadow-custom rounded-[4px]  grid gap-8 max-[600px]:px-4 max-[600px]:py-5   min-[600px]:px-8 min-[600px]:py-10">
                    <div className="grid min-[600px]:grid-cols-3 gap-4">
                        <input className="border   px-4 py-3 rounded-[4px] bg-[#F5F5F5]" type="text" placeholder="Your Name *" />
                        <input className="border  px-4 py-3 rounded-[4px] bg-[#F5F5F5]" type="email" placeholder="Your Email *" />
                        <input className="border  px-4 py-3 rounded-[4px] bg-[#F5F5F5]" type="number" placeholder="Your Phone *" />
                    </div>

                    <textarea className="border resize-none px-4 py-3 rounded-[4px] bg-[#F5F5F5]" placeholder=" Your Massage" cols="100" rows="10"></textarea>
                    <div className="text-end ">
                        <button className={`px-6 py-4 bg-[#DB4444] text-white font-semibold transition rounded ${isBouncing ? 'animate-bounce' : ''
                            }`}
                            onClick={handleClick} >Send Massage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
