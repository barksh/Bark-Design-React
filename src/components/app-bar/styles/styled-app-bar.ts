/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled App Bar
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { AppBarProps } from "../declare";

export const AppBarStyledAppBar: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
        border-top: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }} solid ${(props: BarkThemeProps<AppBarProps>) => {
            return props.theme.borderColor.primary;
        }};
        font-size: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "24px";
                case 'large': return "32px";
            }
        }};
`;
