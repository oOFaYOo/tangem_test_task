import React, {useEffect, useRef, useState} from 'react';
import './index.css';
import BottomBanner from "./components/BottomBanner";
import TopBanner from "./components/TopBanner";

export function useOnScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
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

    let ref = useRef<HTMLDivElement>(null);
    let isBottomBannerVisible = !useOnScreen(ref);
    isBottomBannerVisible = ref.current ? isBottomBannerVisible : initialScroll > 108;
    // console.log(ref, isBottomBannerVisible)

    useEffect(()=>{
        console.log(window.scrollY)
        setInitialScroll(window.scrollY);
    },[])

    return (
        <div className='relative w-full h-[3000px]' style={{fontFamily: 'GraphikLC'}} id={'jj'}>
            <div className={'relative top-[54px]'} id={'topBannerArea'} ref={ref}>
                <TopBanner/>
            </div>
            {isBottomBannerVisible
                ?
                <div className={'fixed bottom-0 right-0 md:mr-[17px] lg:mr-[34px]'}>
                    <BottomBanner/>
                </div>
                : null
            }
        </div>
    );
}

export default App;
