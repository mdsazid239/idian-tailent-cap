import React from "react";

const Profile = () => {
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
          padding: 20px;
        }

        .profile-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          padding: 25px;
          border-radius: 20px;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          position: relative;
        }

        .profile-img {
          width: 90px;
          height: 90px;
          margin: auto;
          margin-top: -70px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #fff;
        }

        .profile-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .name {
          text-align: center;
          margin: 10px 0 20px;
        }

        .form-section label {
          font-size: 12px;
          display: block;
          margin-top: 10px;
        }

        .form-section input {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: none;
          margin-top: 5px;
          background: rgba(255, 255, 255, 0.7);
        }

        .row {
          display: flex;
          gap: 10px;
        }

        .field {
          width: 100%;
        }

        .entries-title {
          margin-top: 20px;
        }

        .entry-card {
          display: flex;
          gap: 12px;
          background: rgba(255, 255, 255, 0.2);
          padding: 10px;
          border-radius: 12px;
          margin-top: 12px;
          align-items: center;
        }

        .entry-card img {
          width: 65px;
          height: 65px;
          border-radius: 10px;
          object-fit: cover;
        }

        .entry-info h4 {
          margin-top: 3px;
        }

        .date {
          font-size: 10px;
        }

        .status {
          background: #d69a3b;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 10px;
          display: inline-block;
          margin-top: 5px;
        }

        @media (max-width: 500px) {
          .profile-card {
            max-width: 95%;
            padding: 20px;
          }

          .row {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="profile-container">
        <div className="profile-card">

          {/* Profile Image */}
          <div className="profile-img">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
            />
          </div>

          <h2 className="name">Hari Shetty</h2>

          {/* Form */}
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

          {/* Entries */}
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