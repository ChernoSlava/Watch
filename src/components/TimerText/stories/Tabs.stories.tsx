import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TimerText } from "..";

export default {
    title: "Example/TimerText",
    component: TimerText,
}  as ComponentMeta<typeof TimerText>;

const Template: ComponentStory<typeof TimerText> = args => <TimerText {...args} />;

export const Playground = Template.bind({});


Playground.args = {
    size: "lg",
    min: '00',
    sec: '00',
    milsec: '00'
}

Playground.argTypes = {
    size: {
        control: { type: 'select', options: ['lg', 'sm'] },
    },
}