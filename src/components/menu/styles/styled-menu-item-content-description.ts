/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Content Description
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { MenuItemProps } from "../declare";

export const MenuStyledMenuItemContentDescription: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
        font-size: ${(props: BarkThemeProps<MenuItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
