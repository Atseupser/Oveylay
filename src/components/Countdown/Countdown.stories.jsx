import React from 'react';
import Countdown from './';
import styles from './'

export default {
  title: 'Example/Countdown',
  component: Countdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Countdown {...args} />;

export const Paused = Template.bind({});
Paused.args = {
  time: [ , 1651068808651],
};

export const Playing = Template.bind({});
Playing.args = {
  time: [1924956404941], // modify this timestamp to be a future date
};

