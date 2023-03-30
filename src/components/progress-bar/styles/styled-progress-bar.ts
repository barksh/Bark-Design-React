/**
 * @author WMXPY
 * @namespace Components_ProgressBar_Styles
 * @description Styled Progress Bar
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ProgressBarProps } from "../declare";

export const ProgressBarStyledProgressBar: StyledComponent<"progress", BarkThemeProps, any> =
    styled.progress`
        width: ${(props: BarkThemeProps<ProgressBarProps>) => {
            if (props.maximize) {
                return "100%";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "128px";
                case 'regular': return "168px";
                case 'large': return "256px";
            }
        }};
        height: ${(props: BarkThemeProps<ProgressBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "14px";
                case 'regular': return "18px";
                case 'large': return "24px";
            }
        }};
        border: ${(props: BarkThemeProps<ProgressBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "1px";
                case 'regular': return "1px";
                case 'large': return "2px";
            }
        }} solid ${(props: BarkThemeProps) => {
            return props.theme.borderColor.primary;
        }};
        border-radius: none;
        -webkit-appearance: none;
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        &::-moz-progress-bar {
            background-color: ${(props: BarkThemeProps<ProgressBarProps>) => {
            if (props.color) {
                return props.color;
            }
            return props.theme.borderColor.primary;
        }};
        }
        &::-webkit-progress-bar {
            background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
            border-radius: none;
        }
        &::-webkit-progress-value {
            background-color: ${(props: BarkThemeProps<ProgressBarProps>) => {
            if (props.color) {
                return props.color;
            }
            return props.theme.borderColor.primary;
        }};
            border-radius: none;
        }
`;
