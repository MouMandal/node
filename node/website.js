const fs = require('fs');
const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hello World</h1><p>my name is mou mandal.I am a fullstack developer</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>FullStack</h1><p>html,css,js,vue.js,bootstrap,git, node.js,express.js,mongoDB,aws,figma</p>');
    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h2>page is not found</h2>');
    }
})
server.listen(port, () => {
    // res.mou();
    console.log("Server is listening on port", port);
});