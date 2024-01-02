import React, {Dispatch} from 'react';
import frame from './frame.png';
import SVG from "../SVG";

const BottomBanner = ({onClose}: { onClose: Dispatch<boolean> }) => {
    return (
        <div
            className={'bg-gradient-to-b from-[#121212] via-[#070707] via-70% to-[#111111] flex flex-col sm:rounded-2xl ' +
                'h-[349px] sm:w-[600px] min-w-[385px] w-[100vw] text-[16px]'}>
            <img className={'absolute z-0 w-full h-full sm:rounded-2xl sm:left-0 left-[-170px] min-w-[600px]'}
                 src={frame}>
            </img>
            <div className={'flex justify-end pt-[15px] pr-[15px] z-10'}>
                <SVG type={'close'} className={'cursor-pointer'} onClick={() => {
                    localStorage.bottomBannerClosed = true;
                    onClose(true);
                }}/>
            </div>
            <div
                className={'relative text-white z-10 flex flex-col items-center justify-end grow sm:ml-auto sm:mr-[35px]'}>
                <span
                    className={'text-[46px] tracking-[-1.84px] leading-[50.6px] mb-[25px]'}>
                    Black Friday
                </span>
                <span
                    className={'bg-gradient-to-r from-[#7D5317] to-[#EDDF95] bg-clip-text text-transparent ' +
                        'text-[40px] leading-[44px] tracking-[-1.6px] mb-[14px] gradientText'}>
                    10%OFF
                </span>
                <span className={'text-[#6C6C70] tracking-[0.08px] leading-[20.8px] mb-[40px]'}>
                    Use code
                    <span className={'text-[#D7A830]'}>{' 10FRIDAY '}</span>
                    at checkout
                </span>
                <span
                    className={'rounded-[14px] cursor-pointer bg-white/10 tracking-[0.08px] leading-[17.6px] mb-[55px] px-[24px] py-[12px]'}>
                    {'Shop now '}
                    <span className={'sm:inline-block hidden'}>
                        through Monday
                    </span>
                </span>
            </div>
        </div>
    )
}

export default BottomBanner;