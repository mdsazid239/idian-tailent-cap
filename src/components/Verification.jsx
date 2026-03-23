import React, { useState, useEffect } from "react";
import statue from "../assets/images/art-14.png";
import bg from "../assets/images/bg.png";
const Verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [time, setTime] = useState(20);

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
      className="min-h-screen flex flex-col items-center justify-between px-4 py-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-md">

        <button className="bg-white/60 rounded-lg p-2 shadow mb-4">
          ←
        </button>

        <h2 className="text-center text-xl font-bold text-black mb-6">
          VERIFICATION
        </h2>

        <div className="flex justify-center gap-4 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-14 h-14 text-center text-lg rounded-xl bg-[#e6c28b]/80 shadow-md outline-none"
            />
          ))}
        </div>

        <div className="flex justify-between text-white text-sm mb-6">
          <span>00:{time < 10 ? `0${time}` : time}</span>
          <button onClick={() => setTime(20)}>Resend OTP</button>
        </div>

        <button className="w-full py-3 rounded-xl bg-[#7a3e06] text-white shadow-lg active:translate-y-1 transition">
          Get OTP
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <img src={statue} alt="statue" className="w-60 md:w-72" />
      </div>
    </div>
  );
};

export default Verification;