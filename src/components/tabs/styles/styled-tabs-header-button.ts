/**
 * @author WMXPY
 * @namespace Components_Tabs_Styles
 * @description Styled Header Button
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { Button } from "../../button/button";
import { TabsProps } from "../declare";
import { parseLogicalCSSProperty } from "../../../theme/logical/parse-css";
import { SizePropertyValue, fixSizeProps } from "../../../util/size";

export const TabsStyledHeaderButton: StyledComponent<typeof Button, BarkThemeProps, any> =
    styled(Button)`
        position: relative;
        overflow: visible;
        :after {
            transition: all 0.2s;
            content: '';
            display: block;
            position: absolute;
            background-color: ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
            ${parseLogicalCSSProperty("width")}: 100%;
            ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<TabsProps, {
            readonly barSize: SizePropertyValue;
            readonly activated: boolean;
        }>) => {
            if (!props.activated) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.barSize);
            switch (fixedSize) {
                case 'small': return "3px";
                case 'regular': return "3px";
                case 'large': return "5px";
            }
        }};
            ${parseLogicalCSSProperty("bottom")}: ${(props: BarkThemeProps<TabsProps, {
            readonly barSize: SizePropertyValue;
            readonly activated: boolean;
        }>) => {
            const fixedSize = fixSizeProps(props.barSize);
            switch (fixedSize) {
                case 'small': return "-2px";
                case 'regular': return "-2px";
                case 'large': return "-3px";
            }
        }};
        }
        :hover:after {
            ${parseLogicalCSSProperty("height")}: ${(props: BarkThemeProps<TabsProps, {
            readonly barSize: SizePropertyValue;
        }>) => {
            const fixedSize = fixSizeProps(props.barSize);
            switch (fixedSize) {
                case 'small': return "5px";
                case 'regular': return "5px";
                case 'large': return "7px";
            }
        }};
            ${parseLogicalCSSProperty("bottom")}: ${(props: BarkThemeProps<TabsProps, {
            readonly barSize: SizePropertyValue;
        }>) => {
            const fixedSize = fixSizeProps(props.barSize);
            switch (fixedSize) {
                case 'small': return "-3px";
                case 'regular': return "-3px";
                case 'large': return "-4px";
            }
        }};
        }
`;
