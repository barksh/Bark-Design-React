/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu Item
 */

import * as React from "react";
import { useMenuItemContext } from "./context/menu-item";
import { MenuItemProps } from "./declare";
import { MenuStyledMenuItemContainer } from "./styles/styled-menu-item-container";
import { MenuStyledMenuItemContentContainer } from "./styles/styled-menu-item-content-container";
import { MenuStyledMenuItemContentDescription } from "./styles/styled-menu-item-content-description";
import { MenuStyledMenuItemContentTitle } from "./styles/styled-menu-item-content-title";
import { MenuStyledMenuItemPrefix } from "./styles/styled-menu-item-prefix";
import { MenuStyledMenuItemSuffix } from "./styles/styled-menu-item-suffix";

const MenuItemPrefix: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    if (props.prefix) {
        return (<MenuStyledMenuItemPrefix
            size={props.size}
        >
            {props.prefix}
        </MenuStyledMenuItemPrefix>);
    }
    return null;
};

const MenuItemSuffix: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    if (props.suffix) {
        return (<MenuStyledMenuItemSuffix
            size={props.size}
        >
            {props.suffix}
        </MenuStyledMenuItemSuffix>);
    }
    return null;
};

const MenuItemDescription: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    if (props.description) {
        return (<MenuStyledMenuItemContentDescription>
            {props.description}
        </MenuStyledMenuItemContentDescription>);
    }
    return null;
};

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const enrichedProps: MenuItemProps = useMenuItemContext(props);

    return (<MenuStyledMenuItemContainer>
        <MenuItemPrefix
            {...enrichedProps}
        />
        <MenuStyledMenuItemContentContainer>
            <MenuStyledMenuItemContentTitle>
                {enrichedProps.title}
            </MenuStyledMenuItemContentTitle>
            <MenuItemDescription
                {...enrichedProps}
            />
        </MenuStyledMenuItemContentContainer>
        <MenuItemSuffix
            {...enrichedProps}
        />
    </MenuStyledMenuItemContainer>);
};
