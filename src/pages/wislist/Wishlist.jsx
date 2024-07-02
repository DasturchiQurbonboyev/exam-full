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
                // <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque pariatur culpa aliquid ullam tenetur in ipsum dolores, consequatur quas ea qui odit minima molestiae recusandae, expedita excepturi natus nemo. Harum.</h2>
            }
        </>
    )
}

export default Wishlist