import React from 'react';
import Header from './components/Header'; // Ensure the path is correct
import Profile from "./components/Profile";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Main />
        </div>
    );
}

export default App;