const http = require('http');
let requestCount = 0;
const server = http.createServer( (request, response) => {
    requestCount++;
    if (request.url === '/favicon.ico') {
        requestCount--;
    }
    response.write('CHTOPROISHODIT ' + requestCount);
    response.end()
})
server.listen(3003);