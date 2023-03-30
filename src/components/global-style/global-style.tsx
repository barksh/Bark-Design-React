/**
 * @author WMXPY
 * @namespace Components_GlobalStyle
 * @description Global Style
 */

import * as React from "react";
import { GlobalStyleCode } from "./styles/code";
import { GlobalStyleCommon } from "./styles/common";
import { GlobalStyleScrollBar } from "./styles/scroll-bar";

export const GlobalStyle: React.FC = () => {

    return (<React.Fragment>
        <GlobalStyleCommon />
        <GlobalStyleCode />
        <GlobalStyleScrollBar />
    </React.Fragment>);
};
