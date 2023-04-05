/**
 * @author WMXPY
 * @namespace Components_SpinnerRectangle_Styles
 * @description Styled Core Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { SpinnerRectangleProps } from "../declare";

export const SpinnerRectangleStyledCoreContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.8s all ease-in-out;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        margin: ${(props: BarkThemeProps<SpinnerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "24px";
                case 'large': return "48px";
            }
        }};
`;
