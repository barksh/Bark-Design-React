/**
 * @author WMXPY
 * @namespace Components_LeadingStatic
 * @description Leading Static
 */

import * as React from "react";
import { LeadingStaticProps } from "./declare";
import { LeadingStaticStyledContainer } from "./styles/styled-container";
import { LeadingStaticStyledContentContainer } from "./styles/styled-content-container";

export const LeadingStatic: React.FC<LeadingStaticProps> = (props: LeadingStaticProps) => {

    return (<LeadingStaticStyledContainer
        size={props.size}
        noBorder={props.noBorder}
    >
        <LeadingStaticStyledContentContainer>
            {props.children}
        </LeadingStaticStyledContentContainer>
    </LeadingStaticStyledContainer>);
};
