import React, { useState, useRef } from 'react';
import { useGetCategoryQuery, useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } from '../../../context/categoryApi';

const CreateCategoryPage = () => {
    const { data: categories, isLoading: loadingCategory } = useGetCategoryQuery();
    const [createCategory, { isLoading: loadingCreateCategory }] = useCreateCategoryMutation();
    const [deleteCategory, { isLoading: loadingDeleteCategory }] = useDeleteCategoryMutation();
    const [updateCategory, { isLoading: loadingUpdateCategory }] = useUpdateCategoryMutation();

    const titleRef = useRef();
    const [editMode, setEditMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const handleCreateOrUpdateCategory = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value.trim();

        if (title && (!categories?.some(category => category.title.toLowerCase() === title.toLowerCase()) || editMode)) {
            if (editMode) {
                await updateCategory({ id: currentCategory.id, body: { title } });
                setEditMode(false);
                setCurrentCategory(null);
            } else {
                await createCategory({ title });
            }
            titleRef.current.value = "";
        }
    };

    const handleEditCategory = (category) => {
        setEditMode(true);
        setCurrentCategory(category);
        titleRef.current.value = category.title;
    };

    const handleDeleteCategory = async (id) => {
        await deleteCategory(id);
    };

    return (
        <div>
            <h2 className='text-[#454545] text-[28px] font-[500]'>Create Category</h2>

            <form className='flex gap-[15px] items-center mt-[25px]' onSubmit={handleCreateOrUpdateCategory}>
                <input
                    ref={titleRef}
                    className='outline-none border p-[10px] rounded-[5px]'
                    type="text"
                />
                <button
                    type='submit'
                    className='border p-[10px] rounded-[5px] bg-[#e0dcdc] hover:bg-[#c4bfbf]'
                    disabled={loadingCreateCategory || loadingUpdateCategory}
                >
                    {loadingCreateCategory || loadingUpdateCategory ? 'Loading...' : editMode ? 'Update' : 'Create'}
                </button>
            </form>

            <div className='flex flex-col gap-[15px] mt-[25px]'>
                {categories?.map((el, inx) => (
                    <div key={inx} className='border flex items-center justify-between p-[10px] rounded-[5px]'>
                        <span>{el.title}</span>
                        <div className='flex gap-[10px]'>
                            <button
                                onClick={() => handleEditCategory(el)}
                                type='button'
                                className='p-[10px] rounded-[5px] border bg-[#e0dcdc] hover:bg-[#c4bfbf]'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteCategory(el.id)}
                                disabled={loadingDeleteCategory}
                                type='button'
                                className='p-[10px] rounded-[5px] border bg-[#e0dcdc] hover:bg-[#c4bfbf]'
                            >
                                {loadingDeleteCategory ? "Loading..." : "Delete"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateCategoryPage;

