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

function App() {

    const [initialScroll, setInitialScroll] = useState(0);
    const [bottomBannerClosed, setBottomBannerClosed] = useState<boolean>(localStorage.bottomBannerClosed === undefined ? false : localStorage.bottomBannerClosed);
    const [topBannerClosed, setTopBannerClosed] = useState<boolean>(localStorage.topBannerClosed === undefined ? false : localStorage.topBannerClosed);

    let ref = useRef<HTMLDivElement>(null);

    let isBottomBannerVisible = !useOnScreen(ref);
    isBottomBannerVisible = ref.current ? isBottomBannerVisible : initialScroll > 108;

    useEffect(() => {
        setInitialScroll(window.scrollY);
    }, [])

    return (
        <div className='relative w-full h-[3000px]' style={{fontFamily: 'GraphikLC'}} id={'jj'}>
            {
                topBannerClosed
                    ? null
                    :
                    <div className={'relative top-[54px]'} id={'topBannerArea'} ref={ref}>
                        <TopBanner onClose={setTopBannerClosed}/>
                    </div>
            }
            {
                isBottomBannerVisible && !bottomBannerClosed
                    ?
                    <div className={'fixed bottom-0 right-0 md:mr-[17px] lg:mr-[34px]'}>
                        <BottomBanner onClose={setBottomBannerClosed}/>
                    </div>
                    : null
            }
        </div>
    );
}

export default App;
