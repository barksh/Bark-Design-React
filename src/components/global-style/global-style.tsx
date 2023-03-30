/**
 * @author WMXPY
 * @namespace Components_GlobalStyle
 * @description Global Style
 */

import * as React from "react";
import { GlobalStyleCode } from "./styles/code";
import { GlobalStyleCommon } from "./styles/common";
import { GlobalStyleFullHeight } from "./styles/full-height";
import { GlobalStyleScrollBar } from "./styles/scroll-bar";

export const GlobalStyle: React.FC = () => {

    return (<React.Fragment>
        <GlobalStyleCommon />
        <GlobalStyleCode />
        <GlobalStyleFullHeight />
        <GlobalStyleScrollBar />
    </React.Fragment>);
};
