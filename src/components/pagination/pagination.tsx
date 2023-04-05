/**
 * @author WMXPY
 * @namespace Components_Pagination
 * @description Pagination
 */

import * as React from "react";
import { Button, ButtonGroup } from "../export";
import { PaginationElement, calculateRenderListForPagination } from "./data/render-list";
import { PaginationProps } from "./declare";
import { PaginationStyledContainer } from "./styles/styled-container";
import { PaginationStyledHeaderButton } from "./styles/styled-header-button";

export const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {

    const renderList: PaginationElement[] = calculateRenderListForPagination(props.currentPage, props.pageCount, props.maxPageCount);

    return (<PaginationStyledContainer>
        <ButtonGroup>
            {renderList.map((pageElement: PaginationElement) => {

                if (pageElement.type === "page") {
                    return (<PaginationStyledHeaderButton
                        key={`page-${pageElement.value}`}
                        size={props.size}
                        noBorder={true}
                        square={true}
                        activated={pageElement.value === props.currentPage}
                        onClick={() => {
                            if (typeof props.onChange === 'function') {
                                props.onChange(pageElement.value);
                            }
                        }}
                    >
                        {pageElement.value}
                    </PaginationStyledHeaderButton>);
                }

                return (<Button
                    key={`ellipsis-${pageElement.direction}`}
                    size={props.size}
                    noBorder={true}
                    square={true}
                    onClick={() => {
                        if (typeof props.onChange === 'function') {
                            if (pageElement.direction === "left") {
                                props.onChange(props.currentPage - 1);
                            } else {
                                props.onChange(props.currentPage + 1);
                            }
                        }
                    }}
                >
                    {pageElement.direction === "left" ? "..." : "..."}
                </Button>);
            })}
        </ButtonGroup>
    </PaginationStyledContainer>);
};
