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
import { ProgressBarStyledProgress } from "./styles/styled-progress";
import { ProgressBarStyledProgressBar } from "./styles/styled-progress-bar";
import { ProgressBarStyledTitle } from "./styles/styled-title";

export const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {

    return (<ProgressBarStyledContainer
        size={props.size}
    >
        <ProgressBarStyledHeader>
            <ProgressBarStyledTitle>

            </ProgressBarStyledTitle>
            <ProgressBarStyledInformation>

            </ProgressBarStyledInformation>
        </ProgressBarStyledHeader>
        <ProgressBarStyledProgressBar>
            <ProgressBarStyledProgress>

            </ProgressBarStyledProgress>
        </ProgressBarStyledProgressBar>
    </ProgressBarStyledContainer>);
};
