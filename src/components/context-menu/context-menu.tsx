/**
 * @author WMXPY
 * @namespace Components_ContentMenu
 * @description Content Menu
 */

import * as React from "react";
import { ContentMenuProps } from "./declare";
import { ContentMenuStyledContainer } from "./styles/styled-container";

export const ContentMenu: React.FC<ContentMenuProps> = (props: ContentMenuProps) => {

    return (<ContentMenuStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </ContentMenuStyledContainer>);
};
