interface IRoute {
    path?: string;
    component?: React.FC | React.ComponentClass;
    name: string;
    iconClassName?: string;
    hidden?: boolean;
    href?: string;
}

export const Routes: IRoute[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Blog',
        href: 'https://medium.com/viral-feedback'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'How We Work',
        path: '/how-we-work'
    },
    {
        name: 'Get Involved',
        path: '/get-involved'
    },
    {
        name: 'Jobs',
        path: '/jobs',
        hidden: true
    }
];
