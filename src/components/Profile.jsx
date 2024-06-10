import React from "react";

export default function Profile({ userData }) {
  if (!userData) {
    return (
      <div className="profile-container">
        <div className="profileImg-container">
          <img
            className="profileImg"
            src="./image/github-svgrepo-com.png"
            alt="Default Avatar"
          />
          <div className="bio">
            <h3>GitHub</h3>
            <span>How people build software.</span>
          </div>
        </div>
        <div className="profile-info">
<div className="followers">
  <span>Followers</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>27839</p>
</div>

<div className="following">
  <span>Following</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>0</p>
</div>

<div className="location">
  <span>Location</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>San Francisco,CA</p>
</div>
</div>
      </div>
    )};

  return (
    <div className="profile-container">
      <div className="profileImg-container">
        <img
          className="profileImg"
          src={userData.avatar_url}
          alt="User Avatar"
        />
        <div className="bio">
          <h3>{userData.name}</h3>
          <span>{userData.bio}</span>
        </div>
      </div>
      <div className="profile-info">
<div className="followers">
  <span>Followers</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>{userData.followers}</p>
</div>

<div className="following">
  <span>Following</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>{userData.following}</p>
</div>

<div className="location">
  <span>Location</span>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Line_Xl"> <path id="Vector" d="M12 21V3" stroke="#20293A" stroke-width="0.696" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
  <p>{userData.location}</p>
</div>
</div>
    </div>
  );
}