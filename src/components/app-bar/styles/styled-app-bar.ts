/**
 * @author WMXPY
 * @namespace Components_AppBar_Styles
 * @description Styled App Bar
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/props";
import { AppBarProps } from "../declare";

export const AppBarStyledAppBar: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        font-size: ${(props: BarkThemeProps<AppBarProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "16px";
                case 'large': return "24px";
            }
        }};
`;
