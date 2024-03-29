/**
 * @author WMXPY
 * @namespace Components_Tabs_Styles
 * @description Styled Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { TabsProps } from "../declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";

export const TabsStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        ${parseLogicalCSSProperty("border-bottom")}: ${(props: BarkThemeProps<TabsProps>) => {
            const fixedSize = fixSizeProps(props.size);
            if (fixedSize === 'large') {
                return '2px';
            }
            return '1px';
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        ${parseLogicalCSSProperty("margin-bottom")}: ${(props: BarkThemeProps<TabsProps>) => {
            if (props.noHeaderBottomMargin) {
                return '0px';
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "2px";
                case 'large': return "4px";
            }
        }};
`;
