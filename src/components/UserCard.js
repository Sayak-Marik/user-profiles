import React from "react";
import "../App.css";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="profile-pic"> 👤 </div> <h3> {user.name} </h3>{" "}
      <p> {user.role} </p> <p className="location"> {user.location} </p>{" "}
      <button className="contact-btn"> Contact </button>{" "}
    </div>
  );
}

export default UserCard;