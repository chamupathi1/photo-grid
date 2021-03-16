

import React from 'react';
import UserHeader from '../common/UserHeader';

import { decorators } from './preview';


export default {
        title: 'User Header',
        component: UserHeader,
        argTypes: {
          backgroundColor: { control: 'color' },
        },
        decorators: decorators
};


const Template = (args) => <UserHeader {...args} />;

export const Header = Template.bind({});
