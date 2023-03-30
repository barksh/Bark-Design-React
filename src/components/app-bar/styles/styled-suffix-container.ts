/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { AppBarProps } from "../declare";

export const AppBarStyledSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        margin: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 4px";
                case 'regular': return "4px 5px";
                case 'large': return "4px 6px";
            }
        }};
        font-size: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "16px";
                case 'large': return "20px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
