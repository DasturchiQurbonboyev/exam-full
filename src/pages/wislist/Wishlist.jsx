import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import Empty from '../../components/empty/Empty';

const Wishlist = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const wishes = useSelector(state => state.wishlist.value)
    return (
        <>
            {(wishes.length > 0 ? true : false) ?
                <Products data={wishes} wishlistTitle={false} str={`Wishlist (${wishes.length})`} />
                :
                <Empty />
            }
        </>
    )
}

export default Wishlist