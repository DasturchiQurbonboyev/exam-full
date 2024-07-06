import React from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'


const ManageCategoryPage = () => {

    return (
        <>
            <h2 className='text-[#454545] text-[28px] font-[500]'>ManageCategoryPage</h2>
            <div className='flex pt-10'>
                <div className=' border-[#000] border-[2px] rounded-2xl p-4 w-[250px]'>
                    <p className='text-[20px] font-[500]'>title</p>
                    <div className='flex gap-3 justify-end pt-2'>
                        <div className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px]'>
                            <MdOutlineEdit className='size-7' />
                        </div>
                        <div className='flex justify-center items-center border-[#646466] border rounded-xl px-3 py-[1px]'>
                            <RiDeleteBin6Line className='size-6' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageCategoryPage

