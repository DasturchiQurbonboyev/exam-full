import React from 'react'
import './AdminComponent.css'
import create from '../../assets/admin/create.png'
import edit from '../../assets/admin/edit.png'
import adminPanel from '../../assets/admin/adminPanel.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom'


const AdminComponent = () => {
    const adminLocation = useLocation().pathname
    return (
        <div className='admin'>
            <div className='admin__sidebar'>
                <h2><NavLink className='flex items-center gap-3' to={""}><img src={adminPanel}></img>  Admin Dashboard</NavLink></h2>
                <ul className='mt-[38px] flex flex-col gap-2'>
                    <li className='  '>
                        <NavLink className={` ${adminLocation === "/admin/create-product" ? "navlink__btn" : ""}  flex items-center gap-3 px-[12px] py-[8px]  `} to={"create-product"}>
                            <div>
                                <img src={create} alt="" />
                            </div>
                            <p>Create product</p>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className={` ${adminLocation === "/admin/manage-product" ? "navlink__btn" : ""}  flex items-center gap-3 px-[12px] py-[8px]  `} to={"manage-product"}>
                            <div>
                                <img src={edit} alt="" />
                            </div>
                            <p>Manage product</p>
                        </NavLink>
                    </li>
                    <li className=' '>
                        <NavLink className={` ${adminLocation === "/admin/create-category" ? "navlink__btn" : ""}  flex items-center gap-3 px-[12px] py-[8px]  `} to={"create-category"}>
                            <div>
                                <img src={create} alt="" />
                            </div>
                            <p>Create category</p>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className={` ${adminLocation === "/admin/manage-category" ? "navlink__btn" : ""}  flex items-center gap-3 px-[12px] py-[8px]  `} to={"manage-category"}>
                            <div>
                                <img src={edit} alt="" />
                            </div>
                            <p>Manage category</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="admin__content">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminComponent