/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { LeadingDynamicProps } from "../declare";

export const LeadingDynamicStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        position: relative;
        background-color: ${(props: BarkThemeProps) => {
            return props.theme.backColor.primary;
        }};
        width: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "32px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
        height: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "32px";
                case 'regular': return "48px";
                case 'large': return "64px";
            }
        }};
`;
