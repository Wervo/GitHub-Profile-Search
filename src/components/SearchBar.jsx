import React from "react";

export default function SearchBar(){
    return(
        <div className="search-bar">
            <svg className="searchImg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#364153" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <input type="text" className="search-input"  placeholder="username"></input>
        </div>
    )
}