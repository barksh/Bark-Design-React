/**
 * @author WMXPY
 * @namespace Components_Input_Styles
 * @description Styled Input Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CommonInputProps } from "../declare";

export const InputStyledInputContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: ${(props: BarkThemeProps<CommonInputProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "384px";
            }
        }};
        height: fit-content;
`;
