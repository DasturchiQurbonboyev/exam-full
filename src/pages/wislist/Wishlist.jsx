import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import emptyWishlist from '../../assets/images/empty/empty-wishlist.webp'
import { Link } from 'react-router-dom';
import WishlistComponent from '../../components/wishlest/WishlistComponent';

const Wishlist = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const wishes = useSelector(state => state.wishlist.value)
    return (
        <>
            {(wishes.length > 0 ? true : false) ?
                <div>
                    <WishlistComponent />
                    <Products
                        homeTitle=""
                        homeType="Just For You"
                        allProductBtnbottom=""
                        allProductBtntop="true"
                        buttonNext=""
                        productSize={4}
                    />
                </div>
                :
                <div>
                    <div className='flex justify-center items-center'>
                        <img src={emptyWishlist} alt="" />
                    </div>

                    <div className='flex justify-center'>
                        <Link to="/" className='text-[17px] font-[500] bg-[#ee7d7d] text-white px-[18px] py-3 rounded-lg transform transition-transform hover:scale-105 duration-200 active:scale-95'>
                            ← Bosh sahifaga qaytish
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Wishlist