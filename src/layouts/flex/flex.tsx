/**
 * @author WMXPY
 * @namespace Layouts_Flex
 * @description Flex
 */

import * as React from "react";
import { FlexLayoutProps } from "./declare";
import { FlexLayoutStyledContainer } from "./styles/styled-container";

export const FlexLayout: React.FC<FlexLayoutProps> = (props: FlexLayoutProps) => {

    return (<FlexLayoutStyledContainer
        className={props.className}
        direction={props.direction}
        justify={props.justify}
        align={props.align}
        flexWrap={props.wrap}
        withGap={props.withGap}
        gapSize={props.gapSize}
    >
        {props.children}
    </FlexLayoutStyledContainer>);
};
