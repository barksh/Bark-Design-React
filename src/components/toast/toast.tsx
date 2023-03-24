/**
 * @author WMXPY
 * @namespace Components_Toast
 * @description Toast
 */

import * as React from "react";
import { createPortal } from "react-dom";
import { useOverlayZIndex } from "../../hooks/export";
import { ToastProps } from "./declare";
import { ToastManager } from "./manager";
import { ToastStyledContainer } from "./styles/styled-container";

const getAttachedElement = (props: ToastProps, zIndex: number): HTMLElement => {

    const fixedZIndex: number = props.zIndex ?? zIndex;

    if (typeof props.getAttachedElement === 'function') {
        return props.getAttachedElement();
    }

    switch (props.position) {
        case 'bottom-left':
            return ToastManager.getBottomLeftHtmlElement(fixedZIndex).element;
        case 'bottom-right':
            return ToastManager.getBottomRightHtmlElement(fixedZIndex).element;
        case 'top-left':
            return ToastManager.getTopLeftHtmlElement(fixedZIndex).element;
        case 'top-right':
            return ToastManager.getTopRightHtmlElement(fixedZIndex).element;
        default:
            return ToastManager.getBottomRightHtmlElement(fixedZIndex).element;
    }
};

export const Toast: React.FC<ToastProps> = (props: ToastProps) => {

    const zIndex: number = useOverlayZIndex();

    const attachedElement: HTMLElement = getAttachedElement(props, zIndex);

    if (props.active) {
        return (createPortal(
            (<ToastStyledContainer
                position={props.position}
            >
                {props.children}
            </ToastStyledContainer>),
            attachedElement,
            props.identifier,
        ));
    }
    return null;
};
