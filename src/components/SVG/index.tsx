import React from "react";

const SVG = ({type, className=''}: { type: 'close'|'angle'|'dot', className?: string }) => {
    switch (type) {
        case 'close':
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.46967 16.4697C6.17678 16.7626 6.17678 17.2374 6.46967 17.5303C6.76256 17.8232 7.23744 17.8232 7.53033 17.5303L12 13.0607L16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L13.0607 12L17.5303 7.53033C17.8232 7.23744 17.8232 6.76256 17.5303 6.46967C17.2374 6.17678 16.7626 6.17678 16.4697 6.46967L12 10.9393L7.53033 6.46967C7.23744 6.17678 6.76256 6.17678 6.46967 6.46967C6.17678 6.76256 6.17678 7.23744 6.46967 7.53033L10.9393 12L6.46967 16.4697Z"
                              fill="white" fill-opacity="0.3"/>
                    </svg>
                </>
            );
        case 'angle':
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className={className}>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.8373 22.8105C11.1302 23.1034 11.6051 23.1034 11.898 22.8105L19.1621 15.5463C19.2981 15.4104 19.3709 15.2352 19.3807 15.0573C19.4058 14.8378 19.3342 14.6094 19.1659 14.441L11.902 7.17716C11.6092 6.88427 11.1343 6.88427 10.8414 7.17717C10.5485 7.47006 10.5485 7.94493 10.8414 8.23783L17.5954 14.9918L10.8373 21.7498C10.5445 22.0427 10.5445 22.5176 10.8373 22.8105Z"
                              fill="#D9D9D9" fill-opacity="0.4"/>
                    </svg>
                </>
            )
        case 'dot':
            return (
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none" className={className}>
                        <circle cx="1.5" cy="2" r="1.5" fill="white" fill-opacity="0.15"/>
                    </svg>
                </>
            )
        default: {
            return null
        }
    }
}
export default SVG;