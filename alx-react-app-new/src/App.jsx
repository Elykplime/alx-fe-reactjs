import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
    return (
        <div className="App">
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Counter />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}

export default App;