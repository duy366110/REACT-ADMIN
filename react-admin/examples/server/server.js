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
        if (!body.user_id) {
            body.user_id = uuidv4();
            body.last_login = '';
            body.password_expiration = '';
            body.last_password_change = '';
            body.creation_date = new Date();
            body.custom_attributes = {};
        }
    }

    if (req.method === 'DELETE') {
        const ids = req.body.ids;

        console.log(req.body);
        console.log(ids);

        if (Array.isArray(ids)) {
            ids.forEach(id => {
                router.db.get('access').remove({ id }).write();
            });
            // return res.status(200).json({ message: 'Deleted selected items' });
        } else {
            return res.status(400).json({ error: 'IDs must be an array' });
        }
    }

    next();
});

server.use(router);
server.listen(6000, () => {
    console.log('JSON Server is running');
});
