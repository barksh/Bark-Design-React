/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu Separator
 */

import * as React from "react";
import { Separator } from "../separator/separator";
import { MenuSeparatorProps } from "./declare";
import { MenuStyledMenuSeparatorContainer } from "./styles/styled-menu-separator-container";

export const MenuSeparator: React.FC<MenuSeparatorProps> = (props: MenuSeparatorProps) => {

    return (<MenuStyledMenuSeparatorContainer>
        <Separator
            size={props.size}
        />
    </MenuStyledMenuSeparatorContainer>);
};
