/**
 * @author WMXPY
 * @namespace Components_Toast_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";

export const ToastStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
`;
