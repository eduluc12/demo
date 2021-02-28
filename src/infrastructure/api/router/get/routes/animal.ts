import {Router} from 'express';
import { Container } from 'typescript-ioc';
import {
    GetAnimalsUseCase
} from '../../../../../application/usecases/animal';

const animal = Router();
animal.get('/', async (req, res, next) => {
    try{
        const result = await Container.get(
            GetAnimalsUseCase
        ).handle();
        res.json(result);
    }catch(e){
        next(e);
    }
});

export {animal as Animal}