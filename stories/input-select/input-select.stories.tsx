/**
 * @author WMXPY
 * @namespace InputSelect
 * @description Input Select
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from "react";
import { InputSelect, Theme } from "../../src";

export default {
    title: "Input Select",
    component: InputSelect,
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args: any) => {

    const [value, setValue] = React.useState('');

    return (<Theme>
        <InputSelect
            {...args}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
