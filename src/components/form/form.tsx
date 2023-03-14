/**
 * @author WMXPY
 * @namespace Components_Form
 * @description Form
 */

import * as React from "react";
import { FormContext } from "./context/context";
import { FormContextController } from "./context/controller";
import { FormController } from "./controller";
import { FormProps } from "./declare";

export const useForm = (): FormController => {

    const [loading, setLoading] = React.useState<boolean>(true);
    const formControllerRef: React.MutableRefObject<FormController | null> =
        React.useRef(null);

    React.useEffect(() => {

        if (!formControllerRef.current) {
            formControllerRef.current = FormController.create();
        }
        setLoading(false);
    }, []);

    if (!formControllerRef.current || loading) {
        return null as any;
    }

    return formControllerRef.current;
};

export const Form: React.FC<FormProps> = (props: FormProps) => {

    if (props.controller === null) {
        return null;
    }

    const contextController: FormContextController =
        (props.controller as any)._contextController;

    return (<FormContext.Provider
        value={{
            controller: contextController,
        }}
    >
        {props.children}
    </FormContext.Provider>);
};
