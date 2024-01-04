import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import BottomBanner from "./components/BottomBanner";
import TopBanner from "./components/TopBanner";

export function useOnScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current)
            return;

        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
}

function useRenderCount() {
    const ref = useRef(0);
    const renderCount = ref.current;
    ref.current++;
    return renderCount;
}

function App() {

    const [initialScroll, setInitialScroll] = useState(0);
    const [bottomBannerClosed, setBottomBannerClosed] = useState<boolean>(localStorage.bottomBannerClosed === undefined ? false : localStorage.bottomBannerClosed);
    const [topBannerClosed, setTopBannerClosed] = useState<boolean>(localStorage.topBannerClosed === undefined ? false : localStorage.topBannerClosed);

    let ref = useRef<HTMLDivElement>(null);

    const isTopBannerVisible = useOnScreen(ref);
    const renderCount = useRenderCount();
    const isBottomBannerVisible = ref.current ? !isTopBannerVisible : initialScroll >= 108;

    useEffect(() => {
        setInitialScroll(window.scrollY);
    }, [])

    return (
        <div className='relative w-full h-[3000px]' style={{fontFamily: 'GraphikLC'}}>
            {
                topBannerClosed
                    ? null
                    :
                    <div className={'relative top-[54px]'} ref={ref}>
                        <TopBanner onClose={setTopBannerClosed}/>
                    </div>
            }
            {
                bottomBannerClosed || (renderCount <= 2 && initialScroll <= 108)
                    ? null
                    : isBottomBannerVisible
                        ?
                        <div className={'slideIn fixed right-0 md:mr-[17px] lg:mr-[34px]'}>
                            <BottomBanner onClose={setBottomBannerClosed}/>
                        </div>
                        :
                        <div className={'slideOut fixed right-0 md:mr-[17px] lg:mr-[34px]'}>
                            <BottomBanner onClose={setBottomBannerClosed}/>
                        </div>
            }
        </div>
    );
}

export default App;
