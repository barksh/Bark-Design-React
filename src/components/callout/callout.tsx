/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Callout
 */

import * as React from "react";
import { ContentBlock } from "../export";
import { CalloutProps } from "./declare";

export const Callout: React.FC<CalloutProps> = (props: CalloutProps) => {

    return (<ContentBlock
        size={props.size}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
        noBorder={props.noBorder}
    >
        {props.children}
    </ContentBlock>);
};
