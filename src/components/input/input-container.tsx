/**
 * @author WMXPY
 * @namespace Components_Input
 * @description Input Container
 */

import * as React from "react";
import { InputContainerProps } from "./declare";
import { InputStyledInformation } from "./styles/styled-information";
import { InputStyledInputContainer } from "./styles/styled-input-container";
import { InputStyledTitle } from "./styles/styled-title";

export const InputInformation: React.FC<InputContainerProps> = (props: InputContainerProps) => {

    const getText = (): string | null => {

        if (typeof props.error === 'string' && props.error.length > 0) {
            return props.error;
        }
        if (typeof props.warning === 'string' && props.warning.length > 0) {
            return props.warning;
        }
        if (typeof props.information === 'string' && props.information.length > 0) {
            return props.information;
        }
        return null;
    };

    const text: string | null = getText();

    if (!text) {
        return null;
    }

    return (<InputStyledInformation
        title={text}
        size={props.size}
        warning={props.warning}
        error={props.error}
    >
        {text}
    </InputStyledInformation>);
};

export const InputContainer: React.FC<InputContainerProps> = (props: InputContainerProps) => {

    return (<InputStyledInputContainer
        size={props.size}
    >
        {typeof props.title === 'string'
            ? <InputStyledTitle
                title={props.title}
                size={props.size}
            >
                {props.title}
            </InputStyledTitle>
            : null}
        {props.children}
        <InputInformation
            {...props}
        />
    </InputStyledInputContainer>);
};
