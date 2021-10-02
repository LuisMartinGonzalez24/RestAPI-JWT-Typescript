import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//* initizalizations
const app = express();

//* settings
app.set('port', process.env.PORT || 3000);

//* middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//* routes
app.get('/', (request, response) => {
    response.send(`The API is at http://localhost:${app.get('port')}`);
});

export default app;