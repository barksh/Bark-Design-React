/**
 * @author WMXPY
 * @namespace Components_AppBar
 * @description AppBar
 */

import * as React from "react";
import { AppBarProps } from "./declare";
import { AppBarStyledAppBar } from "./styles/styled-app-bar";

export const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {

    return (<AppBarStyledAppBar>
        {props.title}
    </AppBarStyledAppBar>);
};
