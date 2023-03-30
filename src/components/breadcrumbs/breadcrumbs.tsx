/**
 * @author WMXPY
 * @namespace Components_Breadcrumbs
 * @description Breadcrumbs
 */

import * as React from "react";
import { BreadcrumbsProps } from "./declare";
import { BreadcrumbsStyledContainer } from "./styles/styled-container";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {

    return (<BreadcrumbsStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </BreadcrumbsStyledContainer>);
};
