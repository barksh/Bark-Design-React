/**
 * @author WMXPY
 * @namespace Components_SidePanel_Styles
 * @description Always Render Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { SidePanelProps } from "../declare";

export const SidePanelStyledAlwaysRenderContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding: ${(props: BarkThemeProps<SidePanelProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px 8px";
                case 'regular': return "2px 10px";
                case 'large': return "4px 16px";
            }
        }};
        transition: transform 0.2s ease-in-out;
        transform: ${(props: BarkThemeProps<SidePanelProps>) => {
            if (props.active) {
                return 'translateX(0)';
            }
            if (props.align === 'left') {
                return 'translateX(-100%)';
            }
            return 'translateX(100%)';
        }};
`;
