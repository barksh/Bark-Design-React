/**
 * @author WMXPY
 * @namespace Components_TagGroup
 * @description Tag Group
 */

import * as React from "react";
import { TagGroupProps } from "./declare";
import { TagGroupStyledContainer } from "./styles/styled-container";

export const TagGroup: React.FC<TagGroupProps> = (props: TagGroupProps) => {

    return (<TagGroupStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </TagGroupStyledContainer>);
};
