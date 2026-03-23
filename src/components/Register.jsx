import React from "react";
import logo from "../assets/images/logo4.png";
import bg from "../assets/images/bg.png";

const Register = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="mx-auto w-40 mb-4"
        />

        <h2 className="text-xl font-bold text-black mb-6 tracking-wide">
          REGISTRATION
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
          />

          <input
            type="text"
            placeholder="Pincode"
            className="w-full p-3 rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
          />

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="State"
              className="w-1/2 p-3 rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="w-1/2 p-3 rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
            />
          </div>

          <div className="text-left text-white text-sm space-y-2 mt-3">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>I agree to the Terms and Conditions.</span>
            </label>

            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                I hereby confirm that I am a Smoker and 18+ years old.
              </span>
            </label>
          </div>

          <button className="w-full mt-5 py-3 rounded-xl bg-[#7a3e06] text-white shadow-lg active:translate-y-1 transition">
            Get OTP
          </button>

        </div>
      </div>
    </div>
  );
};

export default Register;