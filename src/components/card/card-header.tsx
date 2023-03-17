/**
 * @author WMXPY
 * @namespace Components_Card
 * @description Card Header
 */

import * as React from "react";
import { fixSizeProps, limitSizeProps } from "../../util/size";
import { ButtonGroupContext } from "../button-group/context";
import { ButtonContext } from "../button/context";
import { CardProps } from "./declare";
import { CardStyledHeader } from "./styles/styled-header";
import { CardStyledHeaderPrefixContainer } from "./styles/styled-header-prefix-container";
import { CardStyledHeaderSuffixContainer } from "./styles/styled-header-suffix-container";
import { CardStyledHeaderTitle } from "./styles/styled-header-title";

const CardHeaderPrefix: React.FC<CardProps> = (props: CardProps) => {

    if (props.headerPrefix) {
        return (<ButtonGroupContext.Provider
            value={{
                noBorder: true,
                maximize: true,
                keepVisible: true,
                size: limitSizeProps(
                    fixSizeProps(props.size),
                    ['small', 'regular'],
                    'regular',
                ),
            }}
        >
            <ButtonContext.Provider
                value={{
                    noBorder: true,
                    maximize: true,
                    size: props.size,
                }}
            >
                <CardStyledHeaderPrefixContainer
                    size={props.size}
                >
                    {props.headerPrefix}
                </CardStyledHeaderPrefixContainer>
            </ButtonContext.Provider>
        </ButtonGroupContext.Provider>);
    }
    return null;
};

const CardHeaderSuffix: React.FC<CardProps> = (props: CardProps) => {

    if (props.headerSuffix) {
        return (<ButtonGroupContext.Provider
            value={{
                noBorder: true,
                maximize: true,
                keepVisible: true,
                size: limitSizeProps(
                    fixSizeProps(props.size),
                    ['small', 'regular'],
                    'regular',
                ),
            }}
        >
            <ButtonContext.Provider
                value={{
                    noBorder: true,
                    maximize: true,
                    size: props.size,
                }}
            >
                <CardStyledHeaderSuffixContainer
                    size={props.size}
                >
                    {props.headerSuffix}
                </CardStyledHeaderSuffixContainer>
            </ButtonContext.Provider>
        </ButtonGroupContext.Provider>);
    }
    return null;
};

export const CardHeader: React.FC<CardProps> = (props: CardProps) => {

    if (props.headerTitle || props.headerPrefix || props.headerSuffix) {
        return (
            <ButtonGroupContext.Provider
                value={{
                    noBorder: true,
                    maximize: true,
                    size: limitSizeProps(
                        fixSizeProps(props.size),
                        ['small', 'regular'],
                        'regular',
                    ),
                }}
            >
                <ButtonContext.Provider
                    value={{
                        noBorder: true,
                        size: limitSizeProps(
                            fixSizeProps(props.size),
                            ['small', 'regular'],
                            'regular',
                        ),
                    }}
                >
                    <CardStyledHeader
                        size={props.size}
                    >
                        <CardHeaderPrefix
                            {...props}
                        />
                        <CardStyledHeaderTitle
                            size={props.size}
                        >
                            {props.headerTitle}
                        </CardStyledHeaderTitle>
                        <CardHeaderSuffix
                            {...props}
                        />
                    </CardStyledHeader>
                </ButtonContext.Provider>
            </ButtonGroupContext.Provider>);
    }
    return null;
};
