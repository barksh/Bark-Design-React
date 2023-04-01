/**
 * @author WMXPY
 * @namespace Layouts_Navigation
 * @description Navigation
 */

import * as React from "react";
import { NavigationLayoutProps } from "./declare";
import { NavigationLayoutStyledContainer } from "./styles/styled-container";

export const NavigationLayout: React.FC<NavigationLayoutProps> = (props: NavigationLayoutProps) => {

    return (<NavigationLayoutStyledContainer>
        {props.children}
    </NavigationLayoutStyledContainer>);
};
