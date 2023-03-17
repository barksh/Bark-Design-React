/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled Header
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { AppBarProps } from "../declare";

export const AppBarStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        flex: 1;
        font-size: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "24px";
                case 'large': return "32px";
            }
        }};
`;
