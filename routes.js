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


/*CATATAN: INI ADALAH ROUTES, BERISI TENTANG RULES/ACTIONS ROUTING REQUEST USER UNTUK 
KE URL DAN METHOD TERTENTU*/
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
        method: 'GET',
        path: '/profile/{username}',
        handler: (request, h) => {
            const {username} = request.params;
            return `welcome to ${username}'s profile!`;
        },
    },
    {
        method: 'GET',
        path: '/greetings/{toUser?}',
        handler: (request, h) => {
            const {toUser = "Good man"} = request.params;
            const {lang} = request.query;
            if (lang === "id") return `halo cuk ${toUser}.`;
            else if (lang === "de") return `Halo, bist du ${toUser}?`;

            return `Hi! ${toUser}`;
        },
    },
    {
        method: 'GET',
        path: '/search',
        handler: (request, h) =>{
            const {item, location} = request.query;
            return `Here is the result for ${item} in ${location}!`;
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