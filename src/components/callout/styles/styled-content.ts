/**
 * @author WMXPY
 * @namespace Components_Callout_Styles
 * @description Styled Content
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../theme/declare";
import { fixSizeProps } from "../../../util/size";
import { CalloutProps } from "../declare";

export const CalloutStyledContent: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding: ${(props: BarkThemeProps<CalloutProps>) => {
            if (!props.contentPadding) {
                return "0px";
            }
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "4px";
                case 'regular': return "6px";
                case 'large': return "8px";
            }
        }};
`;
