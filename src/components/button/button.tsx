/**
 * @author WMXPY
 * @namespace Components_Button
 * @description Button
 */

import React from "react";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

export type ButtonProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const Button: React.FC = (props: ButtonProps) => {

    return (<button>
        {props.children}
    </button>);
};
