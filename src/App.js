import React, {useState} from 'react';
import Header from './components/Header'; 
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import Main from "./Main";

function App() {
    const [userData, setUserData] = useState(null);
    return (
        <div className="App">
            <Header />
            <SearchBar setUserData={setUserData} />
            <Profile userData={userData} />
            <Main />
        </div>
    );
}

export default App;