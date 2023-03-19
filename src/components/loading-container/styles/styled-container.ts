/**
 * @author WMXPY
 * @namespace Components_LoadingContainer_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerProps } from "../declare";

export const LoadingContainerStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
        padding: ${(props: BarkThemeProps<LoadingContainerProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
`;
