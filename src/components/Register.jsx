import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo4.png";
import bg from "../assets/images/bg.png";
const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    navigate("/verification");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="w-full max-w-md bg-white/10 backdrop-blur-md 
        p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center"
      >
        <img src={logo} alt="logo" className="w-28 sm:w-36 mb-4" />

        <h2 className="text-center text-lg sm:text-xl font-bold text-[#3b2a0a] mb-6 tracking-wide">
          REGISTRATION
        </h2>

        <div className="w-full space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#e6c28b]/90 shadow 
            outline-none text-sm text-black placeholder:text-black/60"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#e6c28b]/90 shadow 
            outline-none text-sm text-black placeholder:text-black/60"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#e6c28b]/90 shadow 
            outline-none text-sm text-black placeholder:text-black/60"
          />

          <div className="flex gap-3">
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-xl bg-[#e6c28b]/90 shadow 
              outline-none text-sm text-black placeholder:text-black/60"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-1/2 px-4 py-3 rounded-xl bg-[#e6c28b]/90 shadow 
              outline-none text-sm text-black placeholder:text-black/60"
            />
          </div>

          {/* <div className=" text-white space-y-2">
            <label className="flex items-start gap-2 leading-tight">
              <input type="checkbox" className="mt-1" />
              <span>I agree to Terms & Conditions</span>
            </label>

            <label className="flex items-start gap-2 leading-tight">
              <input type="checkbox" className="mt-1" />
              <span>I am a Smoker and 18+ years old</span>
            </label>
          </div> */}

          <div className="w-full flex justify-center mt-6">
            <div
              className="text-white space-y-2"
              style={{
                maxWidth: "280px",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "8.58px",
                lineHeight: "100%",
              }}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3 h-3" />
                <span>I agree to Terms & Conditions</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-3 h-3" />
                <span>I am a Smoker and 18+ years old</span>
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full mt-2 py-3 rounded-xl bg-[#7a3e06] text-white 
            shadow-md hover:bg-[#5c2e04] active:scale-95 transition"
          >
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
