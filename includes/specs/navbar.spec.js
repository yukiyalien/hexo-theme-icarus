const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'Navigation bar link settings',
    menu: {
        [type]: 'object',
        [doc]: 'Navigation bar menu links',
        [defaultValue]: {
            Home: '/',
            Archives: '/archives',
            Categories: '/categories',
            Tags: '/tags',
            About: '/about'
        },
        '*': {
            [type]: 'string',
            [doc]: 'Path or URL to the menu item'
        }
    },
    links: {
        ...require('./icon_link.spec'),
        [doc]: 'Navigation bar links to be shown on the right',
        [defaultValue]: {
            '@yukiyalien': {
                icon: 'fab fa-twitter',
                url: 'https://twitter.com/yukiyalien'
            }
        }
    }
};