import Home from '../screens/home-feed';
import About from '../screens/about';
import CommunityGuidelines from '../screens/community-guidelines';

interface IRoute {
    path: string;
    component: React.FC | React.ComponentClass;
    name: string;
    iconClassName?: string;
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
        component: CommunityGuidelines,
        name: 'Community Guidelines',
        path: '/community-guidelines'
    }
];
