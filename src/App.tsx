import React from 'react';
import './App.css';
import './index.css';
import BottomBanner from "./components/BottomBanner";
import TopBanner from "./components/TopBanner";

function App() {
    return (
        <div className='relative w-full h-[3000px]' style={{fontFamily: 'GraphikLC'}}>
            <div className={'relative top-[54px]'}><TopBanner/></div>
            <div className={'fixed w-full sm:w-auto bottom-0 right-0 mx-0 md:mr-[17px] lg:mr-[34px]'}><BottomBanner/></div>
        </div>
    );
}

export default App;
