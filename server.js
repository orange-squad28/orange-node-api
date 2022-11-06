const http = require('http');
const port = 8080;

const rotas = {
    '/': 'Trilhas',
    '/ux-ui': 'Trinha de UX/UI Design',
    '/qa': 'Trilha de QA',
    '/dev': 'Trilha de Desenvolvimento Full Stack'
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);

});

server.listen(port, () => {
    console.log(`Server running at port `+port);
});

