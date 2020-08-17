module.exports = {
    apps: [
        {
            name: 'frontend',
            cwd: '/var/www/web/viralfeedback/packages/web',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
