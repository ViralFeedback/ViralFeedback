import Home from '../screens/homeFeed';
import About from '../screens/about';
import HowWeWork from '../screens/howWeWork';
import GetInvolved from '../screens/getInvolved';
import SingleAnnotation from '../screens/singleAnnotation';

interface IRoute {
    path: string;
    component: React.FC | React.ComponentClass;
    name: string;
    iconClassName?: string;
    hidden?: boolean;
}

export const Routes: IRoute[] = [
    {
        component: Home,
        name: 'Home',
        path: '/'
    },
    {
        component: About,
        name: 'About',
        path: '/about'
    },
    {
        component: HowWeWork,
        name: 'How We Work',
        path: '/how-we-work'
    },
    {
        component: GetInvolved,
        name: 'Get Involved',
        path: '/get-involved'
    },
    {
        name: 'Single Annotation',
        component: SingleAnnotation,
        hidden: true,
        path: '/annotation/:id'
    }
];
