/**
 * @author WMXPY
 * @namespace LeadingStatic
 * @description Leading Static
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { FaMap } from "react-icons/fa";
import { LeadingStatic, Theme } from "../../../src";

export default {
    title: "Leading",
    component: LeadingStatic,
} as Meta<typeof LeadingStatic>;

const Template: StoryFn<typeof LeadingStatic> = (args: any) => {

    return (<Theme>
        <LeadingStatic
            {...args}
        >
            <FaMap
                size={24}
            />
        </LeadingStatic>
    </Theme>);
};

export const Static = Template.bind({});

Static.args = {
};
