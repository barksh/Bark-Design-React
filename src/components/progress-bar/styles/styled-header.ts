/**
 * @author WMXPY
 * @namespace Components_ProgressBar_Styles
 * @description Styled Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { ProgressBarProps } from "../declare";

export const ProgressBarStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: ${(props: BarkThemeProps<ProgressBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "12px";
                case 'regular': return "14px";
                case 'large': return "16px";
            }
        }};
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
`;
