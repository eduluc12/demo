import serverlessExpress from '@vendia/serverless-express';
import { Container } from 'typescript-ioc';
import { Swapi } from './application/contracts/http/swapi';
import { SwapiService } from './infrastructure/http/swapi';
import {app as AppGet} from './infrastructure/api/router/get/router';
import {app as AppPost} from './infrastructure/api/router/post/router';
import { AnimalRepository } from './application/contracts/repository/animal';
import { AnimalRepositoryService } from './infrastructure/repository/animal';

Container.bind(Swapi).to(SwapiService);
Container.bind(AnimalRepository).to(AnimalRepositoryService);

export const apiGet = serverlessExpress({
  app: AppGet
});

export const apiPost = serverlessExpress({
  app: AppPost
});