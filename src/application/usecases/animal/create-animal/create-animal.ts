import { Singleton, Inject } from "typescript-ioc";
import { Animal } from "../../../../domain/animal";
import { AnimalRepository } from "../../../contracts/repository/animal";
import {CreateAnimalInput} from './create-animal.input';

@Singleton
export class CreateAnimalUseCase{
    
    constructor(
        @Inject private _animalRepository : AnimalRepository
    ){}

    async handle(input : CreateAnimalInput){
        const instance = new Animal();
        instance.color = input.color;
        instance.nombre = input.nombre;
        return await this._animalRepository.save(
            instance
        );
    }

}