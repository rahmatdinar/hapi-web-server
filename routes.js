// const routes = [
//     {
//         method:"GET",
//         path:"/",
//         handler:(response, h) => {
//             return `homepage`;
//         },
//     },
//     {
//         method:"*",
//         path:"/",
//         handler:(response, h) => {
//             return `halaman tidak dapat diakses menggunakan ${method} method request`;
//         },
//     },
//     {
//         method:"GET",
//         path:"/about",
//         handler:(response, h) => {
//             return `about page`;
//         }
//     },
//     {
//         method:"*",
//         path:"/about",
//         handler:(response, h) => {
//             return `halaman tidak dapat diakses menggunakan ${method} method request`;
//         },
//     },
// ];

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;