/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Migration Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { MenuItemProps } from "../declare";

const getBasePaddingLeft = (props: BarkThemeProps<MenuItemProps>): number => {

    const fixedSize = fixSizeProps(props.size);
    switch (fixedSize) {
        case 'small': return 4;
        case 'regular': return 6;
        case 'large': return 8;
    }
};

export const MenuStyledMenuItemMigrationContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        flex: 1;
        padding: ${(props: BarkThemeProps<MenuItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 4px";
                case 'regular': return "3px 6px";
                case 'large': return "4px 8px";
            }
        }};
        ${parseLogicalCSSProperty("padding-left")}: ${(props: BarkThemeProps<MenuItemProps>) => {
            const base: number = getBasePaddingLeft(props);
            const levelMigration: number = typeof props.level === 'number'
                ? props.level * base
                : 0;
            return `${base + levelMigration}px`;
        }};
`;
