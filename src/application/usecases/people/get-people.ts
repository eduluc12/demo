import { Singleton, Inject } from "typescript-ioc";
import { Swapi } from "../../contracts/http/swapi";

@Singleton
export class GetPeopleUseCase{
    
    constructor(
        @Inject private swapi : Swapi
    ){}

    async handle(id : number = 1){
        return await this.swapi.getPeople(id);
    }

}