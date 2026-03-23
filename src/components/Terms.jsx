// import React from "react";
// import bg from "../assets/images/bg.png";

// const Terms = () => {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px",
//         boxSizing: "border-box",
//         position: "relative",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(circle at center, rgba(255,215,120,0.35), rgba(0,0,0,0.7))",
//         }}
//       />

//       {/* Card */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "420px",
//           maxHeight: "85vh",
//           overflowY: "auto",
//           padding: "clamp(18px, 3vw, 28px)",
//           borderRadius: "18px",
//           background: "rgba(120, 90, 50, 0.55)",
//           backdropFilter: "blur(18px)",
//           WebkitBackdropFilter: "blur(18px)",
//           boxShadow:
//             "0 20px 60px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,215,120,0.15)",
//           color: "#f5f5f5",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             letterSpacing: "2px",
//             fontSize: "clamp(14px, 2vw, 18px)",
//             marginBottom: "16px",
//           }}
//         >
//           TERMS & CONDITIONS
//         </h2>

//         <ol
//           style={{
//             fontSize: "clamp(12px, 1.8vw, 13px)",
//             lineHeight: "1.7",
//             paddingLeft: "16px",
//           }}
//         >
//           <li>Contest runs from 27 Jan 2026 to 26 Apr 2026.</li>
//           <li>Only 18+ participants allowed.</li>
//           <li>Participation means acceptance of terms.</li>
//           <li>Not valid in Tamil Nadu.</li>
//           <li>Products available without this offer.</li>
//           <li>Scan QR to participate.</li>
//           <li>Prizes for winners only.</li>
//           <li>Invalid entries rejected.</li>
//           <li>Provide accurate info.</li>
//           <li>No warranty on prizes.</li>
//           <li>Company provides vouchers only.</li>
//           <li>Claims may be verified.</li>
//           <li>No liability for damages.</li>
//           <li>Terms may change.</li>
//           <li>Employees not eligible.</li>
//           <li>Kolkata jurisdiction.</li>
//           <li>Consent to data usage.</li>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default Terms;



import React from "react";
import bg from "../assets/images/bg.png";

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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Poppins, sans-serif",
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
          zIndex: 3, // important (above overlay)
        }}
      >
        {/* Back Button */}
        <button style={iconStyle}>⟲</button>

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={iconStyle}>🏠</button>
          <button style={iconStyle}>☰</button>
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

      {/* 📄 CARD */}
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(120, 90, 50, 0.55)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "16px",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          TERMS & CONDITIONS
        </h2>

        <ol style={{ fontSize: "13px", lineHeight: "1.6", paddingLeft: "18px" }}>
          <li>Contest runs from 27 Jan 2026 to 26 Apr 2026.</li>
          <li>Only 18+ participants allowed.</li>
          <li>Participation means acceptance of terms.</li>
          <li>Not valid in Tamil Nadu.</li>
          <li>Products available without this offer.</li>
          <li>Scan QR to participate.</li>
          <li>Prizes for winners only.</li>
          <li>Invalid entries rejected.</li>
          <li>Provide accurate info.</li>
          <li>No warranty on prizes.</li>
          <li>Company provides vouchers only.</li>
          <li>Claims may be verified.</li>
          <li>No liability for damages.</li>
          <li>Terms may change.</li>
          <li>Employees not eligible.</li>
          <li>Kolkata jurisdiction.</li>
          <li>Consent to data usage.</li>
        </ol>
      </div>
    </div>
  );
};

/* 🔘 Icon Style */
const iconStyle = {
  background: "rgba(255,255,255,0.7)",
  border: "none",
  borderRadius: "8px",
  padding: "8px 10px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Terms;