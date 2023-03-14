/**
 * @author WMXPY
 * @namespace Components_Form_Context
 * @description Context
 */

import { randomUnique } from "@sudoo/random";
import * as React from "react";
import { CommonInputProps } from "../../input/declare";
import { FormContextController } from "./controller";

export type FormContentValue = {

    readonly controller: FormContextController;
};

export const FormContext: React.Context<FormContentValue> =
    React.createContext<FormContentValue>({
        controller: undefined as any,
    });

export const useFormContext = <T extends CommonInputProps>(
    props: T,
    defaultProps: Partial<T>,
): T => {

    const combinedProps: T = {
        ...defaultProps,
        ...props,
    };

    const [version, setVersion] = React.useState<number>(0);

    const context: FormContentValue = React.useContext(FormContext);
    const keyRef: React.MutableRefObject<string> = React.useRef<string>(null as any);

    if (typeof context.controller === 'undefined') {
        return combinedProps;
    }

    React.useEffect(() => {

        if (typeof keyRef.current !== 'string') {
            const key: string = randomUnique();
            keyRef.current = key;
        }

        context.controller.registerInput(
            keyRef.current,
            combinedProps,
            setVersion,
        );
        setVersion(1);

        return () => {
            context.controller.unregisterInput(keyRef.current);
        };
    }, [
        combinedProps.value,
        combinedProps.defaultValue,
        combinedProps.onChange,
        combinedProps.onValidate,
    ]);

    if (version === 0) {
        return combinedProps;
    }

    const inputProps: Partial<CommonInputProps> =
        context.controller.getInputProps(keyRef.current);

    const enrichedProps: T = {
        ...defaultProps,
        ...inputProps,
        ...props,
    };

    return enrichedProps;
};
