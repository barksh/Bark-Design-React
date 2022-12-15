/**
 * @author WMXPY
 * @namespace Button
 * @description Button
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../src";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => {

  return (<Button
    {...args}
  />);
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};
