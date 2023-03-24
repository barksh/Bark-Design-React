/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Side Panel
 */

import * as React from "react";
import { createPortal } from "react-dom";
import { useOverlayZIndex } from "../../hooks/export";
import { SidePanelProps } from "./declare";
import { SidePanelStyledContainer } from "./styles/styled-container";

const getAttachedElement = (props: SidePanelProps): HTMLElement => {

    if (typeof props.getAttachedElement === 'function') {
        return props.getAttachedElement();
    }

    return document.body;
};

export const SidePanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {

    const zIndex: number = useOverlayZIndex();

    const attachedElement: HTMLElement = getAttachedElement(props);

    if (props.active) {
        return (createPortal(
            (<SidePanelStyledContainer
                zIndex={zIndex}
                size={props.size}
            >
                {props.children}
            </SidePanelStyledContainer>),
            attachedElement,
            props.identifier,
        ));
    }
    return null;
};
