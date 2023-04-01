/**
 * @author WMXPY
 * @namespace Layouts_Navigation
 * @description Navigation
 */

import * as React from "react";
import { NavigationLayoutProps } from "./declare";
import { NavigationLayoutStyledContainer } from "./styles/styled-container";
import { NavigationLayoutStyledNavigation } from "./styles/styled-navigation";
import { NavigationLayoutStyledContent } from "./styles/styled-content";

export const NavigationLayout: React.FC<NavigationLayoutProps> = (props: NavigationLayoutProps) => {

    return (<NavigationLayoutStyledContainer>
        <NavigationLayoutStyledNavigation>
            {props.navigation}
        </NavigationLayoutStyledNavigation>
        <NavigationLayoutStyledContent>
            {props.children}
        </NavigationLayoutStyledContent>
    </NavigationLayoutStyledContainer>);
};
