/**
 * @author WMXPY
 * @namespace Components_Code_Styles
 * @description Styled Pre
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { CodeProps } from "../declare";

export const CodeStyledPre: StyledComponent<"pre", BarkThemeProps, any> =
    styled.pre`
        position: relative;
        padding: ${(props: BarkThemeProps<CodeProps>) => {
            if (props.noPadding) {
                return "0px";
            }
            return "auto";
        }};
        margin: ${(props: BarkThemeProps<CodeProps>) => {
            if (props.noMargin) {
                return "0px";
            }
            return "revert";
        }};
        border: ${(props: BarkThemeProps<CodeProps>) => {
            if (props.noBorder) {
                return "0px";
            }
            return "auto";
        }};
`;
