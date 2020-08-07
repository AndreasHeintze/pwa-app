const ghpages = require('gh-pages')

ghpages.publish(
    '__sapper__/export/pwa-app',
    {
        branch: 'master',
        repo: 'https://github.com/AndreasHeintze/pwa-app.git',
        user: {
            name: 'AndreasHeintze',
            email: 'andreas@heintze.se'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)