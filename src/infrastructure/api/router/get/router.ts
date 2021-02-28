import Express, {Router} from 'express';
import {People} from './routes/people';
import {Animal} from './routes/animal';
import Interceptor from '../../interceptor';

const app = Express();
app.use('/people', People);
app.use('/animals', Animal);
app.use(Interceptor());
export {app};