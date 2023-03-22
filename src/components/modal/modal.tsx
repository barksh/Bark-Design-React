/**
 * @author WMXPY
 * @namespace Components_Modal
 * @description Modal
 */

import * as React from "react";
import { createPortal } from "react-dom";
import { useOverlayZIndex } from "../../hooks/export";
import { ModalProps } from "./declare";
import { ModalStyledContainer } from "./styles/styled-container";
import { ModalStyledContent } from "./styles/styled-content";

const getAttachedElement = (props: ModalProps): HTMLElement => {

    if (typeof props.getAttachedElement === 'function') {
        return props.getAttachedElement();
    }
    return document.body;
};

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {

    const attachedElement: HTMLElement = getAttachedElement(props);

    const zIndex: number = useOverlayZIndex();

    if (props.active) {
        return (createPortal(
            (<ModalStyledContainer
                zIndex={props.zIndex ?? zIndex}
                disableBackgroundPointerEvent={props.disableBackgroundPointerEvent}
            >
                <ModalStyledContent>
                    {props.children}
                </ModalStyledContent>
            </ModalStyledContainer>),
            attachedElement,
            props.identifier,
        ));
    }
    return null;
};
