/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Declare
 */

import { PropsPlaceholderAddOn, PropsPrefixAddOn, PropsSuffixAddOn } from "../../util/props";
import { CommonInputProps } from "../input/declare";

export type InputTextPropsType =
    | "text"
    | "password"
    | "email"
    | "number"
    | "telephone"
    | "url";

export type InputTextProps =
    & {
        readonly type?: InputTextPropsType;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & PropsPlaceholderAddOn
    & CommonInputProps<string>;
