import { Expose } from "class-transformer";
import { v4 as uuidv4 } from 'uuid';

export class Animal{
    @Expose() id: string = uuidv4();
    @Expose() nombre: string;
    @Expose() color: string;
    @Expose() created: string
}