/**
 * @author WMXPY
 * @namespace Components_Pagination_Data
 * @description Render List
 */

export type PaginationElement = {

    readonly type: 'page';
    readonly value: number;
} | {

    readonly type: 'ellipsis';
    readonly direction: 'left' | 'right';
};

export const calculateRenderListForPagination = (
    currentPage: number,
    pageCount: number,
    maxPageCount?: number,
): PaginationElement[] => {

    if (typeof maxPageCount !== 'number'
        || pageCount <= maxPageCount
        || maxPageCount <= 0
    ) {

        return Array
            .from(Array(pageCount).keys())
            .map((value: number) => {
                return {
                    type: 'page',
                    value: value + 1,
                };
            });
    }

    const centerPortionSize: number = maxPageCount - 2;

    const startOnlyLimit: number = 3 + Math.floor(centerPortionSize / 2);
    const endOnlyLimit: number = pageCount - centerPortionSize + Math.floor(centerPortionSize / 2) - 1;

    const centerPortion: number[] = [];
    let startEllipsis: boolean = false;
    let endEllipsis: boolean = false;

    if (currentPage < startOnlyLimit) {

        for (let i = 2; i <= centerPortionSize + 1; i++) {
            centerPortion.push(i);
        }

        endEllipsis = true;
    } else if (currentPage > endOnlyLimit) {

        for (let i = pageCount - centerPortionSize; i <= pageCount - 1; i++) {
            centerPortion.push(i);
        }

        startEllipsis = true;
    } else {

        const centerPortionHalf: number = Math.floor(centerPortionSize / 2);
        const isOdd: boolean = centerPortionSize % 2 === 1;

        const centerPortionStart: number = currentPage - centerPortionHalf + (isOdd ? 0 : 1);
        const centerPortionEnd: number = currentPage + centerPortionHalf;

        for (let i = centerPortionStart; i <= centerPortionEnd; i++) {
            centerPortion.push(i);
        }

        startEllipsis = true;
        endEllipsis = true;
    }

    return [
        {
            type: 'page',
            value: 1,
        },
        ...(startEllipsis ? [{
            type: 'ellipsis',
            direction: 'left',
        }] : [] as any),
        ...centerPortion.map((value: number) => {
            return {
                type: 'page',
                value,
            };
        }),
        ...(endEllipsis ? [{
            type: 'ellipsis',
            direction: 'right',
        }] : [] as any),
        {
            type: 'page',
            value: pageCount,
        },
    ];
};
