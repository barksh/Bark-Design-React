/**
 * @author WMXPY
 * @namespace Components_Pagination_Data
 * @description Render List
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { PaginationElement, calculateRenderListForPagination } from "../../../../../src/components/pagination/data/render-list";
import { flatPageElements } from "./render-list-util";

describe("Given [Render List] Data Helper Methods for Pagination Component", (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance("components-pagination-data-render-list");

    it("Should be able to calculate render list for pagination smaller then max", async (): Promise<void> => {

        const result: PaginationElement[] = calculateRenderListForPagination(1, 5, 10);
        const flattened: number[] = flatPageElements(result);

        expect(flattened).to.be.deep.equal([1, 2, 3, 4, 5]);
    });

    it("Should be able to calculate render list for pagination bigger then max, with starting current page", async (): Promise<void> => {

        const result: PaginationElement[] = calculateRenderListForPagination(1, 10, 5);
        const flattened: number[] = flatPageElements(result);

        expect(flattened).to.be.deep.equal([1, 2, 3, 4, 0, 10]);
    });

    it("Should be able to calculate render list for pagination bigger then max, with starting current page range", async (): Promise<void> => {

        const result: PaginationElement[] = calculateRenderListForPagination(3, 10, 5);
        const flattened: number[] = flatPageElements(result);

        expect(flattened).to.be.deep.equal([1, 2, 3, 4, 0, 10]);
    });

    it("Should be able to calculate render list for pagination bigger then max, with ending current page", async (): Promise<void> => {

        const result: PaginationElement[] = calculateRenderListForPagination(10, 10, 5);
        const flattened: number[] = flatPageElements(result);

        expect(flattened).to.be.deep.equal([1, 0, 7, 8, 9, 10]);
    });

    it("Should be able to calculate render list for pagination bigger then max, with middle current page", async (): Promise<void> => {

        const result: PaginationElement[] = calculateRenderListForPagination(5, 10, 6);
        const flattened: number[] = flatPageElements(result);

        expect(flattened).to.be.deep.equal([1, 0, 4, 5, 6, 7, 0, 10]);
    });
});
