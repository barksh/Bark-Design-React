/**
 * @author WMXPY
 * @namespace Hooks_ZIndex
 * @description Use Underlay Z Index
 */

import * as React from "react";
import { ZIndexController } from "./controller";

const indexController: ZIndexController = ZIndexController.getInstance();

export const useUnderlayZIndex = (): number => {

    const [zIndex, setZIndex] = React.useState<number>(0);

    React.useEffect(() => {

        setZIndex(indexController.getUnderlayZIndex());
    }, []);

    return zIndex;
};
