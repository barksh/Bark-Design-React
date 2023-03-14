/**
 * @author WMXPY
 * @namespace Components_Form
 * @description Declare
 */

import { PropsChildrenAddOn } from "../../util/props";
import { FormController } from "./controller";

export type FormProps =
    & {
        readonly controller: FormController;
    }
    & PropsChildrenAddOn;
