module.exports = {
    apps: [
        {
            name: 'next',
            cwd: '/home/<USERNAME>/<PROJECT-FOLDER>',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',

            },
        },
    ],
};
