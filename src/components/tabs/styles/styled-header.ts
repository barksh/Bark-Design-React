/**
 * @author WMXPY
 * @namespace Components_Tabs_Styles
 * @description Styled Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { TabsProps } from "../declare";

export const TabsStyledHeader: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        flex: 1;
        font-size: ${(props: BarkThemeProps<TabsProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "16px";
                case 'regular': return "24px";
                case 'large': return "32px";
            }
        }};
`;
