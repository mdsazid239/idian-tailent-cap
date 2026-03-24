import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import statue from "../assets/images/art-14.png";
import bg from "../assets/images/bg.png";
import backIcon from "../assets/images/group.png";
const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receivedOtp = location.state?.otp || "";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [time, setTime] = useState(20);
  useEffect(() => {
    if (receivedOtp) {
      setOtp(receivedOtp.split(""));
    }
  }, [receivedOtp]);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col justify-between px-4 py-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-50 bg-white/30 p-2 rounded-full shadow"
        >
          <img src={backIcon} alt="back" className="w-5 h-5" />
        </button>
        <h2 className="text-center text-xl font-bold text-black mt-10 mb-6">
          VERIFICATION
        </h2>
        <div className="flex justify-center gap-3 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-12 h-12 text-center text-lg rounded-xl bg-[#e6c28b]/80"
            />
          ))}
        </div>
        <div className="flex justify-between text-white text-sm mb-6">
          <span>00:{time < 10 ? `0${time}` : time}</span>
          <button onClick={() => setTime(20)}>Resend OTP</button>
        </div>
        <button
          className="w-full py-3 rounded-xl bg-[#7a3e06] text-white"
        >
          Verify
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <img src={statue} alt="statue" className="w-56 md:w-64" />
      </div>
    </div>
  );
};
export default Verification;