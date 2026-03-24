import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/images/group.png";
const Profile = () => {
  const navigate = useNavigate();
  const entries = [1, 2, 3, 4];
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }

        .profile-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #b66a1d, #f5d78a);
          padding: 15px;
        }
        .back-btn {
          position: fixed;
          top: 12px;
          left: 12px;
          z-index: 9999;
          background: rgba(255,255,255,0.3);
          backdrop-filter: blur(8px);
          border: none;
          border-radius: 50%;
          padding: 10px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .back-btn img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

    
        .profile-card {
          width: 100%;
          max-width: 380px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 18px;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          text-align: center;
        }

        .profile-img {
          width: 80px;
          height: 80px;
          margin: auto;
          margin-top: -60px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #fff;
        }

        .profile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          margin: 10px 0 15px;
          font-size: 18px;
          font-weight: bold;
        }

        .form-section {
          text-align: left;
        }

        .form-section label {
          font-size: 12px;
          margin-top: 8px;
          display: block;
        }

        .form-section input {
          width: 100%;
          padding: 8px;
          border-radius: 6px;
          border: none;
          margin-top: 4px;
          background: rgba(255, 255, 255, 0.8);
        }

        .row {
          display: flex;
          gap: 8px;
        }

        .field {
          flex: 1;
        }

        .entries-title {
          margin-top: 15px;
          text-align: left;
          font-weight: 600;
        }

        .entry-card {
          display: flex;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px;
          border-radius: 10px;
          margin-top: 10px;
          align-items: center;
        }

        .entry-card img {
          width: 55px;
          height: 55px;
          border-radius: 8px;
          object-fit: cover;
        }

        .entry-info {
          text-align: left;
        }

        .entry-info h4 {
          font-size: 13px;
        }

        .date {
          font-size: 10px;
        }

        .status {
          background: #d69a3b;
          padding: 3px 6px;
          border-radius: 5px;
          font-size: 10px;
          margin-top: 4px;
          display: inline-block;
        }

        @media (max-width: 500px) {
          .row {
            flex-direction: column;
          }
        }
      `}</style>

      <button className="back-btn" onClick={() => navigate(-1)}>
        <img src={backIcon} alt="back" />
      </button>

      <div className="profile-container">
        <div className="profile-card">

          <div className="profile-img">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
            />
          </div>

          <h2 className="name">Hari Shetty</h2>

          <div className="form-section">
            <label>Phone number</label>
            <input type="text" />

            <label>Gender</label>
            <input type="text" />

            <div className="row">
              <div className="field">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="field">
                <label>State</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <h3 className="entries-title">My Entries</h3>

          {entries.map((_, index) => (
            <div className="entry-card" key={index}>
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="entry"
              />
              <div className="entry-info">
                <p className="date">Submitted Feb 15, 2026</p>
                <h4>Singing Contest</h4>
                <span className="status">Submitted</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Profile;