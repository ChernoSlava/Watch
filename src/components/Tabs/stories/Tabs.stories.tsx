import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tabs } from "..";

export default {
    title: "Example/Tabs",
    component: Tabs,
    argTypes: { onSelect: { action: 'clicked' }},
}  as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    items: [{
        id:1,
        title: 'Рыбы'
    },
    {
        id:2,
        title: 'Избранное'
    }],
    defaultTab: 1
}