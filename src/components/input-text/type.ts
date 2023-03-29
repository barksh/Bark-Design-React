/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Type
 */

import { InputTextPropsType } from "./declare";

export const fixInputType = (type: InputTextPropsType | undefined): string => {

    switch (type) {
        case "text": return "text";
        case "date": return "date";
        case "password": return "password";
        case "email": return "email";
        case "number": return "number";
        case "telephone": return "tel";
        case "url": return "url";
        default: return "text";
    }
};
