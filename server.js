console.log("hi! welcome to my learning journey about hapi web server framework!");

const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () =>{
    const server = Hapi.server({
        port:5000,
        host:"localhost",
    });

    // server.route([
    //     {
    //         method:"GET",
    //         path:"/",
    //         handler: (request, h) => {
    //             return `Homepage\n`;
    //         },
    //     },
    //     {
    //         method:"GET",
    //         path:"/about",
    //         handler:(request, h) => {
    //             return `About page\n`;
    //         },
    //     },
    // ]);

    server.route(routes);

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();

