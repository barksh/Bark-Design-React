/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu Item
 */

import * as React from "react";
import { useMenuItemContext } from "./context/menu-item";
import { MenuItemProps } from "./declare";
import { MenuStyledMenuItemContainer } from "./styles/styled-menu-item-container";

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const enrichedProps: MenuItemProps = useMenuItemContext(props);

    return (<MenuStyledMenuItemContainer>
        {enrichedProps.children}
    </MenuStyledMenuItemContainer>);
};
