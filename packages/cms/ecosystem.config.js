module.exports = {
    apps: [
        {
            name: 'strapi',
            cwd: '/var/www/web/viralfeedback/packages/cms',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
