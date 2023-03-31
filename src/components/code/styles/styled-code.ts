/**
 * @author WMXPY
 * @namespace Components_Code_Styles
 * @description Styled Code
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { CodeProps } from "../declare";

export const CodeStyledCode: StyledComponent<"code", BarkThemeProps, any> =
    styled.code`
        display: block;
        word-break: ${(props: BarkThemeProps<CodeProps>) => {
            if (props.wrap) {
                return 'break-all';
            }
            return 'normal';
        }};
        white-space: ${(props: BarkThemeProps<CodeProps>) => {
            if (props.wrap) {
                return 'pre-wrap';
            }
            return 'pre';
        }};
`;
