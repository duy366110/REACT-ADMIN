const jsonServer = require('json-server');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

server.use((req, res, next) => {
    if (req.method === 'POST') {
        const body = req.body;
        if (!body.id) {
            body.id = uuidv4();
        }
    }
    next();
});

server.use(router);
server.listen(6000, () => {
    console.log('JSON Server is running');
});
