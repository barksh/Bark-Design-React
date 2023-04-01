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

    return (<ContentBlock
        size={props.size}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
        noBorder={props.noBorder}
        balancedBorder={props.balancedBorder}
    >
        <MenuStyledContainer
            size={props.size}
        >
            <MenuItemContext.Provider
                value={{
                    size: props.size,
                }}
            >
                {props.children}
            </MenuItemContext.Provider>
        </MenuStyledContainer>
    </ContentBlock>);
};
