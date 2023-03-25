/**
 * @author WMXPY
 * @namespace Components_Menu_Context
 * @description Menu Item
 */

import * as React from "react";
import { MenuItemProps } from "../declare";

export const MenuItemContext: React.Context<Partial<MenuItemProps>> =
    React.createContext<Partial<MenuItemProps>>({
    });

export const useMenuItemContext = (props: MenuItemProps): MenuItemProps => {

    const context: Partial<MenuItemProps> = React.useContext(MenuItemContext);
    const enrichedProps: MenuItemProps = {
        ...context,
        ...props,
    };

    return enrichedProps;
};
