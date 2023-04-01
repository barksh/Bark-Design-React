/**
 * @author WMXPY
 * @namespace Components_Spacing_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { SpacingProps } from "../declare";

export const SpacingStyledSpacing: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<SpacingProps>) => {
            if (props.direction === "vertical") {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "4px";
                    case 'regular': return "8px";
                    case 'large': return "12px";
                }
            }
            return "auto";
        }};
        ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<SpacingProps>) => {
            if (props.direction === "horizontal") {
                const fixedSize = fixSizeProps(props.size);
                switch (fixedSize) {
                    case 'small': return "4px";
                    case 'regular': return "8px";
                    case 'large': return "12px";
                }
            }
            return "auto";
        }};
`;
