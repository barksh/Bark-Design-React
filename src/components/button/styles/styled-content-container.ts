/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { ButtonProps } from "../declare";

export const ButtonStyledContentContainer: StyledComponent<"div", BarkThemeProps, ButtonProps> =
    styled.div`
        flex: 1;
        text-align: start;
        display: flex;
        flex-direction: column;
        align-items: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.square) {
                return "center";
            }
            return "flex-start";
        }};
        justify-content: center;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        padding: ${(props: BarkThemeProps<ButtonProps>) => {
            if (props.noPadding) {
                return "0px";
            }

            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 6px";
                case 'regular': return "4px 8px";
                case 'large': return "4px 12px";
            }
        }};
`;
