/**
 * @author WMXPY
 * @namespace Components_ProgressBar
 * @description Progress Bar
 */

import * as React from "react";
import { ProgressBarProps } from "./declare";
import { ProgressBarStyledContainer } from "./styles/styled-container";
import { ProgressBarStyledHeader } from "./styles/styled-header";
import { ProgressBarStyledInformation } from "./styles/styled-information";
import { ProgressBarStyledProgressBar } from "./styles/styled-progress-bar";
import { ProgressBarStyledTitle } from "./styles/styled-title";

export const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {

    return (<ProgressBarStyledContainer
        size={props.size}
    >
        <ProgressBarStyledHeader>
            <ProgressBarStyledTitle>
                {props.title}
            </ProgressBarStyledTitle>
            <ProgressBarStyledInformation>
                {props.information}
            </ProgressBarStyledInformation>
        </ProgressBarStyledHeader>
        <ProgressBarStyledProgressBar
        />
    </ProgressBarStyledContainer>);
};
