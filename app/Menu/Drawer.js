import Home from '../pages/home/home';
import About from '../pages/about/about';
import { DrawerNavigator } from 'react-navigation';

export const Drawer =  DrawerNavigator(
    {
        Home:{
            screen : Home
        },
        About:{
            screen : About
        }
    },{
        initialRouteName:'Home'
    }
);

