/**
 * @author WMXPY
 * @namespace Components_Code_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { fixSizeProps } from "../../../util/size";
import { CodeProps } from "../declare";

export const CodeStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        width: 100%;
        height: 100%;
        ${parseLogicalCSSProperty("min-width")}: ${(props: BarkThemeProps<CodeProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "384px";
            }
        }};
`;
