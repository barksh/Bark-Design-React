/**
 * @author WMXPY
 * @namespace Components_LoadingContainerRectangle_Styles
 * @description Styled Core Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerRectangleProps } from "../declare";

export const LoadingContainerRectangleStyledCoreContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.8s all ease-in-out;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        height: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "24px";
                case 'regular': return "48px";
                case 'large': return "96px";
            }
        }};
        margin: ${(props: BarkThemeProps<LoadingContainerRectangleProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "24px";
                case 'large': return "48px";
            }
        }};
`;
