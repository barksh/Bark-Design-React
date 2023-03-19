/**
 * @author WMXPY
 * @namespace Components_InputSelect
 * @description Input Select
 */

import * as React from "react";
import { useFormContext } from "../form/context/context";
import { InputContainer } from "../input/input-container";
import { InputSelectOptionElement, InputSelectOptionGroup, InputSelectOptionSubElement, InputSelectProps } from "./declare";
import { InputSelectStyledContainer } from "./styles/styled-container";
import { InputSelectStyledSelect } from "./styles/styled-select";

export const InputSelect: React.FC<InputSelectProps> = (props: InputSelectProps) => {

    const enrichedProps: InputSelectProps =
        useFormContext(props, {
            value: props.defaultValue ?? '',
        });

    const options: Array<InputSelectOptionGroup | InputSelectOptionElement> =
        enrichedProps.options ?? [];

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
                disabled={enrichedProps.disabled}
                size={enrichedProps.size}
                value={enrichedProps.value}
                onChange={(event: any) => {
                    if (typeof enrichedProps.onChange === 'function') {
                        enrichedProps.onChange(event.target.value);
                    }
                }}
            >
                {options.map((
                    option: InputSelectOptionGroup | InputSelectOptionElement,
                ) => {
                    if (option.type === 'group') {
                        const group: InputSelectOptionGroup = option;
                        return (<optgroup
                            key={group.label}
                            label={group.label}
                        >
                            {group.children.map((
                                child: InputSelectOptionSubElement,
                            ) => {
                                return (<option
                                    key={child.value}
                                    value={child.value}
                                >
                                    {child.label}
                                </option>);
                            })}
                        </optgroup>);
                    }

                    return (<option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>);
                })}
            </InputSelectStyledSelect>
        </InputSelectStyledContainer>
    </InputContainer>);
};
