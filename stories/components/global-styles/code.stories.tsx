/**
 * @author WMXPY
 * @namespace GlobalStyles
 * @description Code
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import { Theme } from "../../../src";

export default {
    title: "Global Styles",
} as Meta<any>;

const Template: StoryFn<any> = (_args: any) => {

    return (<Theme>
        <div>
            Code Block
        </div>
        <pre>
            <code
                data-lang="shell"
            >
                make run-code
            </code>
        </pre>
        <div>
            Inline Code like <code>
                Hello_World
            </code> between two words
        </div>
    </Theme>);
};

export const Code = Template.bind({});

Code.args = {
};
