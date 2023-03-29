/**
 * @author WMXPY
 * @namespace Components_InputTextarea
 * @description Input Textarea
 */

import * as React from "react";
import { useFormContext } from "../form/context/context";
import { InputContainer } from "../input/input-container";
import { InputTextareaProps } from "./declare";
import { InputTextareaStyledContainer } from "./styles/styled-container";
import { InputTextareaStyledTextarea } from "./styles/styled-textarea";

export const InputTextarea: React.FC<InputTextareaProps> = (props: InputTextareaProps) => {

    const enrichedProps: InputTextareaProps =
        useFormContext(props, {
            value: props.defaultValue ?? '',
        });

    return (<InputContainer
        title={enrichedProps.title}
        size={enrichedProps.size}
        maximize={enrichedProps.maximize}
        information={enrichedProps.information}
        warning={enrichedProps.warning}
        error={enrichedProps.error}
    >
        <InputTextareaStyledContainer
            size={enrichedProps.size}
        >
            <InputTextareaStyledTextarea
                disabled={enrichedProps.disabled}
                size={enrichedProps.size}
                placeholder={enrichedProps.placeholder}
                value={enrichedProps.value}
                resizable={enrichedProps.resizable}
                onChange={(event: any) => {
                    if (typeof enrichedProps.onChange === 'function') {
                        enrichedProps.onChange(event.target.value);
                    }
                }}
            >
            </InputTextareaStyledTextarea>
        </InputTextareaStyledContainer>
    </InputContainer>);
};
