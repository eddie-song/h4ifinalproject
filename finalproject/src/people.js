/*
This file contains the information of each group member for the main page ID cards.
*/

import krishnanpic from './krishnan_images/profile_pic.jpeg';
import eddiepic from './eddie_images/eddie-selfie.jpg';
import arjunpic from './arjun.png';
import nadiapic from './nadia_images/IMG_3286.jpg';
import rivanpic from './rivan_images/logo.png';
import avishipic from './avishi_images/avishipic.jpg';

const people = [
    {
        name: 'Avishi Gupta',
        direction: 'left',
        role: 'Designer',
        image_src: avishipic,
        backgroundColor: '#B2AC88',
        path: "/avishi"
    },
    {
        name: 'Krishnan Tholkappian',
        direction: 'right',
        role: 'Product Manager',
        image_src: krishnanpic,
        backgroundColor: '#B9CDFB',
        path: "/krishnan"
    },
    {
        name: 'Eddie Song',
        direction: 'left',
        role: 'Tech Lead',
        image_src: eddiepic,
        backgroundColor: '#F4F0E0',
        path: "/eddie"
    },
    {
        name: 'Arjun Mahendra',
        direction: 'right',
        role: 'Engineer',
        image_src: arjunpic,
        backgroundColor: 'white',
        path: "/arjun"
    },
    {
        name: 'Nadia Meyerovich',
        direction: 'left',
        role: 'Engineer',
        image_src: nadiapic,
        backgroundColor: '#E6E6FA',
        path: "/nadia"
    },
    {
        name: 'Rivan Parikh',
        direction: 'right',
        role: 'Engineer',
        image_src: rivanpic,
        backgroundColor: '#FFA500',
        path: "/rivan"
    },
]

export default people