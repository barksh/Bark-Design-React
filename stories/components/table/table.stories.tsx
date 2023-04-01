/**
 * @author WMXPY
 * @namespace Table
 * @description Table
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Table, Theme } from "../../../src";

export default {
    title: "Table",
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: any) => {

    return (<Theme>
        <Table
            {...args}
        >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>72</td>
                </tr>
            </tbody>
        </Table>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
