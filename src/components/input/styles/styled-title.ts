/**
 * @author WMXPY
 * @namespace Components_Input_Styles
 * @description Styled Title
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { CommonInputProps } from "../declare";

export const InputStyledTitle: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
        font-size:  ${(props: BarkThemeProps<CommonInputProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "16px";
                case 'large': return "18px";
            }
        }};
`;
