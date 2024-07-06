// import React from 'react'
// import { MdOutlineEdit } from 'react-icons/md'
// import { RiDeleteBin6Line } from 'react-icons/ri'
// import {
//     useGetCategoryQuery,
//     useDeleteCategoryMutation,
//     useUpdateCategoryMutation
// } from '../../../context/categoryApi'


// const ManageCategoryPage = () => {

//     const { data } = useGetCategoryQuery()
//     console.log(data);

//     return (
//         <>
//             <h2 className='text-[#454545] text-[28px] font-[500]'>ManageCategoryPage</h2>
//             <div className='flex flex-wrap gap-5 pt-10'>
//                 {
//                     data?.map((el, inx) => (
//                         <div key={inx} className=' border-[#000] border-[2px] rounded-2xl p-4 w-[250px]'>
//                             <p className='text-[20px] font-[500]'>{el.title}</p>
//                             <div className='flex gap-3 justify-end pt-2'>
//                                 <div className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px]'>
//                                     <MdOutlineEdit className='size-7' />
//                                 </div>
//                                 <div className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px]'>
//                                     <RiDeleteBin6Line className='size-6' />
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }

// export default ManageCategoryPage

import React, { useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
    useGetCategoryQuery,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} from '../../../context/categoryApi';

const ManageCategoryPage = () => {
    const { data } = useGetCategoryQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [updateCategory] = useUpdateCategoryMutation();
    const [editCategory, setEditCategory] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
        } catch (error) {
            console.error('Failed to delete category:', error);
        }
    };

    const handleEdit = (category) => {
        setEditCategory(category);
        setNewTitle(category.title);
    };

    const handleUpdate = async () => {
        try {
            await updateCategory({ id: editCategory.id, body: { title: newTitle } });
            setEditCategory(null);  // Edit oynasini yopish
        } catch (error) {
            console.error('Failed to update category:', error);
        }
    };

    return (
        <>
            <h2 className='text-[#454545] text-[28px] font-[500]'>ManageCategoryPage</h2>
            <div className='flex flex-wrap gap-5 pt-10'>
                {data?.map((el, inx) => (
                    <div key={inx} className='border-[#000] border-[2px] rounded-2xl p-4 w-[250px]'>
                        <p className='text-[20px] font-[500]'>{el.title}</p>
                        <div className='flex gap-3 justify-end pt-2'>
                            <div
                                onClick={() => handleEdit(el)}
                                className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px] cursor-pointer'
                            >
                                <MdOutlineEdit className='size-7' />
                            </div>
                            <div
                                onClick={() => handleDelete(el.id)}
                                className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px] cursor-pointer'
                            >
                                <RiDeleteBin6Line className='size-6' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {editCategory && (
                <div className='edit'>
                    <div className='edit__modules'>
                        <h3>Edit Category</h3>
                        <input
                            type='text'
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className='border mt-1 w-full px-3 py-1 rounded-[8px] outline-none'
                        />
                        <button
                            onClick={handleUpdate}
                            className='border px-[15px] py-[4px] mt-[25px] rounded-[10px] bg-[#0006] text-white'
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setEditCategory(null)}
                            className='border px-[15px] py-[4px] mt-[25px] rounded-[10px] bg-[#0006] text-white'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManageCategoryPage;


