/**
 * @author WMXPY
 * @namespace Components_ProgressBar
 * @description Declare
 */

import { PropsClassNameAddOn, PropsMaximizeAddOn, PropsSizeAddon } from "../../util/props";

export type ProgressBarProps =
    & {
        readonly progress: number;
        readonly total: number;

        readonly title?: string;
        readonly information?: string;

        readonly color?: string;
    }
    & PropsMaximizeAddOn
    & PropsClassNameAddOn
    & PropsSizeAddon;
