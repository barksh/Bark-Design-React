/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Type
 */

import { InputTextPropsType } from "./declare";

export const fixInputType = (type: InputTextPropsType | undefined): string => {

    switch (type) {
        case "text": return "text";
        case "search": return "search";
        case "color": return "color";
        case "date": return "date";
        case "time": return "time";
        case "week": return "week";
        case "month": return "month";
        case "datetime": return "datetime-local";
        case "radio": return "radio";
        case "range": return "range";
        case "password": return "password";
        case "email": return "email";
        case "number": return "number";
        case "telephone": return "tel";
        case "url": return "url";
        default: return "text";
    }
};
