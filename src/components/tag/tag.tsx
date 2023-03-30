/**
 * @author WMXPY
 * @namespace Components_Tag
 * @description Tag
 */

import * as React from "react";
import { TagProps } from "./declare";
import { TagStyledContainer } from "./styles/styled-container";

export const Tag: React.FC<TagProps> = (props: TagProps) => {

    return (<TagStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </TagStyledContainer>);
};
