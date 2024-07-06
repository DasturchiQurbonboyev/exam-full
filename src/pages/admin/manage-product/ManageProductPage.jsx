import React, { useState } from 'react';
import editblack from '../../../assets/admin/editblack.png';
import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import './ManageProductPage.css';
import { useGetProductQuery, useUpdateProductMutation, useDeleteProductMutation } from '../../../context/productApi';
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { useGetCategoryQuery } from '../../../context/categoryApi';

const ManageProductPage = () => {
    const { data: products, isLoading, isError } = useGetProductQuery();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    const { data: dataGetCategory } = useGetCategoryQuery();

    const [editProduct, setEditProduct] = useState(null);
    const [image, setImage] = useState([]);

    const handleEdit = (product) => {
        setEditProduct(product);
        setImage(product.image || []);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { oldPrice, ...rest } = editProduct;
            await updateProduct({ id: editProduct.id, body: { ...rest, price: editProduct.price, image } });

            setEditProduct(null);
        } catch (error) {
            console.error('Failed to update product:', error);
        }
    };

    const handleAddImage = () => {
        setImage([...image, '']);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...image];
        updatedImages.splice(index, 1);
        setImage(updatedImages);
    };

    return (
        <div className=''>
            <h2 className='text-[#454545] text-[28px] font-[500]'>
                Manage Products
            </h2>

            <div className='mt-[43px] flex flex-wrap gap-5'>
                {isLoading ? (
                    <p>Loading products...</p>
                ) : isError ? (
                    <p>Error loading products</p>
                ) : (
                    products?.map((product, index) => (
                        <div key={index} className='max-w-[240px] border px-[16px] py-[28px]'>
                            <div className='product__img__cart'>
                                <Swiper
                                    effect={'cube'}
                                    grabCursor={false}
                                    cubeEffect={{
                                        shadow: false,
                                        slideShadows: false,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    pagination={false}
                                    modules={[EffectCube, Pagination]}
                                    className='mySwiper'
                                >
                                    {product.image?.map((img, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img className='swiperImg' src={img} alt={`Product Image ${idx}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <h5 className='mb-[10px] text-[#454545] text-[20px] leading-[22px] font-[500] line-clamp-1'>
                                {product.title}
                            </h5>
                            <div className='flex gap-10 justify-between items-end'>
                                <div>
                                    <p>
                                        <del className='text-[#9F9F9F] text-[12px]'>
                                            {product.oldPrice}₽
                                        </del>
                                    </p>
                                    <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
                                        {product.price}₽
                                    </p>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <div
                                        onClick={() => handleEdit(product)}
                                        className='cursor-pointer border px-[16px] py-[6px] w-[50px] rounded-[100px]'
                                    >
                                        <img src={editblack} alt='Edit' />
                                    </div>
                                    <div
                                        onClick={() => handleDelete(product.id)}
                                        className='bg-[#454545] cursor-pointer w-[50px] flex justify-center items-center px-[16px] py-[2px] rounded-[100px]'
                                    >
                                        <RiDeleteBin6Line size={30} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {editProduct && (
                <div className='edit'>
                    <div className='edit__modules'>
                        <div className='flex justify-end'>
                            <RiCloseLine
                                onClick={() => setEditProduct(null)}
                                className='cursor-pointer'
                                size={25}
                            />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className='text-[14px]' htmlFor='title'>
                                    Product Name:
                                </label>
                                <br />
                                <input
                                    value={editProduct.title}
                                    onChange={(e) =>
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            title: e.target.value,
                                        }))
                                    }
                                    className='border mt-1 w-full px-3 py-1 rounded-[8px] outline-none'
                                    type='text'
                                    id='title'
                                />
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor='oldPrice'>
                                    Old Price:
                                </label>
                                <br />
                                <input
                                    value={editProduct.oldPrice}
                                    onChange={(e) =>
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            oldPrice: e.target.value,
                                        }))
                                    }
                                    className='border mt-1 w-full px-3 py-1 rounded-[8px] outline-none'
                                    type='text'
                                    id='oldPrice'
                                />
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor='price'>
                                    Price:
                                </label>
                                <br />
                                <input
                                    value={editProduct.price}
                                    onChange={(e) =>
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            price: e.target.value,
                                        }))
                                    }
                                    className='border mt-1 w-full px-3 py-1 rounded-[8px] outline-none'
                                    type='text'
                                    id='price'
                                />
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor='category'>
                                    Category:
                                </label>
                                <br />
                                <select
                                    value={editProduct.category}
                                    onChange={(e) =>
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            category: e.target.value,
                                        }))
                                    }
                                    className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none '
                                    name=""
                                    id="Category"
                                >
                                    {dataGetCategory?.map((el, inx) => (
                                        <option key={inx} value={el.title}>{el.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor='description'>
                                    Description:
                                </label>
                                <br />
                                <textarea
                                    value={editProduct.description}
                                    onChange={(e) =>
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            description: e.target.value,
                                        }))
                                    }
                                    className='border resize-none overflow-auto mt-1 w-full px-3 py-1 rounded-[8px] outline-none'
                                    id='description'
                                />
                            </div>

                            <div>
                                <label className='text-[14px]' htmlFor='image'>
                                    Image:
                                </label>
                                <br />
                                {image.map((img, idx) => (
                                    <div key={idx} className='flex items-center mb-[5px]'>
                                        <input
                                            value={img}
                                            onChange={(e) => {
                                                const updatedImage = [...image];
                                                updatedImage[idx] = e.target.value;
                                                setImage(updatedImage);
                                            }}
                                            className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none'
                                            type="text"
                                            name={`image-${idx}`}
                                            id={`image-${idx}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(idx)}
                                            className='text-white bg-[#e74c3c] px-[10px] py-[5px] rounded-[5px] ml-[10px]'
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddImage}
                                    className='text-white bg-[#454545] px-[20px] py-[5px] rounded-[5px] mt-[10px]'
                                >
                                    Add Image
                                </button>
                            </div>

                            <button
                                type='submit'
                                className='border px-[15px] py-[4px] mt-[25px] rounded-[10px] bg-[#0006] text-white'
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageProductPage;
