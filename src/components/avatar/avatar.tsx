/**
 * @author WMXPY
 * @namespace Components_Avatar
 * @description Avatar
 */

import * as React from "react";
import { shortenAvatarName } from "./data/shorten";
import { AvatarProps } from "./declare";
import { AvatarStyledContainer } from "./styles/styled-container";
import { AvatarStyledContent } from "./styles/styled-content";
import { AvatarStyledContentImage } from "./styles/styled-content-image";
import { AvatarStyledContentName } from "./styles/styled-content-name";

const AvatarContent: React.FC<AvatarProps> = (props: AvatarProps) => {

    if (typeof props.imageUrl === 'string'
        && props.imageUrl.length > 0) {

        return (<AvatarStyledContentImage
            src={props.imageUrl}
            alt={props.name}
        />);
    }

    if (typeof props.name === 'string'
        && props.name.length > 0) {

        return (<AvatarStyledContentName
            name={props.name}
            size={props.size}
        >
            {shortenAvatarName(props.name)}
        </AvatarStyledContentName>);
    }

    return (<AvatarStyledContentName
        size={props.size}
    >
    </AvatarStyledContentName>);
};

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {


    return (<AvatarStyledContainer
        noBorder={props.noBorder}
        size={props.size}
    >
        <AvatarStyledContent
            size={props.size}
        >
            <AvatarContent
                {...props}
            />
        </AvatarStyledContent>
    </AvatarStyledContainer>);
};
