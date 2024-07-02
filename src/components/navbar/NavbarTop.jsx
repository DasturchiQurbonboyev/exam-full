import React from 'react'

const NavbarTop = () => {

    return (
        <div className='bg-black py-[11px] hidden lg:block  '>
            <div className="kontainer flex justify-end ">
                <div className='flex justify-end gap-[150px]   '>
                    <div className='text-center text-white flex gap-4'>
                        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <p>ShopNow</p>
                    </div>
                    <select className='text-end bg-transparent outline-none text-white ' name="" id="">
                        <option className='text-black' value="English">English</option>
                        <option className='text-black' value="Uzbek">Uzbek</option>
                        <option className='text-black' value="Russia ">Russia</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default NavbarTop