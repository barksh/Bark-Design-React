/**
 * @author WMXPY
 * @namespace Layouts_NavigationLayout_Styles
 * @description Styled Navigation
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { NavigationLayoutProps } from "../declare";
import { fixSizeProps } from "../../../util/size";

export const NavigationLayoutStyledNavigation: StyledComponent<"nav", BarkThemeProps, any> =
    styled.nav`
        ${parseLogicalCSSProperty("width")}: ${(props: BarkThemeProps<NavigationLayoutProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "256px";
                case 'regular': return "256px";
                case 'large': return "512px";
            }
        }};
        display: flex;
`;
