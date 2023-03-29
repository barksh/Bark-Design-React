/**
 * @author WMXPY
 * @namespace Components_InputTextarea
 * @description Declare
 */

import { PropsMaximizeAddOn, PropsPlaceholderAddOn } from "../../util/props";
import { CommonInputProps } from "../input/declare";

export type InputTextareaProps =
    & {
        readonly resizable?: boolean;
        readonly rows?: number;
    }
    & PropsPlaceholderAddOn
    & PropsMaximizeAddOn
    & CommonInputProps<string>;
