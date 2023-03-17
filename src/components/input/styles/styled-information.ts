/**
 * @author WMXPY
 * @namespace Components_Input_Styles
 * @description Styled Information
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CommonInputProps } from "../declare";

export const InputStyledInformation: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps<CommonInputProps>) => {
            if (typeof props.error === 'string' && props.error.length > 0) {
                return props.theme.textColor.error;
            }
            if (typeof props.warning === 'string' && props.warning.length > 0) {
                return props.theme.textColor.warning;
            }
            return props.theme.textColor.secondary;
        }};
        font-size:  ${(props: BarkThemeProps<CommonInputProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
`;
