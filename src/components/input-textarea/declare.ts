/**
 * @author WMXPY
 * @namespace Components_InputTextarea
 * @description Declare
 */

import { CommonInputProps } from "../input/declare";

export type InputTextareaProps =
    & {
        readonly placeholder?: string;
    }
    & CommonInputProps<string>;
