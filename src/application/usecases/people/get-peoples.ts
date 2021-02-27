import { Singleton, Inject } from "typescript-ioc";
import { Swapi } from "../../contracts/http/swapi";

@Singleton
export class GetPeoplesUseCase{
    
    constructor(
        @Inject private swapi : Swapi
    ){}

    async handle(page : number = 1){
        return await this.swapi.getPeoples(page);
    }

}