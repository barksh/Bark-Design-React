/**
 * @author WMXPY
 * @namespace Components_ButtonGroup
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ButtonGroupStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.secondary;
        }};
`;
