import React, { useEffect, useState } from "react";

export default function SearchBar({ setUserData, setRepos }) {
  const fetchUserData = async (url, token) => {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`
      }
    });
  
    const data = await response.json();
    return data;
  };

  const [username, setUsername] = useState("");
  const [localUserData, setLocalUserData] = useState(null);

  const handleInput = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (username) {
      const token = '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';
      const userUrl = `https://api.github.com/users/${username}`;

      fetchUserData(userUrl, token)
        .then((userData) => {
          setUserData(userData);
          setLocalUserData(userData);
          return fetchUserData(userData.repos_url, token);
        })
        .then((repos) => {
          setRepos(repos);
        })
    } 
  }, [username, setUserData, setRepos]);

  const handleClick = () => {
    setLocalUserData(null);
  };

  return (
    <div className="search-bar">
      <svg className="searchImg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#364153" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <input type="text" className="search-input" placeholder="Username" onChange={handleInput} />

      {localUserData && (
        <div onClick={handleClick} className="profile-search visible">
          <div className="container-search">
            <img src={localUserData.avatar_url} alt="User Avatar" />
            <div className="container-info">
              <span>{localUserData.name}</span>
              <p>{localUserData.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}