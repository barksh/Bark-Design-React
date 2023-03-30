/**
 * @author WMXPY
 * @namespace Hooks_Time
 * @description Use Timed Active
 */

import * as React from "react";
import { BarkThemeMode } from "../../theme/declare";

export const useThemeDetector = (): BarkThemeMode => {

    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = React.useState(getCurrentTheme());

    const themeListener = ((event: any) => {
        setIsDarkTheme(event.matches);
    });

    React.useEffect(() => {

        const darkThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMedia.addListener(themeListener);

        return () => {
            darkThemeMedia.removeListener(themeListener);
        };
    }, []);

    return isDarkTheme ? 'dark' : 'light';
};
