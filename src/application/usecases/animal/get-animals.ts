import { Singleton, Inject } from "typescript-ioc";
import { AnimalRepository } from "../../contracts/repository/animal";

@Singleton
export class GetAnimalsUseCase{
    
    constructor(
        @Inject private _animalRepository : AnimalRepository
    ){}

    async handle(){
        return await this._animalRepository.getAll();
    }

}