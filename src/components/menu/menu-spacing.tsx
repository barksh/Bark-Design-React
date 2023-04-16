/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu Spacing
 */

import * as React from "react";
import { Spacing } from "../spacing/spacing";
import { MenuSpacingProps } from "./declare";
import { MenuStyledMenuSpacingContainer } from "./styles/styled-menu-spacing-container";

export const MenuSpacing: React.FC<MenuSpacingProps> = (props: MenuSpacingProps) => {

    return (<MenuStyledMenuSpacingContainer>
        <Spacing
            size={props.size}
        />
    </MenuStyledMenuSpacingContainer>);
};
