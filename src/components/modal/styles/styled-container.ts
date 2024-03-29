/**
 * @author WMXPY
 * @namespace Components_Modal_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { convertHexToRGBA } from "../../../util/hex-to-rgba";
import { ModalProps } from "../declare";

const BACKGROUND_OPACITY: number = 0.5;

export const ModalStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: fixed;
        z-index: ${(props: BarkThemeProps<ModalProps>) => {
            return props.zIndex;
        }};
        background-color: ${(props: BarkThemeProps<ModalProps>) => {
            if (!props.disableBackgroundPointerEvent) {
                return 'transparent';
            }
            return convertHexToRGBA(
                props.theme.backColor.disabled,
                BACKGROUND_OPACITY,
            );
        }};
        ${parseLogicalCSSProperty("top")}: 0;
        ${parseLogicalCSSProperty("left")}: 0;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: ${(props: BarkThemeProps<ModalProps>) => {
            if (!props.disableBackgroundPointerEvent) {
                return "none";
            }
            return "auto";
        }};
`;
