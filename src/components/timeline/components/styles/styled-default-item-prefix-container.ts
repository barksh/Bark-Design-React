/**
 * @author WMXPY
 * @namespace Components_Timeline_Component_Styles
 * @description Styled Default Item Prefix Container
 */

import styled, { StyledComponent } from "styled-components";
import { BarkThemeProps } from "../../../../theme/declare";
import { fixSizeProps } from "../../../../util/size";
import { TimelineItemProps } from "../../declare";

export const TimelineComponentStyledDefaultItemPrefixContainer: StyledComponent<"div", BarkThemeProps, any> =
    styled.div`
        padding: ${(props: BarkThemeProps<TimelineItemProps>) => {
            const fixedSize = fixSizeProps(props.size);
            switch (fixedSize) {
                case 'small': return "2px";
                case 'regular': return "2px";
                case 'large': return "4px";
            }
        }};
`;
