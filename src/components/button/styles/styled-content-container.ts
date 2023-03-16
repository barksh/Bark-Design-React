/**
 * @author WMXPY
 * @namespace Components_Button_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { ButtonProps } from "../declare";

export const ButtonStyledContentContainer: StyledComponent<"div", BarkThemeProps, ButtonProps> =
    styled.div`
        text-align: start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: ${(props: BarkThemeProps<ButtonProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 6px";
                case 'regular': return "4px 8px";
                case 'large': return "4px 12px";
            }
        }};
`;
