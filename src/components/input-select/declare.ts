/**
 * @author WMXPY
 * @namespace Components_InputSelect
 * @description Declare
 */

import { CommonInputProps } from "../input/declare";

export type InputSelectOption = {

    readonly label: string;
};

export type InputSelectOptionSubElement = {

    readonly value: string;
} & InputSelectOption;

export type InputSelectOptionGroup = {

    readonly type: 'group';
    readonly children: InputSelectOptionSubElement[];
} & InputSelectOption;

export type InputSelectOptionElement = {

    readonly type: 'element';
    readonly value: string;
} & InputSelectOption;

export type InputSelectProps =
    & {
        readonly options?: Array<InputSelectOptionGroup | InputSelectOptionElement>;
    }
    & CommonInputProps<string>;
