/**
 * @author WMXPY
 * @namespace Components_Input_Styles
 * @description Styled Input Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CommonInputProps } from "../declare";

export const InputStyledInputContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<CommonInputProps>) => {
            if (props.maximize || props.maximizeWidth) {
                return '100%';
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "384px";
            }
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<CommonInputProps>) => {
            if (props.maximize || props.maximizeHeight) {
                return '100%';
            }
            return "fit-content";
        }};
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
`;
