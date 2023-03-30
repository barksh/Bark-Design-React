/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { MenuItemProps } from "../declare";

export const MenuStyledMenuItemContainer: StyledComponent<"li", BarkThemeProps, any> =
    styled.li`
        height: 100%;
        border-bottom: ${(props: BarkThemeProps<MenuItemProps>) => {
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
            border-bottom: none;
        }
`;
