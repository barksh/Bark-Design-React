/**
 * @author WMXPY
 * @namespace Components_Form
 * @description Form
 */

import * as React from "react";
import { FormContext } from "./context/context";
import { FormContextController } from "./context/controller";
import { FormProps } from "./declare";

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
