/**
 * @author WMXPY
 * @namespace Components_Toast_Styles
 * @description Styled Container
 */

import styled, { keyframes, StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { ToastProps } from "../declare";

const slideInRightKeyframes = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideInLeftKeyframes = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const ToastStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        animation-name: ${(props: BarkThemeProps<ToastProps>) => {
            if (props.position === 'bottom-left'
                || props.position === 'top-left') {
                return slideInLeftKeyframes;
            }
            return slideInRightKeyframes;
        }};
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;
`;
