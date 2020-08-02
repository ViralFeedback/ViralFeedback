import Home from '../screens/homeFeed';
import About from '../screens/about';
import Blog from '../screens/blog';
import Contact from '../screens/contact';
import HowWeWork from '../screens/howWeWork';
import GetInvolved from '../screens/getInvolved';
import Jobs from '../screens/jobs';
import SingleAnnotation from '../screens/singleAnnotation';
import SinglePost from '../screens/singlePost';

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
        component: Blog,
        name: 'Blog',
        path: '/blog',
        hidden: true
    },
    {
        component: Contact,
        name: 'Contact',
        path: '/contact'
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
        component: Jobs,
        name: 'Jobs',
        path: '/jobs',
        hidden: true
    },
    {
        name: 'Single Annotation',
        component: SingleAnnotation,
        hidden: true,
        path: '/annotation/:id'
    },
    {
        name: 'Single Post',
        component: SinglePost,
        hidden: true,
        path: '/post/:id'
    }
];
