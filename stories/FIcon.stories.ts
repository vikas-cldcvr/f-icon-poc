import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "./../src/f-icon/f-icon";

export default {
  title: "FIcon",
} as Meta;

const Template: Story<any> = () => {
  return html` <f-icon></f-icon>`;
};

export const Basic = Template.bind({});
