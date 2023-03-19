/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Declare
 */

import { PropsPlaceholderAddOn, PropsPrefixAddOn, PropsSuffixAddOn } from "../../util/props";
import { CommonInputProps } from "../input/declare";

export type InputTextProps =
    & {
        readonly type?:
        | "text"
        | "password"
        | "email"
        | "number"
        | "telephone"
        | "url";
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsPlaceholderAddOn
    & CommonInputProps<string>;
