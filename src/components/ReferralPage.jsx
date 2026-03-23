import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import mansinger from "../assets/images/clap.png";
const ReferralPage = () => {
  const referralCode = "GOLD123";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join with my referral code!",
        text: `Use my referral code ${referralCode}`,
        url: window.location.href,
      });
    } else {
      alert(`Share this code: ${referralCode}`);
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Back Button */}
      <button onClick={() => window.history.back()} style={styles.backBtn}>
        <ArrowLeft size={22} />
      </button>

      {/* Title */}
      <h1 style={styles.title}>
        Refer & <span style={styles.highlight}>Win Big!</span>
      </h1>

      {/* Card */}
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Get more chances to win!</h2>
        <p style={styles.text}>
          Share your referral code with friends & earn rewards.
        </p>

        {/* Referral Code */}
        <div style={styles.codeBox}>
          <span style={styles.code}>{referralCode}</span>
          <button onClick={handleCopy} style={styles.copyBtn}>
            <Copy size={16} /> Copy
          </button>
        </div>

        {/* Share Button */}
        <button onClick={handleShare} style={styles.shareBtn}>
          <Share2 size={18} /> Share
        </button>

        {/* Footer */}
        <div style={styles.footer}>
          <Gift size={14} />
          <span>Earn rewards for every referral</span>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a0f2e, #2c1449)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "sans-serif",
  },

  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    background: "rgba(255,255,255,0.1)",
    border: "none",
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },

  highlight: {
    color: "#ffd700",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "25px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "350px",
    textAlign: "center",
  },

  subtitle: {
    fontSize: "1.4rem",
    marginBottom: "10px",
    color: "#ffd700",
  },

  text: {
    fontSize: "0.95rem",
    marginBottom: "20px",
  },

  codeBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.3)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  code: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "3px",
  },

  copyBtn: {
    background: "#ffd700",
    border: "none",
    padding: "6px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  shareBtn: {
    width: "100%",
    background: "#ffd700",
    border: "none",
    padding: "10px",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },

  footer: {
    fontSize: "0.8rem",
    display: "flex",
    justifyContent: "center",
    gap: "5px",
    opacity: 0.8,
  },
};

