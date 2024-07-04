import React from 'react';
import Project from './Project/Project';
import Navigation from '../HomePage/NavBar/Navigation'
import img1 from '../../image/project/mug-fair/mug-faire.png'

const myData=[
    {   id:1,
        name:'https:mug-fair',
        description:'Users can easily buy mugs of different brands on this website Users can register with username, email, and password. And can later log in with email and password. Logged-in users can place orders. Placed orders can be viewed at any time by visiting My Order and canceling the order if desired.Admin can view all users orders and cancel orders. Admin can also add new products and delete old products in the database.',
        thumb:img1,
        preview:{}
    },
    {
        id:2,
        name:'Tour-thirsty',
        description:'',
        thumb:'https://i.ibb.co/YdXMYn1/Screenshot-5.png',
        screenshot:{shot1:'https://i.ibb.co/pv53vz1/Screenshot-4.png',shot2:'https://i.ibb.co/3v6C2jt/Screenshot-3.png',shot3:'https://i.ibb.co/V9zBrFH/Screenshot-2.png',shot4:'https://i.ibb.co/xDGKtch/Screenshot-1.png'},
        liveSite:'https://tour-thirsty-1.web.app/home'
    },
    {
        id:3,
        name:'Pain Care',
        description:'',
        thumb:'https://i.ibb.co/wJgqYs2/Screenshot-6.png',
        ScreenShot:{
            shot1:'https://i.ibb.co/wJgqYs2/Screenshot-6.png',
            shot2:'https://i.ibb.co/ZBbQPH9/Screenshot-5.png',
            shot3:'https://i.ibb.co/tHBD3L7/Screenshot-4.png',
            shot4:'https://i.ibb.co/xjfxQQw/Screenshot-3.png',
            shot5:'https://i.ibb.co/gmbcKSG/Screenshot-2.png',
            shot6:'https://i.ibb.co/Cw6kKDG/Screenshot-1.png',
        },
        liveSite:'https://pain-care-1.firebaseapp.com/'

    },
    {
        id:4,
        name:'',
        description:'',
        thumb:''
    },
    {
        id:5,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:6,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:7,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:8,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:9,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:10,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:11,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
    {
        id:12,
        name:'https:mug-fair',
        description:'',
        thumb:''
    },
]

const Projects = () => {
    return (
        <div>
            <Navigation/>
            {
                myData.map(data=><Project
                project={data}
                ></Project>)
            }
        </div>
    );
};

export default Projects;