import { Inject } from "typescript-ioc";
import { plainToClass as ToClass, classToClass as ToPlain} from 'class-transformer';
import { AnimalRepository } from "../../application/contracts/repository/animal";
import { Animal } from "../../domain/animal";
import { DynamoDBService } from "../database/dynamo";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export class AnimalRepositoryService implements AnimalRepository{

    constructor(
        @Inject private _dynamoDB : DynamoDBService
    ){}

    async getAll(): Promise<Animal[]> {
        const connection = this._dynamoDB.connection;
        const data = await (new Promise<DocumentClient.ItemList>((resolve, reject) => {
            connection.scan({
                TableName: 'animals',
                IndexName: 'idx_created'
            }, (err, data) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(data.Items);
            });
        }));
        return data.map((value) => {
            return ToClass(Animal, value)
        });
    }

    async save(entity: Animal): Promise<void> {
        const connection = this._dynamoDB.connection;
        await (new Promise((resolve, reject) => {
            connection.put({
                TableName: 'animals',
                Item: {
                    ...ToPlain(entity),
                    created: new Date().toISOString()
                }
            }, (err) => {
                if(err){
                    reject(err);
                    return;
                }
                resolve(undefined);
            });
        }));
    }

}