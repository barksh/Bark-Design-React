/**
 * @author WMXPY
 * @namespace Components_Code
 * @description Code
 */

import * as React from "react";
import { Button, ContentBlock } from "../export";
import { CodeProps } from "./declare";
import { CodeStyledContainer } from "./styles/styled-container";
import { CodeStyledCode } from "./styles/styled-code";
import { CodeStyledPre } from "./styles/styled-pre";
import { CodeStyledButtonContainer } from "./styles/styled-button-container";
import { limitSizeProps } from "../../util/size";

const CopyButton: React.FC<CodeProps> = (props: CodeProps) => {

    if (props.copyButton) {

        return (<CodeStyledButtonContainer>
            <Button
                size={limitSizeProps(
                    props.size,
                    ['small', 'regular'],
                    'regular',
                )}
                onClick={() => {
                    navigator.clipboard.writeText(
                        String(props.children),
                    );
                }}
            >
                {props.copyButton}
            </Button>
        </CodeStyledButtonContainer>);
    }
    return null;
};

export const Code: React.FC<CodeProps> = (props: CodeProps) => {

    return (<ContentBlock
        size={props.size}
        maximize={props.maximize}
        maximizeWidth={props.maximizeWidth}
        maximizeHeight={props.maximizeHeight}
        noBorder={true}
    >
        <CodeStyledContainer
            size={props.size}
        >
            <CodeStyledPre
                noPadding={props.noPadding}
                noMargin={props.noMargin}
            >
                <CopyButton {...props} />
                <CodeStyledCode
                    wrap={props.wrap}
                    data-lang={props.language}
                >
                    {props.children}
                </CodeStyledCode>
            </CodeStyledPre>
        </CodeStyledContainer>
    </ContentBlock>);
};
