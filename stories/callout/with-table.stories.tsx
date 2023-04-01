/**
 * @author WMXPY
 * @namespace Callout
 * @description With Table
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Callout, Table, Theme } from "../../src";

export default {
    title: "Callout",
    component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args: any) => {

    return (<Theme>
        <Callout
            {...args}
            title="Title"
            maximizeWidth
            contentPadding
            actions={<Button>Action</Button>}
            prefix={<div>Prefix</div>}
            suffix={<div>Suffix</div>}
        >
            <Table>
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
        </Callout>
    </Theme>);
};

export const WithTable = Template.bind({});

WithTable.args = {
};
