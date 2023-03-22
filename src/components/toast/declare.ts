/**
 * @author WMXPY
 * @namespace Components_Toast
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

export type ToastPropsPosition =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';

export type ToastProps =
    & {
        readonly identifier?: string;
        readonly active?: boolean;

        readonly position: ToastPropsPosition;
        readonly getAttachedElement?: () => HTMLElement;

        readonly zIndex?: number;
    }
    & PropsClassNameAddOn
    & PropsChildrenAddOn;
