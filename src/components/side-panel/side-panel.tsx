/**
 * @author WMXPY
 * @namespace Components_SidePanel
 * @description Side Panel
 */

import * as React from "react";
import { createPortal } from "react-dom";
import { useOverlayZIndex } from "../../hooks/export";
import { SidePanelProps } from "./declare";
import { SidePanelStyledAlwaysRenderContainer } from "./styles/styled-always-render-container";
import { SidePanelStyledContainer } from "./styles/styled-container";

const getAttachedElement = (props: SidePanelProps): HTMLElement => {

    if (typeof props.getAttachedElement === 'function') {
        return props.getAttachedElement();
    }

    return document.body;
};

const SidePanelContainer: React.FC<SidePanelProps> = (props: SidePanelProps) => {

    if (props.alwaysRender) {

        return (<SidePanelStyledAlwaysRenderContainer
            active={props.active}
            align={props.align}
            zIndex={props.zIndex}
            size={props.size}
            noBorder={props.noBorder}
        >
            {props.children}
        </SidePanelStyledAlwaysRenderContainer>);
    }

    return (<SidePanelStyledContainer
        active={props.active}
        align={props.align}
        zIndex={props.zIndex}
        size={props.size}
        noBorder={props.noBorder}
    >
        {props.children}
    </SidePanelStyledContainer>);
};

export const SidePanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {

    const zIndex: number = useOverlayZIndex();

    const attachedElement: HTMLElement = getAttachedElement(props);

    if (props.active || props.alwaysRender) {
        return (createPortal(
            (<SidePanelContainer
                {...props}
                zIndex={zIndex}
            >
                {props.children}
            </SidePanelContainer>),
            attachedElement,
            props.identifier,
        ));
    }
    return null;
};
