/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Children
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { MenuStyledMenuItemContainer } from "./styled-menu-item-container";

export const MenuStyledMenuItemChildren: StyledComponent<"ul", BarkThemeProps, any> =
    styled.ul`
        list-style: none;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        ${MenuStyledMenuItemContainer} {
            ${parseLogicalCSSProperty("border-bottom")}: 1px solid ${(props: any) => {
            return props.theme.borderColor.primary;
        }};
            :last-child {
                ${parseLogicalCSSProperty("border-bottom")}: none;
            }
        }
        ${parseLogicalCSSProperty("border-top")}: 1px solid ${(props: any) => {
            return props.theme.borderColor.primary;
        }};
        :first-child {
            ${parseLogicalCSSProperty("border-top")}: none;
        }
`;
