/**
 * @author WMXPY
 * @namespace Components_Menu
 * @description Menu Item
 */

import * as React from "react";
import { Button } from "../button/button";
import { ButtonProps } from "../button/declare";
import { MenuItemContext, useMenuItemContext } from "./context/menu-item";
import { MenuItemProps } from "./declare";
import { MenuStyledMenuItemChildren } from "./styles/styled-menu-item-children";
import { MenuStyledMenuItemContainer } from "./styles/styled-menu-item-container";
import { MenuStyledMenuItemContentContainer } from "./styles/styled-menu-item-content-container";
import { MenuStyledMenuItemContentDescription } from "./styles/styled-menu-item-content-description";
import { MenuStyledMenuItemContentTitle } from "./styles/styled-menu-item-content-title";
import { MenuStyledMenuItemMigrationContainer } from "./styles/styled-menu-item-migration-container";
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

const MenuItemChildren: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const nextLevel: number = typeof props.level === 'number' ? props.level + 1 : 1;

    if (props.children) {
        return (<MenuItemContext.Provider
            value={{
                size: props.size,
                level: nextLevel,
            }}
        >
            <MenuStyledMenuItemChildren>
                {props.children}
            </MenuStyledMenuItemChildren>
        </MenuItemContext.Provider>);
    }
    return null;
};

const getClickDiverseComponent = (props: MenuItemProps): React.FC<ButtonProps> => {

    if (typeof props.onClick === 'function') {
        return Button;
    }

    return (newComponentProps: any) => {
        return (<React.Fragment>
            {newComponentProps.children}
        </React.Fragment>);
    };
};

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const enrichedProps: MenuItemProps = useMenuItemContext(props);
    const ClickDiverseComponent: React.FC<ButtonProps> =
        getClickDiverseComponent(enrichedProps);

    return (<MenuStyledMenuItemContainer
        size={enrichedProps.size}
        noSeparator={enrichedProps.noSeparator}
    >
        <ClickDiverseComponent
            noBorder={true}
            maximizeWidth={true}
            noPadding={true}
            noPrefixPadding={true}
            noSuffixPadding={true}
            onClick={enrichedProps.onClick}
        >
            <MenuStyledMenuItemContentContainer
                size={enrichedProps.size}
                hasOnClick={Boolean(enrichedProps.onClick)}
            >
                <MenuItemPrefix
                    {...enrichedProps}
                />
                <MenuStyledMenuItemMigrationContainer
                    size={enrichedProps.size}
                    level={enrichedProps.level}
                >
                    <MenuStyledMenuItemContentTitle>
                        {enrichedProps.title}
                    </MenuStyledMenuItemContentTitle>
                    <MenuItemDescription
                        {...enrichedProps}
                    />
                </MenuStyledMenuItemMigrationContainer>
                <MenuItemSuffix
                    {...enrichedProps}
                />
            </MenuStyledMenuItemContentContainer>
        </ClickDiverseComponent>
        <MenuItemChildren
            {...enrichedProps}
        />
    </MenuStyledMenuItemContainer>);
};
