/**
 * @author WMXPY
 * @namespace Components_Modal
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

export type ModalProps =
    & {
        readonly identifier?: string;
        readonly active?: boolean;
        readonly getAttachedElement?: () => HTMLElement;

        readonly zIndex?: number;

        readonly disableBackgroundPointerEvent?: boolean;
    }
    & PropsClassNameAddOn
    & PropsChildrenAddOn;
