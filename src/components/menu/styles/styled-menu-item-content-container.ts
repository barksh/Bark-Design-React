/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Menu Item Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { MenuItemProps } from "../declare";

export const MenuStyledMenuItemContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: ${(props: BarkThemeProps<MenuItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 6px";
                case 'regular': return "4px 8px";
                case 'large': return "4px 12px";
            }
        }};
`;
