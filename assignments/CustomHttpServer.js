const http = require('http');
const path = require('path');

const PORT = 3000;
const server = http.createServer((req, res) => {
    const { url, method } = req;
    if(url === '/' && method === 'GET') {
        res.writeHead(200, {
            'content-type' : 'text/plain'
        });
        res.end('Welcome to the Custom HTTP Server');
    }
});
server.listen(PORT, ()=> {
    console.info(`Server is listening on port: ${PORT}`)
})