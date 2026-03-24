import React from "react";
import bg from "../assets/images/bg.png";
import backIcon from "../assets/images/group.png";
const Terms = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Poppins, sans-serif",
        padding: "20px",
      }}
    >
      {/* 🔝 TOP BAR */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          right: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        {/* Back Button with group.png */}
        <button
          onClick={() => window.history.back()}
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "none",
            borderRadius: "8px",
            padding: "6px",
            cursor: "pointer",
          }}
        >
          <img src={backIcon} alt="back" className="w-6 h-6" />
        </button>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "8px",
              padding: "8px 10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🏠
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "8px",
              padding: "8px 10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 🌟 Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,215,120,0.35), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />

      {/* 📄 Card */}
      <div
        style={{
          width: "90%",
          maxWidth: "450px",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "25px",
          borderRadius: "16px",
          background: "rgba(120, 90, 50, 0.65)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          TERMS & CONDITIONS
        </h2>

        <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          This activity will start on 27th January 2026 and end on 26th April 2026 at 05:00 PM (“Contest Period”). No entry or registration will be entertained after 11:59 PM of 26th April of 2026.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          This activity is open only to persons of age 18 (eighteen) years and above, as on 27th January 2026. Participation in this activity is purely voluntary. Participation in this activity implies unconditional acceptance of these terms and conditions.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          This activity is valid across all the states and union territories of India, except for the state of Tamil Nadu. Any participation received from Tamil Nadu residents will be treated as void ab initio.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Participants must register on  by providing valid details and OTP verification. Maximum 5 entries per mobile number, but only one reward.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "15px" }}>
          Prizes are subject to verification. Company provides vouchers only. No liability for damages. Terms may change. Employees and their family members are not eligible. All disputes are subject to Kolkata jurisdiction.
        </p>

        <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
          By participating, users consent to collection, storing, and processing of personal information by ITC and its service providers.
        </p>
      </div>
    </div>
  );
};

export default Terms;