// import React, { useEffect, useState } from 'react';
// import { RiCloseLine } from 'react-icons/ri';
// import { useUpdateProductMutation } from '../../../context/productApi';
// import { useGetCategoryQuery } from '../../../context/categoryApi';
// import { toast } from 'react-toastify';

// const EditProductModule = ({ product, setEditModule }) => {
//     const [updateProduct, { data: dataUpdateProduct, error: errorUpdateProduct, isLoading: loadingUpdateProduct }] = useUpdateProductMutation();
//     const { data: dataGetCategory } = useGetCategoryQuery();

//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [oldPrice, setOldPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [images, setImages] = useState([]);
//     const [imageInput, setImageInput] = useState("");
//     const [id, setId] = useState("");

//     useEffect(() => {
//         if (product) {
//             setTitle(product.title);
//             setPrice(product.price);
//             setOldPrice(product.oldPrice);
//             setCategory(product.category);
//             setDescription(product.description);
//             setImages(product.image || []);
//             setId(product.id);
//         }
//     }, [product]);

//     const handleEditProduct = (e) => {
//         e.preventDefault();

//         const updatedProduct = {
//             ...product,
//             title,
//             price,
//             oldPrice,
//             category,
//             description,
//             image: images,
//         };

//         updateProduct({ body: updatedProduct, id })
//             .unwrap()
//             .then(() => {
//                 setEditModule(null);
//                 toast.success("Product updated successfully");
//             })
//             .catch((error) => {
//                 console.error("Failed to update the product:", error);
//                 toast.error("Product could not be updated");
//             });
//     };

//     const handleAddImage = () => {
//         if (imageInput) {
//             setImages([...images, imageInput]);
//             setImageInput("");
//         }
//     };

//     const handleRemoveImage = (index) => {
//         const newImages = images.filter((_, i) => i !== index);
//         setImages(newImages);
//     };

//     return (
//         <div>
//             <div className='edit'>
//                 <form onSubmit={handleEditProduct} className='edit__modules '>
//                     <div className='flex justify-end'>
//                         <RiCloseLine onClick={() => setEditModule(null)} className='cursor-pointer' size={25} />
//                     </div>

//                     <div>
//                         <label htmlFor="Title">Title</label><br />
//                         <input
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Title" /><br />

//                         <label htmlFor="Price">Price</label><br />
//                         <input
//                             value={price}
//                             onChange={(e) => setPrice(e.target.value)}
//                             className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="Price" /><br />

//                         <label htmlFor="OldPrice">Old Price</label><br />
//                         <input
//                             value={oldPrice}
//                             onChange={(e) => setOldPrice(e.target.value)}
//                             className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" name="" id="OldPrice" /><br />

//                         <label htmlFor="Image-url">Image URL</label><br />
//                         <input
//                             value={imageInput}
//                             onChange={(e) => setImageInput(e.target.value)}
//                             className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" name="" id="Image-url" /><br />
//                         <button type="button" onClick={handleAddImage} className='text-white bg-[#454545] px-[20px] py-[5px] rounded-[5px] mb-[10px]'>Add Image</button>

//                         <div className='mb-[10px]'>
//                             {images.map((img, index) => (
//                                 <div key={index} className='flex items-center mb-[5px]'>
//                                     <img src={img} alt={`image-${index}`} className='w-[50px] h-[50px] mr-[10px]' />
//                                     <button type="button" onClick={() => handleRemoveImage(index)} className='text-white bg-[#e74c3c] px-[10px] py-[5px] rounded-[5px]'>Remove</button>
//                                 </div>
//                             ))}
//                         </div>

//                         <label htmlFor="Category">Category</label><br />
//                         <select
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none ' name="" id="Category">
//                             {
//                                 dataGetCategory?.map((el, inx) => (
//                                     <option key={inx} value={el.title}>{el.title}</option>
//                                 ))
//                             }
//                         </select><br />

//                         <label htmlFor="Desc">Desc</label><br />
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             className='border w-full mt-[8px] h-[164px] bg-[#F8F8F8] rounded-[10px] p-4 outline-none resize-none' name="" id="Desc"></textarea>
//                     </div>

//                     <button type='submit' className='border px-[15px] py-[4px] mt-[25px] rounded-[10px] bg-[#0006] text-white'>Save</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditProductModule;






// import React, { useEffect, useState } from 'react';
// import { RiCloseLine } from 'react-icons/ri';
// import { useUpdateProductMutation } from '../../../context/productApi';
// import { useGetCategoryQuery } from '../../../context/categoryApi';
// import { toast } from 'react-toastify';

// const EditProductModule = ({ product, setEditModule }) => {
//     const [updateProduct, { data: dataUpdateProduct, error: errorUpdateProduct, isLoading: loadingUpdateProduct }] = useUpdateProductMutation();
//     const { data: dataGetCategory } = useGetCategoryQuery();

//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [oldPrice, setOldPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [images, setImages] = useState([]);
//     const [imageInput, setImageInput] = useState("");
//     const [id, setId] = useState("");

//     useEffect(() => {
//         if (product) {
//             setTitle(product.title);
//             setPrice(product.price);
//             setOldPrice(product.oldPrice);
//             setCategory(product.category);
//             setDescription(product.description);
//             setImages(product.image || []);
//             setId(product.id);
//         }
//     }, [product]);

//     const handleEditProduct = (e) => {
//         e.preventDefault();

//         const updatedProduct = {
//             ...product,
//             title,
//             price,
//             oldPrice,
//             category,
//             description,
//             image: images,
//         };

//         updateProduct({ body: updatedProduct, id })
//             .unwrap()
//             .then(() => {
//                 setEditModule(null);
//                 toast.success("Product updated successfully");
//             })
//             .catch((error) => {
//                 console.error("Failed to update the product:", error);
//                 toast.error("Product could not be updated");
//             });
//     };

//     const handleAddImage = () => {
//         if (imageInput) {
//             setImages([...images, imageInput]);
//             setImageInput("");
//         }
//     };

//     const handleRemoveImage = (index) => {
//         const newImages = images.filter((_, i) => i !== index);
//         setImages(newImages);
//     };

//     return (
//         <div className='edit'>
//             <form onSubmit={handleEditProduct} className='edit__modules '>
//                 <div className='flex justify-end'>
//                     <RiCloseLine onClick={() => setEditModule(null)} className='cursor-pointer' size={25} />
//                 </div>

//                 <div>
//                     <label htmlFor="Title">Title</label><br />
//                     <input
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" id="Title" /><br />

//                     <label htmlFor="Price">Price</label><br />
//                     <input
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" id="Price" /><br />

//                     <label htmlFor="OldPrice">Old Price</label><br />
//                     <input
//                         value={oldPrice}
//                         onChange={(e) => setOldPrice(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="number" id="OldPrice" /><br />

//                     <label htmlFor="Image-url">Image URL</label><br />
//                     <input
//                         value={imageInput}
//                         onChange={(e) => setImageInput(e.target.value)}
//                         className='border w-full mt-[8px] mb-[10px] bg-[#F8F8F8] rounded-[10px] px-4 py-[8px] outline-none ' type="text" id="Image-url" /><br />
//                     <button type="button" onClick={handleAddImage} className='text-white bg-[#454545] px-[20px] py-[5px] rounded-[5px] mb-[10px]'>Add Image</button>

//                     <div className='mb-[10px]'>
//                         {images.map((img, index) => (
//                             <div key={index} className='flex items-center mb-[5px]'>
//                                 <img src={img} alt={`image-${index}`} className='w-[50px] h-[50px] mr-[10px]' />
//                                 <button type="button" onClick={() => handleRemoveImage(index)} className='text-white bg-[#e74c3c] px-[10px] py-[5px] rounded-[5px]'>Remove</button>
//                             </div>
//                         ))}
//                     </div>

//                     <label htmlFor="Category">Category</label><br />
//                     <select
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         className='w-full border mt-2 mb-[10px] bg-[#F8f8f8] px-4 py-[8px] rounded-[10px] outline-none ' id="Category">
//                         {dataGetCategory?.map((el, inx) => (
//                             <option key={inx} value={el.title}>{el.title}</option>
//                         ))}
//                     </select><br />

//                     <label htmlFor="Desc">Description</label><br />
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         className='border w-full mt-[8px] h-[164px] bg-[#F8F8F8] rounded-[10px] p-4 outline-none resize-none' id="Desc"></textarea>
//                 </div>

//                 <button type='submit' className='border px-[15px] py-[4px] mt-[25px] rounded-[10px] bg-[#0006] text-white'>Save</button>
//             </form>
//         </div>
//     );
// };

// export default EditProductModule;
