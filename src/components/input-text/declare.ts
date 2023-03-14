/**
 * @author WMXPY
 * @namespace Components_InputText
 * @description Declare
 */

import * as React from "react";
import { CommonInputProps } from "../input/declare";

export type InputTextProps =
    & {
        readonly prefix?: React.ReactNode;
        readonly suffix?: React.ReactNode;

        readonly placeholder?: string;
    }
    & CommonInputProps<string>;
