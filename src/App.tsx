import React from 'react';
import './App.css';
import './index.css';
import Banner from "./components/Banner";

function App() {
    return (
        <div className='relative w-full h-[3000px]'>
            <div className={'w-full'}></div>
            <div className={'fixed bottom-0 right-0 mr-[34px]'}><Banner/></div>
        </div>
    );
}

export default App;
