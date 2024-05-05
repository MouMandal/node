const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader = ('Content-type', 'text/html');
    res.end('<h1>Hello World</h1><p>my name is mou mandal.I am a fullstack developer</p>');
})
server.listen(port, () => {
    console.log("Server is listening on port", port);
});