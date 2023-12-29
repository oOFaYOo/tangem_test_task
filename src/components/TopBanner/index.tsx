import React from 'react';
import frame_desktop from './frame_desktop.png';
import dot from './dot.png';

const TopBanner = () => {
    return (
        <div className={'bg-[#0B0B0B] h-[54px] w-full flex flex-row items-center justify-between'}>
            <img src={frame_desktop} className={'ml-2'} alt={'black friday gifts'}/>
            <div className={'flex flex-row items-center justify-center'}>
                <span className={'text-white text-[16px] tracking-[0.048px] leading-[20px] font-semibold'}>Black Friday
                    <span className={'font-normal'}>, 24-27 Nov</span>
                </span>
                <img className={'mx-2'} src={dot} alt={'dot'}/>
                <span
                    className={'text-[#D7A830] text-[16px] tracking-[-0.064px] leading-[20px] font-semibold'}>10%OFF</span>
                <img className={'mx-2'} src={dot} alt={'dot'}/>
                <span className={'text-white text-[16px] tracking-[0.048px] leading-[20px] font-normal'}>Use code
                    <span
                        className={'text-[#D7A830] text-[16px] tracking-[0.048px] leading-[20px] font-semibold'}>{' 10FRIDAY '}</span>
                    at checkout
                </span>
            </div>
            <div>
                <div className={'flex flex-row items-center justify-center'}>
                    <button className={'w-[115px] h-[38px] rounded-[100px] bg-white cursor-pointer'}
                    >
                    <span
                        className={'text-[16px] leading-[17px] text-transparent bg-gradient-to-r from-black/60 to-30% to-black bg-clip-text'}>
                        Shop now
                    </span>
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={'mr-[22px] ml-[14px] cursor-pointer'}>
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