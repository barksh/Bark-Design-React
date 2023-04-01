/**
 * @author WMXPY
 * @namespace Hooks_Form
 * @description Use Form
 */

import * as React from "react";
import { FormController } from "../../components/form/controller";

export const useForm = (): FormController => {

    const formControllerRef: React.MutableRefObject<FormController | null> =
        React.useRef(null);


    if (!formControllerRef.current) {
        formControllerRef.current = FormController.create();
    }

    return formControllerRef.current;
};
