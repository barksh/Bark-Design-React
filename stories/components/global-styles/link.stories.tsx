/**
 * @author WMXPY
 * @namespace GlobalStyles
 * @description Link
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "../../../src";

export default {
    title: "Global Styles",
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (_args: any) => {

    return (<Theme>
        <div>
            Link
        </div>
        <div>
            <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Example Site
            </a>
        </div>
        <div>
            Inline Link
        </div>
        <div>
            In this sentence, there is a link: <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Example Site
            </a> With other words.
        </div>
    </Theme>);
};

export const Link = Template.bind({});

Link.args = {
};
