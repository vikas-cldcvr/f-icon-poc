import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "./../src/f-complex/f-complex";

export default {
  title: "FComplex",
} as Meta;

const Template: Story<any> = () => {
  const user = { username: "test" };
  return html` <f-complex .assignee=${user}></f-complex>`;
};

export const Basic = Template.bind({});
