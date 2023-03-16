/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Declare
 */

import { PropsPrefixAddOn, PropsSuffixAddOn } from "../../util/props";
import { CommonInputProps } from "../input/declare";

export type InputTextProps =
    & {
        readonly placeholder?: string;
    }
    & PropsPrefixAddOn
    & PropsSuffixAddOn
    & CommonInputProps<string>;
