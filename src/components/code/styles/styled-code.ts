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
        word-break: ${(props: BarkThemeProps<CodeProps, {
        readonly shouldWrap?: boolean;
    }>) => {
            if (props.shouldWrap) {
                if (props.break) {
                    return 'break-all';
                }
                return 'break-word';
            }
            return 'normal';
        }};
        white-space: ${(props: BarkThemeProps<CodeProps, {
            readonly shouldWrap?: boolean;
        }>) => {
            if (props.shouldWrap) {
                return 'pre-wrap';
            }
            return 'pre';
        }};
`;
