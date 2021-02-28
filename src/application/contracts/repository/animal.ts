import { Animal } from "../../../domain/animal";

export abstract class AnimalRepository{
    abstract getAll() : Promise<Animal[]>
    abstract save(entity: Animal) : Promise<void>
}