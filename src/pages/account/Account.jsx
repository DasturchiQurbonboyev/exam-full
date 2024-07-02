import React from "react";

const Account = () => {
  return (
    <div className="kontainer account">
      <div className="cards">
        <div className="left">
          <h2>Manage My Account</h2>
          <p>My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
          <h2>My Orders</h2>
          <p>My Returns</p>
          <p>My Cancellations</p>
          <h2>My WishList</h2>
        </div>
        <div className="right">
          <h1> Edit Your Profile</h1>
          <form>
            <div className="inp">
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Md" />
            </div>
            <div className="inp">
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Rimel" />
            </div>
            <div className="inp">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="rimel1111@gmail.com" />
            </div>
            <div className="inp">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Kingston, 5236, United State" />
            </div>
          </form>
          <div className="inp1">
            <h2>Password Changes</h2>
            <input type="password" placeholder="Current Passwod" />
            <input type="password" placeholder="New Passwod" />
            <input type="password" placeholder="Confirm New Passwod" />
          </div>
          <button className="cancel">Cancel</button>
          <button className="save">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
