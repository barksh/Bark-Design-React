/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Input Text
 */

import * as React from "react";
import { useFormContext } from "../form/context/context";
import { InputContainer } from "../input/input-container";
import { InputTextProps } from "./declare";
import { InputTextStyledContainer } from "./styles/styled-container";
import { InputTextStyledInput } from "./styles/styled-input";
import { fixInputType } from "./type";

export const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {

    const enrichedProps: InputTextProps =
        useFormContext(props, {
            value: props.defaultValue ?? '',
        });

    return (<InputContainer
        title={enrichedProps.title}
        size={enrichedProps.size}
        information={enrichedProps.information}
        warning={enrichedProps.warning}
        error={enrichedProps.error}
    >
        <InputTextStyledContainer
            size={enrichedProps.size}
        >
            <InputTextStyledInput
                disabled={enrichedProps.disabled}
                type={fixInputType(enrichedProps.type)}
                size={enrichedProps.size}
                placeholder={enrichedProps.placeholder}
                value={enrichedProps.value}
                onChange={(event: any) => {
                    if (typeof enrichedProps.onChange === 'function') {
                        enrichedProps.onChange(event.target.value);
                    }
                }}
            >
            </InputTextStyledInput>
        </InputTextStyledContainer>
    </InputContainer>);
};
