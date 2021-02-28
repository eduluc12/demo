import {Router} from 'express';
import { Container } from 'typescript-ioc';
import {
    CreateAnimalUseCase
} from '../../../../../application/usecases/animal';
import {AnimalDTO} from '../dto/animal';
import JoiValidator from '../../../middleware/validator';
import SchemaAnimal from '../validator/animal';

const animal = Router();
animal.use(JoiValidator(SchemaAnimal));
animal.post<unknown, unknown, AnimalDTO>('/', async (req, res, next) => {
    try{
        await Container.get(
            CreateAnimalUseCase
        ).handle({
            color: req.body.color,
            nombre: req.body.nombre
        });
        res.status(201).json({
            message: 'Creado Correctamente.'
        });
    }catch(e){
        next(e);
    }
});

export {animal as Animal}