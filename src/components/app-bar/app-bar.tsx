/**
 * @author WMXPY
 * @namespace Components_AppBar
 * @description App Bar
 */

import * as React from "react";
import { AppBarProps } from "./declare";
import { AppBarStyledAppBar } from "./styles/styled-app-bar";
import { AppBarStyledHeader } from "./styles/styled-header";
import { AppBarStyledPrefixContainer } from "./styles/styled-prefix-container";
import { AppBarStyledSuffixContainer } from "./styles/styled-suffix-container";

const AppBarPrefix: React.FC<AppBarProps> = (props: AppBarProps) => {

    if (props.prefix) {
        return (<AppBarStyledPrefixContainer
            size={props.size}
        >
            {props.prefix}
        </AppBarStyledPrefixContainer>);
    }
    return null;
};

const AppBarSuffix: React.FC<AppBarProps> = (props: AppBarProps) => {

    if (props.suffix) {
        return (<AppBarStyledSuffixContainer
            size={props.size}
        >
            {props.suffix}
        </AppBarStyledSuffixContainer>);
    }
    return null;
};

export const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {

    return (<AppBarStyledAppBar
        size={props.size}
    >
        <AppBarPrefix
            {...props}
        />
        <AppBarStyledHeader
            size={props.size}
        >
            {props.title}
        </AppBarStyledHeader>
        <AppBarSuffix
            {...props}
        />
    </AppBarStyledAppBar>);
};
