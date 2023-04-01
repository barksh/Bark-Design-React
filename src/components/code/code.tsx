/**
 * @author WMXPY
 * @namespace Components_Code
 * @description Code
 */

import * as React from "react";
import { limitSizeProps } from "../../util/size";
import { Button, ContentBlock } from "../export";
import { CodeProps } from "./declare";
import { CodeStyledButtonContainer } from "./styles/styled-button-container";
import { CodeStyledCode } from "./styles/styled-code";
import { CodeStyledContainer } from "./styles/styled-container";
import { CodeStyledPre } from "./styles/styled-pre";

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
        width={props.width}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        height={props.height}
        minHeight={props.minHeight}
        maxHeight={props.maxHeight}
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
