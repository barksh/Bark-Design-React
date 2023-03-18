/**
 * @author WMXPY
 * @namespace Components_InputSelect
 * @description Input Select
 */

import * as React from "react";
import { useFormContext } from "../form/context/context";
import { InputContainer } from "../input/input-container";
import { InputSelectProps } from "./declare";
import { InputSelectStyledContainer } from "./styles/styled-container";
import { InputSelectStyledSelect } from "./styles/styled-select";

export const InputSelect: React.FC<InputSelectProps> = (props: InputSelectProps) => {

    const enrichedProps: InputSelectProps =
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
        <InputSelectStyledContainer
            size={enrichedProps.size}
        >
            <InputSelectStyledSelect
                size={enrichedProps.size}
                value={enrichedProps.value}
                onChange={(event: any) => {
                    if (typeof enrichedProps.onChange === 'function') {
                        enrichedProps.onChange(event.target.value);
                    }
                }}
            >
            </InputSelectStyledSelect>
        </InputSelectStyledContainer>
    </InputContainer>);
};
