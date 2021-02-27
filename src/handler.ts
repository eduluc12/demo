import serverlessExpress from '@vendia/serverless-express';
import { Container } from 'typescript-ioc';
import { Swapi } from './application/contracts/http/swapi';
import { SwapiService } from './infrastructure/http/swapi';
import {app} from './infrastructure/api/router';

Container.bind(Swapi).to(SwapiService);

export const index = serverlessExpress({
  app
});