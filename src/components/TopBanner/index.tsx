import React from 'react';
import frame from './frame.png';
import dot from './dot.png';

const TopBanner = () => {
    return (
        <div className={'bg-[#101010] min-w-[385px] max-h-[54px] w-full flex overflow-hidden flex-row items-center bg-cover'}>
            <div className={'relative pl-2 w-[40%] sm:w-auto sm:left-0 left-[-55px]'}>
                <img className={'relative max-w-[212px] min-w-[212px] top-[65px]'} src={frame}></img>
            </div>
            <div className={'flex grow flex-row w-[55%] sm:w-auto z-10 whitespace-nowrap items-center justify-center'}>
                <span className={'text-white text-[16px] left-[-20px] sm:left-0 tracking-[0.048px] leading-[20px] font-semibold'}>Black Friday
                    <span className={'font-normal'}>
                        <span className={'inline-block font-semibold mr-1 md:hidden lg:inline-block'}>{' , '}</span>
                        <span className={'lg:inline-block hidden'}>24-27 Nov</span>
                    </span>
                </span>
                <img className={'mx-2 hidden md:block'} src={dot} alt={'dot'}/>
                <span
                    className={'text-[#D7A830] text-[16px] tracking-[-0.064px] leading-[20px] font-semibold'}>10%OFF</span>
                <img className={'mx-2 hidden md:block'} src={dot} alt={'dot'}/>
                <span className={'hidden md:inline-block text-white text-[16px] tracking-[0.048px] leading-[20px] font-normal'}>
                    <span className={'hidden md:inline-block'}>Use code</span>
                    <span
                        className={'text-[#D7A830] text-[16px] tracking-[0.048px] leading-[20px] font-semibold'}>{' 10FRIDAY '}</span>
                    <span className={'lg:inline-block hidden'}>at checkout</span>
                </span>
            </div>
            <div>
                <div className={'flex flex-row items-center justify-center'}>
                    {/*className={'block md:hidden ml-[18px] mr-6 cursor-pointer'}*/}

                    <button className={'hidden md:block w-[115px] h-[38px] rounded-[100px] bg-white cursor-pointer mr-6 lg:m-0'}>
                    <span
                        className={'text-[16px] leading-[17px] text-transparent bg-gradient-to-r from-black/60 to-30% to-black bg-clip-text'}>
                        Shop now
                    </span>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={'mr-[22px] sm:ml-[14px] cursor-pointer hidden lg:block'}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z"
                              fill="white" fill-opacity="0.3"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TopBanner;