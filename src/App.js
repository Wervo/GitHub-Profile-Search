import React, { useState } from 'react';
import Header from './components/Header'; 
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Main from "./components/Main";
import "./index.css";

function App() {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [ setUsername] = useState("");

    return (
           <div className="App">
            <Header />
            <SearchBar setUserData={setUserData} setRepos={setRepos} setUsername={setUsername} />
            <Profile userData={userData} />
            <Main repos={repos} username={userData ? userData.login : null} />
        </div>
    );
}

export default App;