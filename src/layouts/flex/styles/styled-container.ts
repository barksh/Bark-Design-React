/**
 * @author WMXPY
 * @namespace Layouts_FlexLayout_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { FlexLayoutProps } from "../declare";

export const FlexLayoutStyledContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        display: flex;
        flex-direction: ${(props: BarkThemeProps<FlexLayoutProps>) => {
            return props.direction ?? 'row';
        }};
        justify-content: ${(props: BarkThemeProps<FlexLayoutProps>) => {
            return props.justify ?? 'flex-start';
        }};
        align-items: ${(props: BarkThemeProps<FlexLayoutProps>) => {
            return props.align ?? 'flex-start';
        }};
        flex-wrap: ${(props: BarkThemeProps<FlexLayoutProps, {
            readonly flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
        }>) => {
            return props.flexWrap ?? 'nowrap';
        }};
        ${(props: BarkThemeProps<FlexLayoutProps>) => {
            if (props.direction === 'column') {
                return 'row-gap';
            }
            return 'column-gap';
        }}: ${(props: BarkThemeProps<FlexLayoutProps>) => {
            if (!props.withGap) {
                return '0px';
            }
            const fixedSize = fixSizeProps(props.gapSize);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
`;
