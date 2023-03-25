/**
 * @author WMXPY
 * @namespace Components_Menu_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { MenuProps } from "../declare";

export const MenuStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: ${(props: BarkThemeProps<MenuProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        height: ${(props: BarkThemeProps<MenuProps>) => {
            if (props.maximize) {
                return "100%";
            }
            return "fit-content";
        }};
        border: ${(props: BarkThemeProps<MenuProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-right: ${(props: BarkThemeProps<MenuProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
`;
