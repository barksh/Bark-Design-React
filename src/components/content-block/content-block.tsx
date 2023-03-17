/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Content Block
 */

import * as React from "react";
import { ContentBlockProps } from "./declare";
import { ContentBlockStyledContainer } from "./styles/styled-container";

export const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {

    return (<ContentBlockStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </ContentBlockStyledContainer>);
};
