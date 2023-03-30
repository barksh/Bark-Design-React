/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Children
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { MenuStyledMenuItemContainer } from "./styled-menu-item-container";

export const MenuStyledMenuItemChildren: StyledComponent<"ul", BarkThemeProps, any> =
    styled.ul`
        list-style: none;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        ${MenuStyledMenuItemContainer} {
            border-bottom: 1px solid ${(props: any) => {
            return props.theme.borderColor.primary;
        }};
            :last-child {
                border-bottom: none;
            }
        }
        border-top: 1px solid ${(props: any) => {
            return props.theme.borderColor.primary;
        }};
        :first-child {
            border-top: none;
        }
`;
