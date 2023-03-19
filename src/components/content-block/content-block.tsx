/**
 * @author WMXPY
 * @namespace Components_ContentBlock
 * @description Content Block
 */

import * as React from "react";
import { LoadingContainer } from "../export";
import { ContentBlockProps } from "./declare";
import { ContentBlockStyledContainer } from "./styles/styled-container";

export const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {

    return (<ContentBlockStyledContainer
        size={props.size}
        width={props.width}
        height={props.height}
        maximize={props.maximize}
        noBorder={props.noBorder}
    >
        <LoadingContainer
            size={props.size}
            loading={props.loading}
            placeholder={props.placeholder}
        >
            {props.children}
        </LoadingContainer>
    </ContentBlockStyledContainer>);
};
