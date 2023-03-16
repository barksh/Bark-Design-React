/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled Suffix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { AppBarProps } from "../declare";

export const AppBarStyledSuffixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding-top: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "4px";
                case 'large': return "4px";
            }
        }};
        padding-left: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "5px";
                case 'large': return "6px";
            }
        }};
`;
