/**
 * @author WMXPY
 * @namespace Components_Toast
 * @description Toast
 */

import * as React from "react";
import { createPortal } from "react-dom";
import { ToastProps } from "./declare";
import { ToastManager } from "./manager";
import { ToastStyledContainer } from "./styles/styled-container";

const getAttachedElement = (props: ToastProps): HTMLElement => {

    if (typeof props.getAttachedElement === 'function') {
        return props.getAttachedElement();
    }

    switch (props.position) {
        case 'bottom-left':
            return ToastManager.getBottomLeftHtmlElement().element;
        case 'bottom-right':
            return ToastManager.getBottomRightHtmlElement().element;
        case 'top-left':
            return ToastManager.getTopLeftHtmlElement().element;
        case 'top-right':
            return ToastManager.getTopRightHtmlElement().element;
        default:
            return ToastManager.getBottomRightHtmlElement().element;
    }
};

export const Toast: React.FC<ToastProps> = (props: ToastProps) => {

    const attachedElement: HTMLElement = getAttachedElement(props);

    if (props.active) {
        return (createPortal(
            (<ToastStyledContainer>
                {props.children}
            </ToastStyledContainer>),
            attachedElement,
            props.identifier,
        ));
    }
    return null;
};
