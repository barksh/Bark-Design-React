/**
 * @author WMXPY
 * @namespace Components_Title
 * @description Title
 */

import * as React from "react";
import { StyledComponent } from "styled-components";
import { TitleProps } from "./declare";
import { TitleStyledH1, TitleStyledH2, TitleStyledH3, TitleStyledH4, TitleStyledH5, TitleStyledH6 } from "./styles/styled-title";

const getTitleComponent = (level: number): StyledComponent<any, any> => {

    switch (level) {

        case 1: return TitleStyledH1;
        case 2: return TitleStyledH2;
        case 3: return TitleStyledH3;
        case 4: return TitleStyledH4;
        case 5: return TitleStyledH5;
        case 6: return TitleStyledH6;
    }

    return TitleStyledH1;
};

export const Title: React.FC<TitleProps> = (props: TitleProps) => {

    const Component = getTitleComponent(props.level);

    return (<Component>
        {props.children}
    </Component>);
};
