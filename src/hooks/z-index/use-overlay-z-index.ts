/**
 * @author WMXPY
 * @namespace Hooks_ZIndex
 * @description Use Overlay Z Index
 */

import * as React from "react";
import { ZIndexController } from "./controller";

const indexController: ZIndexController = ZIndexController.getInstance();

export const useOverlayZIndex = (): number => {

    const [zIndex, setZIndex] = React.useState<number>(0);

    React.useEffect(() => {

        setZIndex(indexController.getOverlayZIndex());
    }, []);

    return zIndex;
};
