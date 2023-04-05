/**
 * @author WMXPY
 * @namespace Pagination
 * @description Pagination
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Card, Pagination, Theme } from "../../../src";

export default {
    title: "Pagination",
    component: Pagination,
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args: any) => {

    const [currentPage, setCurrentPage] = React.useState<number>(1);

    return (<Theme>
        <Card
            actions={<Pagination
                {...args}
                currentPage={currentPage}
                onChange={(page: number) => {
                    setCurrentPage(page);
                }}
            />}
        >
            <div>Content</div>
        </Card>
    </Theme>);
};

export const InCard = Template.bind({});

InCard.args = {
    pageCount: 10,
    maxPageCount: 5,
};
