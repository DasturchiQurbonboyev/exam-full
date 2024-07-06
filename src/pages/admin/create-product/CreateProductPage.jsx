import React, { useEffect, useState } from 'react'
import { useCreateProductMutation, useGetProductQuery } from '../../../context/productApi';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import { useGetCategoryQuery } from '../../../context/categoryApi';
import { toast } from 'react-toastify';

const CreateProductPage = () => {
    const { data: dataGetCategory } = useGetCategoryQuery();
    const [createProduct, { data: dataCreateProduct, error: errorCreateProduct }] = useCreateProductMutation();

    console.log(errorCreateProduct);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const [category, setCategory] = useState(dataGetCategory?.[0]?.title || "");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [imageInput, setImageInput] = useState("");




    const handleCreateProduct = (e) => {
        e.preventDefault();
        if (!title || !price || !category || images.length === 0) {
            toast.error("Please fill in all required fields");
            return;
        }
        let product = {
            title,
            price: +price,
            oldPrice: +oldPrice,
            category,
            description,
            image: images,
        };
        console.log("Creating product:", product); // Konsolga chiqarish
        createProduct(product);
        setTitle("");
        setPrice("");
        setOldPrice("");
        setCategory(dataGetCategory?.[0]?.title || "");
        setDescription("");
        setImages([]);
        setImageInput("");
    };

    const handleAddImage = () => {
        if (imageInput) {
            setImages([...images, imageInput]);
            setImageInput("");
        }
    };

    const handleRemoveImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    useEffect(() => {
        if (dataCreateProduct) {
            toast.success("Product created successfully");
        }

        if (errorCreateProduct) {
            toast.error("Product could not be created");
        }
    }, [dataCreateProduct, errorCreateProduct]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h2 className='text-[#454545] text-[28px] font-[500]'>
                Create Product
            </h2>
            <div className='flex justify-between items-start'>
                <form onSubmit={handleCreateProduct} className='max-w-[620px]'>
                    <label htmlFor="Title">Title</label><br />
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Title" /><br />

                    <label htmlFor="Price">Price</label><br />
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="Price" /><br />

                    <label htmlFor="OldPrice">Old Price</label><br />
                    <input
                        value={oldPrice}
                        onChange={(e) => setOldPrice(e.target.value)}
                        className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="OldPrice" /><br />

                    <label htmlFor="Image-url">Image URL</label><br />
                    <input
                        value={imageInput}
                        onChange={(e) => setImageInput(e.target.value)}
                        className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Image-url" /><br />
                    <button type="button" onClick={handleAddImage} className='text-white bg-[#454545] px-[20px] py-[5px] rounded-[5px] mb-[10px]'>Add Image</button>

                    <div className='mb-[10px]'>
                        {images.map((img, index) => (
                            <div key={index} className='flex items-center mb-[5px]'>
                                <img src={img} alt={`image-${index}`} className='w-[50px] h-[50px] mr-[10px]' />
                                <button type="button" onClick={() => handleRemoveImage(index)} className='text-white bg-[#e74c3c] px-[10px] py-[5px] rounded-[5px]'>Remove</button>
                            </div>
                        ))}
                    </div>

                    <label htmlFor="Category">Category</label><br />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none ' name="" id="Category">
                        {
                            dataGetCategory?.map((el, inx) => (
                                <option key={inx} value={el.title}>{el.title}</option>
                            ))
                        }
                    </select><br />

                    <label htmlFor="Desc">Desc</label><br />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border w-full mt-[8px] h-[164px] bg-[#F8F8F8] rounded-[10px] p-4 outline-none resize-none' name="" id="Desc"></textarea>

                    <button className='text-white bg-[#454545] px-[50px] mt-[23px] py-[10px] rounded-[5px]'>Create</button>
                </form>
                <div className='max-w-[280px] border px-[16px] py-[28px]'>
                    <div className={`product__img__cart h-[250px] ${images.length === 0 && "bg-[#918c8c]"}  w-[250px]`}>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: false,
                                slideShadows: false,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={false}
                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img className='swiperImg' src={img} alt={`product-${index}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h5 className='mb-[10px] text-[#454545] text-[20px] leading-[22px] font-[500] line-clamp-1'>{title}</h5>
                    <div className='flex gap-10 justify-between items-end'>
                        <div>
                            <p>
                                <del className='text-[#9F9F9F] text-[12px]'>
                                    {oldPrice}$
                                </del>
                            </p>
                            <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
                                {price}$
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateProductPage;




// import React, { useEffect, useState } from 'react'
// import { useCreateProductMutation } from '../../../context/productApi';
// import { useSelector } from 'react-redux';


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';
// import { EffectCube, Pagination } from 'swiper/modules';
// import { useGetCategoryQuery } from '../../../context/categoryApi';
// import { toast } from 'react-toastify';

// const CreateProductPage = () => {
//     const { data: dataGetCategory } = useGetCategoryQuery()
//     const [createProduct, { data: dataCreateProduct, error: errorCreateProduct }] = useCreateProductMutation()
//     const state = useSelector((state) => state.categoryes);

//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState("")
//     const [oldPrice, setOldPrice] = useState("")
//     const [category, setCategory] = useState("")
//     const [description, setDescription] = useState("")
//     const [image, setImage] = useState([])

//     const handleCreateProduct = (e) => {
//         e.preventDefault()
//         let product = {
//             title,
//             price: +price,
//             oldPrice: +oldPrice,
//             category,
//             description,
//             image,
//         }
//         createProduct(product)
//         setTitle("")
//         setPrice("")
//         setOldPrice("")
//         setCategory("")
//         setDescription("")
//         setImage("")
//     }

//     useEffect(() => {
//         if (dataCreateProduct) {
//             toast.success("Product created successfully")
//         }

//         if (errorCreateProduct) {
//             toast.error("Product could not be created")
//         }
//     }, [dataCreateProduct, errorCreateProduct])

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [])


//     return (
//         <div>
//             <h2 className='text-[#454545] text-[28px] font-[500]'>
//                 CreateProductPage
//             </h2>
//             <div className='flex justify-between items-start'>
//                 <form onSubmit={handleCreateProduct} className='max-w-[620px]'>
//                     <label htmlFor="Title">Title</label><br />
//                     <input
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Title" /><br />

//                     <label htmlFor="Price">Price</label><br />
//                     <input
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="Price" /><br />

//                     <label htmlFor="Price">Old Price</label><br />
//                     <input
//                         value={oldPrice}
//                         onChange={(e) => setOldPrice(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="OldPrice" /><br />


//                     <label htmlFor="Image-url">Image Url</label><br />
//                     <input
//                         value={image}
//                         onChange={(e) => setImage(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Image-url" /><br />

//                     <label htmlFor="Category">Category</label><br />
//                     <select
//                         onChange={(e) => setCategory(e.target.value)}
//                         className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none ' name="" id="Category">
//                         {
//                             dataGetCategory?.map((el, inx) => (
//                                 <option key={inx} value={el.title}>{el.title}</option>

//                             ))
//                         }
//                     </select><br />

//                     <label htmlFor="Desc">Desc</label><br />
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         className='border w-full mt-[8px]  h-[164px] bg-[#F8F8F8] rounded-[10px] p-4 outline-none  resize-none' name="" id="Desc"></textarea>

//                     <button className='text-white bg-[#454545] px-[50px] mt-[23px] py-[10px] rounded-[5px]  '>Create</button>
//                 </form>
//                 <div className='max-w-[240px] border px-[16px] py-[28px]'>
//                     <div className='product__img__cart'>
//                         <Swiper
//                             effect={'cube'}
//                             grabCursor={false}
//                             cubeEffect={{
//                                 shadow: false,
//                                 slideShadows: false,
//                                 shadowOffset: 20,
//                                 shadowScale: 0.94,
//                             }}
//                             pagination={false}
//                             modules={[EffectCube, Pagination]}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide>
//                                 <img className='swiperImg' src={image} />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <img className='swiperImg' src={image} />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <img className='swiperImg' src={image} />
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <img className='swiperImg' src={image} />
//                             </SwiperSlide>
//                         </Swiper>
//                     </div>
//                     <h5 className='mb-[10px] text-[#454545] text-[20px] leading-[22px] font-[500] line-clamp-1    '>{title}</h5>
//                     <div className='flex gap-10 justify-between items-end'>
//                         <div>
//                             <p>
//                                 <del className='text-[#9F9F9F] text-[12px]'>
//                                     {oldPrice}$
//                                 </del>
//                             </p>
//                             <p className='text-[#454545] text-[20px] leading-[22px] font-[700]'>
//                                 {price}$
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CreateProductPage