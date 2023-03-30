/**
 * @author WMXPY
 * @namespace Components_LoadingContainerBorder_Styles
 * @description Styled Placeholder Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { LoadingContainerBorderProps } from "../declare";

export const LoadingContainerBorderStyledPlaceholderContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        ${parseLogicalCSSProperty("width")}: 100%;
        ${parseLogicalCSSProperty("height")}: 100%;
        padding: ${(props: BarkThemeProps<LoadingContainerBorderProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
