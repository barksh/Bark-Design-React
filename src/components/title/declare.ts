/**
 * @author WMXPY
 * @namespace Components_Title
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

export type TitleProps =
    & {
        readonly level: 1 | 2 | 3 | 4 | 5 | 6;
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;
