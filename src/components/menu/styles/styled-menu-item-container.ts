/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { MenuItemProps } from "../declare";

export const MenuStyledMenuItemContainer: StyledComponent<"li", BarkThemeProps, any> =
    styled.li`
        ${parseLogicalCSSProperty("height")}: 100%;
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<MenuItemProps>) => {
            if (props.noSeparator) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps<MenuItemProps>) => {
            return props.theme.borderColor.primary;
        }};
        :last-child {
            ${parseLogicalCSSProperty("border-bottom")}: none;
        }
`;
