/**
 * @author WMXPY
 * @namespace Layouts_Centered
 * @description Centered
 */

import * as React from "react";
import { CenteredLayoutProps } from "./declare";
import { CenteredLayoutStyledContainer } from "./styles/styled-container";

export const CenteredLayout: React.FC<CenteredLayoutProps> = (props: CenteredLayoutProps) => {

    return (<CenteredLayoutStyledContainer>
        {props.children}
    </CenteredLayoutStyledContainer>);
};
