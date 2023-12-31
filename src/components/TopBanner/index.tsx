import React from 'react';
import frame from './frame.png';
import SVG from "../SVG";

const TopBanner = () => {
    return (
        <div
            className={'bg-[#101010] text-white text-[16px] overflow-hidden flex items-center w-full min-w-[385px] h-[54px]'}>
            <div className={'relative pl-2 w-[40%] sm:w-auto sm:left-0 left-[-55px]'}>
                <img className={'relative max-w-[212px] min-w-[212px] top-[65px]'} src={frame}></img>
            </div>
            <div
                className={'z-10 whitespace-nowrap flex grow w-[55%] justify-center items-center leading-[20px] tracking-[0.048px]'}>
                <span className={'font-semibold left-[-20px] sm:left-0'}>
                    Black Friday
                    <span className={'inline-block mr-1 md:hidden lg:inline-block'}>{' , '}</span>
                        <span className={'lg:inline-block font-normal hidden'}>
                            24-27 Nov
                        </span>
                </span>
                <SVG type={'dot'} className={'mx-3 hidden md:block'}/>
                <span className={'text-[#D7A830] tracking-[-0.064px] font-semibold'}>
                    10%OFF
                </span>
                <SVG type={'dot'} className={'mx-3 hidden md:block'}/>
                <span className={'hidden md:inline-block font-normal'}>
                    <span className={'hidden md:inline-block'}>
                        Use code
                    </span>
                    <span className={'text-[#D7A830] font-semibold'}>{' 10FRIDAY '}</span>
                    <span className={'lg:inline-block hidden'}>
                        at checkout
                    </span>
                </span>
            </div>
            <div className={'flex items-center'}>
                <SVG type={'angle'} className={'block md:hidden cursor-pointer ml-[18px] mr-6'}/>
                <button
                    className={'hidden md:block w-[115px] h-[38px] rounded-[100px] bg-white cursor-pointer mr-6 lg:m-0'}>
                    <span
                        className={'leading-[17.6px] text-transparent bg-clip-text gradientText bg-gradient-to-r ' +
                            'from-black/50 to-40% to-black'}>
                        Shop now
                    </span>
                </button>
                <SVG type={'close'} className={'hidden lg:block cursor-pointer mr-[22px] sm:ml-[14px]'}/>
            </div>
        </div>
    )
}

export default TopBanner;