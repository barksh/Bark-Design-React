/**
 * @author WMXPY
 * @namespace Hooks_Time
 * @description Use Timed Active
 */

import * as React from "react";

export type UseTimedActive = {

    readonly active: boolean;

    readonly open: (duration?: number) => void;
    readonly close: () => void;
};

export const useTimedActive = (): UseTimedActive => {

    const timerRef: React.MutableRefObject<NodeJS.Timeout | null> = React.useRef(null);

    const [active, setActive] = React.useState<boolean>(false);

    const open = (duration?: number) => {

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setActive(true);

        if (typeof duration === 'number') {
            timerRef.current = setTimeout(() => {
                close();
            }, duration);
        }
    };

    const close = () => {

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setActive(false);
    };

    return {
        active,
        open,
        close,
    };
};
