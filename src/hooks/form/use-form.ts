/**
 * @author WMXPY
 * @namespace Hooks_Form
 * @description Use Form
 */

import * as React from "react";
import { FormController } from "../../components/form/controller";

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
