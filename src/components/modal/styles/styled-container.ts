/**
 * @author WMXPY
 * @namespace Components_Modal_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { ModalProps } from "../declare";

export const ModalStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: fixed;
        z-index: ${(props: BarkThemeProps<ModalProps>) => {
            return props.zIndex || 5;
        }};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: auto;
`;
