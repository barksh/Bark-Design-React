/**
 * @author WMXPY
 * @namespace Components__Styles
 * @description Styled Header Button
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { Button } from "../../button/button";
import { PaginationProps } from "../declare";

export const PaginationStyledHeaderButton: StyledComponent<typeof Button, BarkThemeProps, any> =
    styled(Button)`
        position: relative;
        overflow: hidden;
        :after {
            transition: all 0.2s;
            content: '';
            display: block;
            position: absolute;
            background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
            ${parseLogicalCSSProperty("width")}: 100%;
            ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<PaginationProps, {
            readonly activated: boolean;
        }>) => {
            if (!props.activated) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "3px";
                case 'regular': return "3px";
                case 'large': return "5px";
            }
        }};
            ${parseLogicalCSSProperty("bottom")}: 0px;
        }
        :hover:after {
            ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<PaginationProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "5px";
                case 'regular': return "5px";
                case 'large': return "7px";
            }
        }};
            ${parseLogicalCSSProperty("bottom")}: 0px;
        }
`;
