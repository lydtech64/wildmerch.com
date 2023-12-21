import React from "react";
import "./style.css";
import Navigation from "./Navigation";

const Accountpage = () => {
    return (
        <div className="box">
      <div className="rectangle" >
        <div className="my-account-page">
            <div className="div">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="text-wrapper">Sign out</div>
                    <div className="text-wrapper-2">John Doe</div>
                    <div className="text-wrapper-3">Welcome,</div>
                    <div className="text-wrapper-4">Home</div>
                    <div className="rectangle-3" />
                    <div className="text-wrapper-5">Account overview</div>
                    <div className="text-wrapper-6">My Account</div>
                    <div className="text-wrapper-7">John Doe</div>
                    <div className="text-wrapper-8">j******@gmail.com</div>
                    <div className="text-wrapper-9">*********56</div>
                    <div className="text-wrapper-10">Account name:</div>
                    <div className="text-wrapper-11">Email:</div>
                    <div className="text-wrapper-12">Change Email</div>
                    <div className="text-wrapper-13">Change Password</div>
                    <div className="text-wrapper-14">Phone Number:</div>
                    <div className="text-wrapper-15">Order history</div>
                    <div className="text-wrapper-16">Payment Methods</div>
                    <div className="text-wrapper-17">Addresses</div>
                </div>
                <div className="rectangle-4" />
            </div>        
      </div>
</div>
        </div>
    );
};

export default Accountpage();