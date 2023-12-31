import {MouseEventHandler} from "react";

export interface ISVG {
    type: 'close'|'angle'|'dot';
    className?: string;
    onClick?:MouseEventHandler<SVGSVGElement>;
}

