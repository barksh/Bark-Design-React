/**
 * @author WMXPY
 * @namespace Components_Callout
 * @description Callout
 */

import * as React from "react";
import { CalloutProps } from "./declare";
import { CalloutStyledContainer } from "./styles/styled-container";

export const Callout: React.FC<CalloutProps> = (props: CalloutProps) => {

    return (<CalloutStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </CalloutStyledContainer>);
};
