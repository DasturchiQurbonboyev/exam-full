import React from "react";

const Account = () => {
  return (
    <div className="kontainer ">
      <div className="min-[850px]:flex  justify-between gap-[50px] pt-[60px]">
        <div className=" max-[850px]:pb-[40px] max-[850px]:grid max-[850px]:grid-cols-2 max-[450px]:grid-cols-1">
          <div>
            <p className="text-[16px] font-[700] leading-[24px]   " >Manage My Account</p>
            <div className="grid gap-1 pl-[20px] pt-4 pb-6">
              <p className="text-[16px] font-[400] leading-[24px] text-[#b1aeae]  ">My Profile</p>
              <p className="text-[16px] font-[400] leading-[24px] text-[#b1aeae]  ">Address Book</p>
              <p className="text-[16px] font-[400] leading-[24px] text-[#b1aeae]  ">My Payment Options</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] font-[700] leading-[24px]   " >My Orders</p>
            <div className="grid gap-1 pl-[20px] pt-4 pb-6">
              <p className="text-[16px] font-[400] leading-[24px] text-[#b1aeae]  ">My Returns</p>
              <p className="text-[16px] font-[400] leading-[24px] text-[#b1aeae]  ">My Cancellations</p>
            </div>
          </div>
          <p className="text-[16px] font-[700] leading-[24px]   " >My WishList</p>
        </div>
        <div className=" shadow-custom rounded-lg flex-grow px-[20px] min-[550px]:px-[80px] py-[20px] min-[550px]:py-[40px]  ">
          <p className="text-[#DB4444] text-[20px] font-[600] leading-[28px]     "> Edit Your Profile</p>
          <form className="grid min-[700px]:grid-cols-2 gap-5 pt-4 pb-6">
            <div className="grid gap-1">
              <label className="text-[16px] font-[500] leading-[24px]   " htmlFor="">First Name</label>
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="text" placeholder="Md" />
            </div>
            <div className="grid gap-1">
              <label className="text-[16px] font-[500] leading-[24px]   " htmlFor="">Last Name</label>
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="text" placeholder="Rimel" />
            </div>
            <div className="grid gap-1">
              <label className="text-[16px] font-[500] leading-[24px]   " htmlFor="">Email</label>
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="email" placeholder="rimel1111@gmail.com" />
            </div>
            <div className="grid gap-1">
              <label className="text-[16px] font-[500] leading-[24px]   " htmlFor="">Address</label>
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="text" placeholder="Kingston, 5236, United State" />
            </div>
          </form>
          <div className="inp1">
            <label className="text-[16px] font-[500] leading-[24px]   ">Password Changes</label>
            <div className="grid gap-4">
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="password" placeholder="Current Passwod" />
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="password" placeholder="New Passwod" />
              <input className="bg-[#F5F5F5] px-[16px] py-[13px] rounded-md  " type="password" placeholder="Confirm New Passwod" />
            </div>
          </div>
          <div className="flex max-[600px]:flex-col justify-end gap-3 pt-[24px]">
            <button className='px-[48px] py-[16px] bg-[#d4cfcf]  text-black rounded-md transform transition-transform duration-300 hover:scale-105 active:scale-95'>Cancel</button>
            <button className='px-[48px] py-[16px] bg-[#DB4444] text-white rounded-md transform transition-transform duration-300 hover:scale-105 active:scale-95'>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
