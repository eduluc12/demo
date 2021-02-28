import Express, {Router} from 'express';
import {json, urlencoded} from 'body-parser';
import {Animal} from './routes/animal';
import Interceptor from '../../interceptor';

const app = Express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use('/animals', Animal);
app.use(Interceptor());
export {app};