import { Singleton } from "typescript-ioc";
import {DynamoDB} from 'aws-sdk';

const connectionFactory = () => {
    switch(process.env.NODE_ENV){
        case 'dev':
            return {
                region: 'localhost',
                endpoint: 'http://localhost:6666'
            };
        default:
            return {};
    }
}

@Singleton
export class DynamoDBService{

    private _connection = new DynamoDB.DocumentClient(connectionFactory());

    get connection(){
        return this._connection;
    }

}