// import Home from '../../pages/homeFeed';
import About from '../../pages/about';
import Blog from '../../pages/blog';
import Contact from '../../pages/contact';
import HowWeWork from '../../pages/howWeWork';
import GetInvolved from '../../pages/getInvolved';
import Jobs from '../../pages/jobs';
import SingleAnnotation from '../../pages/singleAnnotation';
import SinglePost from '../../pages/singlePost';

interface IRoute {
    path: string;
    component?: React.FC | React.ComponentClass;
    name: string;
    iconClassName?: string;
    hidden?: boolean;
}

export const Routes: IRoute[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        // component: About,
        name: 'About',
        path: '/about'
    },
    {
        // component: Blog,
        name: 'Blog',
        path: '/blog',
        hidden: true
    },
    {
        // component: Contact,
        name: 'Contact',
        path: '/contact'
    },
    {
        // component: HowWeWork,
        name: 'How We Work',
        path: '/how-we-work'
    },
    {
        // component: GetInvolved,
        name: 'Get Involved',
        path: '/get-involved'
    },
    {
        // component: Jobs,
        name: 'Jobs',
        path: '/jobs'
    },
    {
        name: 'Single Annotation',
        // component: SingleAnnotation,
        hidden: true,
        path: '/annotation/:id'
    },
    {
        name: 'Single Post',
        // component: SinglePost,
        hidden: true,
        path: '/post/:id'
    }
];
