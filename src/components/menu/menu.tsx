/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu
 */

import * as React from "react";
import { ContentBlock } from "../export";
import { MenuItemContext } from "./context/menu-item";
import { MenuProps } from "./declare";
import { MenuStyledContainer } from "./styles/styled-container";

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {

    return (<MenuItemContext.Provider
        value={{
            size: props.size,
        }}
    >
        <ContentBlock
            size={props.size}
            maximize={props.maximize}
            noBorder={props.noBorder}
            balancedBorder={props.balancedBorder}
        >
            <MenuStyledContainer
                size={props.size}
            >
                {props.children}
            </MenuStyledContainer>
        </ContentBlock>
    </MenuItemContext.Provider>);
};
