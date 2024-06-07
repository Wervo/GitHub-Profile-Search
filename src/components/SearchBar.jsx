import React, { useEffect, useState } from "react";


export default function SearchBar({ setUserData }) {
    const [username, setUsername] = useState("");
    const [localUserData, setLocalUserData] = useState(null);
  
    const handleInput = (event) => {
      setUsername(event.target.value);
    };
  
    useEffect(() => {
      if (username) {
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
            setLocalUserData(data);  
          });
      }
    }, [username, setUserData]);

    return(
        <div className="search-bar">
            <svg className="searchImg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#364153" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <input type="text" className="search-input" placeholder="Username" onChange={handleInput}></input>

      {localUserData  && (
        <div className="profile-search visible">
          <div className="container-search">
            <img src={localUserData.avatar_url} alt="User Avatar" />
            <div className="container-info">
              <span>{localUserData .name}</span>
              <p>{localUserData .bio}</p>
            </div>
          </div>
        </div>
         )}
         </div>
    );
}

  
