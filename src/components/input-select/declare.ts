/**
 * @author WMXPY
 * @namespace Components_InputSelect
 * @description Declare
 */

import { CommonInputProps } from "../input/declare";

export type InputSelectOption = {

    readonly label: string;
    readonly value: string;
};

export type InputSelectProps =
    & {
        readonly options?: InputSelectOption[];
    }
    & CommonInputProps<string>;
