/**
 * @author WMXPY
 * @namespace Components_Pagination
 * @description Pagination
 */

import * as React from "react";
import { PaginationProps } from "./declare";
import { PaginationStyledContainer } from "./styles/styled-container";

export const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {

    return (<PaginationStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </PaginationStyledContainer>);
};
