/**
 * @author WMXPY
 * @namespace Components_Avatar
 * @description Avatar
 */

import * as React from "react";
import { AvatarProps } from "./declare";
import { AvatarStyledContainer } from "./styles/styled-container";
import { AvatarStyledContent } from "./styles/styled-content";

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {

    return (<AvatarStyledContainer
        size={props.size}
    >
        <AvatarStyledContent
            size={props.size}
        >
            {props.name}
        </AvatarStyledContent>
    </AvatarStyledContainer>);
};
