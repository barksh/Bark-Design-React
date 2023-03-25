/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu
 */

import * as React from "react";
import { MenuProps } from "./declare";
import { MenuStyledContainer } from "./styles/styled-container";

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {

    return (<MenuStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </MenuStyledContainer>);
};
