

import React from 'react';
import PhotoCard from '../common/PhotoCard';
import { decorators } from './preview';


export default {
        title: 'Photo Card',
        component: PhotoCard,
        argTypes: {
          backgroundColor: { control: 'color' },
        },
        decorators: decorators
};


const Template = (args) => <PhotoCard {...args} />;

export const SelectedPhoto = Template.bind({});
SelectedPhoto.args = {
        disbleSelect : false, 
        photo : {
                picture : "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN"
        }, 
        selected : true,
};

export const NotSelectedPhoto = Template.bind({});
NotSelectedPhoto.args = {
        disbleSelect : false, 
        photo : {
                picture : "https://www.filepicker.io/api/file/c5XwmVekSQO2CIabnudN"
        }, 
        selected : false,
};

