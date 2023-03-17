/**
 * @author WMXPY
 * @namespace Components_Card
 * @description Card Actions
 */

import * as React from "react";
import { fixSizeProps, limitSizeProps } from "../../util/size";
import { ButtonGroupContext } from "../button-group/context";
import { ButtonContext } from "../button/context";
import { CardProps } from "./declare";
import { CardStyledActions } from "./styles/styled-actions";

export const CardActions: React.FC<CardProps> = (props: CardProps) => {

    if (props.actions) {
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
                    <CardStyledActions
                        size={props.size}
                    >
                        {props.actions}
                    </CardStyledActions>
                </ButtonContext.Provider>
            </ButtonGroupContext.Provider>);
    }
    return null;
};
