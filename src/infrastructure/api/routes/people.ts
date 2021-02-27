import {Router} from 'express';
import { Container } from 'typescript-ioc';
import {
    GetPeoplesUseCase,
    GetPeopleUseCase
} from '../../../application/usecases/people/';

const people = Router();
people.get('/', async (req, res, next) => {
    try{
        const result = await Container.get(
            GetPeoplesUseCase
        ).handle(+req.query.page || 1);
        res.json(result);
    }catch(e){
        next(e);
    }
});

people.get<{id: number}>('/:id', async (req, res, next) => {
    try{
        const result = await Container.get(
            GetPeopleUseCase
        ).handle(req.params.id);
        res.json(result);
    }catch(e){
        next(e);
    }
})

export {people as People}