import Express, {Router} from 'express';
import {People} from './routes/people';
import Interceptor from './interceptor';

const app = Express();
app.use('/people', People)
app.use(Interceptor());
export {app};