/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic_Styles
 * @description Styled Content Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { LeadingDynamicProps } from "../declare";

export const LeadingDynamicStyledContentContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        transition: 0.3s opacity ease-in-out;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        opacity: ${(props: BarkThemeProps<LeadingDynamicProps>) => {
            if (props.loading) {
                return 0;
            }
        }};
        color: ${(props: BarkThemeProps) => {
            return props.theme.textColor.primary;
        }};
`;
