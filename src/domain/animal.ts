import { Expose } from "class-transformer";
import { v4 as uuidv4 } from 'uuid';

export class Animal{
    @Expose() id: number = uuidv4();
    @Expose() nombre: string;
    @Expose() color: string;
}