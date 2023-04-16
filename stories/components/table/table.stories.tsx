/**
 * @author WMXPY
 * @namespace Table
 * @description Table
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow, Theme } from "../../../src";

export default {
    title: "Table",
    component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args: any) => {

    return (<Theme>
        <Table
            {...args}
        >
            <TableHead>
                <TableRow>
                    <TableHeader>First Name</TableHeader>
                    <TableHeader>Last Name</TableHeader>
                    <TableHeader>Age</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableData>John</TableData>
                    <TableData>Doe</TableData>
                    <TableData>50</TableData>
                </TableRow>
                <TableRow>
                    <TableData>Mary</TableData>
                    <TableData>Moe</TableData>
                    <TableData>94</TableData>
                </TableRow>
                <TableRow>
                    <TableData>July</TableData>
                    <TableData>Dooley</TableData>
                    <TableData>72</TableData>
                </TableRow>
            </TableBody>
        </Table>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
