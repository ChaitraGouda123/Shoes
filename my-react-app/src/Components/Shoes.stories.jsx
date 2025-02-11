import React from "react";
import Shoes from "./Shoes";

export default {
  title: "Checkout/Shoes",
  component: Shoes,
};

const Template = (args) => <Shoes {...args} />;

export const Default = Template.bind({});
Default.args = {};
