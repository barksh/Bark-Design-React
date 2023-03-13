/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { ButtonGroupProps } from "../declare";

export const ButtonGroupStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        width: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.flex) {
                return "100%";
            }
            return "fit-content";
        }};
        height: ${(props: BarkThemeProps<ButtonGroupProps>) => {
            if (props.flex) {
                return "100%";
            }
            return "fit-content";
        }};
`;
