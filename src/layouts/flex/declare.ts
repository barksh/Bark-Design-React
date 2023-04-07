/**
 * @author WMXPY
 * @namespace Layouts_Flex
 * @description Declare
 */

import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";
import { SizePropertyValue } from "../../util/size";

export type FlexLayoutProps =
    & {
        readonly direction?: 'row' | 'column';

        readonly justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        readonly align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
        readonly wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

        readonly withGap?: boolean;
        readonly gapSize?: SizePropertyValue;
    }
    & PropsClassNameAddOn
    & PropsChildrenAddOn;
