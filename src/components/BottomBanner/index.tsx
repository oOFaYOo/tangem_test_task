import React from 'react';
import frame from './frame.png';

const BottomBanner = () => {
    return (
        <div className={'w-[600px] h-[349px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl pr-[15px] flex flex-col justify-between items-end'}
            style={{ backgroundImage: `url(${frame})`}}>
            <div className={'flex flex-row justify-end flex grow w-full pt-[15px]'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={'cursor-pointer'}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z" fill="white" fill-opacity="0.3"/>
                </svg>
            </div>
            <div className={'relative grow w-[256px] float-right flex flex-col items-center justify-end mr-[15px]'}>
                <span className={'text-white text-[46px] tracking-[-1.84px] leading-[50px] mb-[25px]'}>Black Friday</span>
                <span className={'bg-gradient-to-r from-[#7D5317] to-[#EDDF95] bg-clip-text text-transparent text-[46px] leading-[44px] tracking-[-1.6px] mb-[14px]'}>
                    10%OFF
                </span>
                <span className={'text-[#6C6C70] text-[16px] tracking-[0.08px] leading-[20px] mb-[40px]'}>Use code
                    <span className={'text-[#D7A830]'}>
                        {' 10FRIDAY '}
                    </span>at checkout
                </span>
                <span className={'text-white rounded-[14px] bg-white/10 text-[16px] tracking-[0.025px] leading-[17px] mb-[55px] px-[24px] py-[12px]'}>Shop now through Monday</span>
            </div>
        </div>
    )
}

export default BottomBanner;