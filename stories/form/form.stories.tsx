/**
 * @author WMXPY
 * @namespace Form
 * @description Form
 * @override Story
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonGroup, Theme } from "../../src";
import { Form, useForm } from "../../src/components/form/form";
import { InputText } from "../../src/components/input-text/input-text";

export default {
    title: "Form",
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (_args: any) => {

    const form = useForm();

    return (<Theme>
        <Form
            controller={form}
        >
            <InputText
                title="First Input"
                size="small"
                information="Value must be 123"
                onValidate={(value: string) => {
                    if (value !== '123') {
                        return 'Error! Value must be 123';
                    }
                    return true;
                }}
            />
            <InputText
                title="Second Input"
                size="regular"
                onValidate={(value: string) => {
                    if (!value) {
                        return 'Error! Oh No! This is long and, Value must be not empty';
                    }
                    return true;
                }}
            />
            <InputText
                defaultValue="Default Value"
                title="Input with default value"
                warning="This is a warning"
                size="large"
            />
        </Form>
        <ButtonGroup>
            <Button
                onClick={() => {
                    alert(JSON.stringify(form.getFormValues(), null, 2));
                }}
            >
                Submit
            </Button>
            <Button
                onClick={() => {
                    alert(form.validateForm());
                }}
            >
                Validate
            </Button>
        </ButtonGroup>
    </Theme>);
};

export const Primary = Template.bind({});

Primary.args = {
};
