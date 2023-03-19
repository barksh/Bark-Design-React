/**
 * @author WMXPY
 * @namespace Components_Input
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn, PropsDisabledAddOn, PropsSizeAddon } from "../../util/props";

export type CommonInputProps<T = any> =
    & {
        readonly title?: string;

        readonly information?: string;
        readonly warning?: string;
        readonly error?: string;

        readonly value?: T;
        readonly defaultValue?: T;
        readonly onChange?: (value: T) => void;
        readonly onValidate?: (value: T) => true | string;
    }
    & PropsDisabledAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;

export type InputContainerProps =
    & {

    }
    & PropsChildrenAddOn
    & CommonInputProps;
