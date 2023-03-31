/**
 * @author WMXPY
 * @namespace Components_LeadingDynamic
 * @description Leading Dynamic
 */

import * as React from "react";
import { LeadingDynamicProps } from "./declare";
import { LeadingDynamicStyledBackRectangle } from "./styles/styled-back-rectangle";
import { LeadingDynamicStyledContainer } from "./styles/styled-container";
import { LeadingDynamicStyledContentContainer } from "./styles/styled-content-container";
import { LeadingDynamicStyledFrontRectangle } from "./styles/styled-front-rectangle";

export const LeadingDynamic: React.FC<LeadingDynamicProps> = (props: LeadingDynamicProps) => {

    return (<LeadingDynamicStyledContainer
        size={props.size}
    >
        <LeadingDynamicStyledFrontRectangle
            noBorder={props.noBorder}
            isLoading={props.loading}
            size={props.size}
        >
            <LeadingDynamicStyledContentContainer
                isLoading={props.loading}
            >
                {props.children}
            </LeadingDynamicStyledContentContainer>
        </LeadingDynamicStyledFrontRectangle>
        <LeadingDynamicStyledBackRectangle
            isLoading={props.loading}
            size={props.size}
        />
    </LeadingDynamicStyledContainer>);
};
