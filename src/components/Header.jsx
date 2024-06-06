import React from 'react';
import SearchBar from './SearchBar';
export default function Header() {
    return (
            <div className="header-container">
            <img className="heroimage" src="./image/hero-image-github-profile.png" alt="Hero" />
            <div className="search-container">
                <SearchBar/>
            </div>
        </div>
    );
}
