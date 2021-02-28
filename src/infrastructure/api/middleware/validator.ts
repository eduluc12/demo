import {Schema} from 'joi';
import {Request, Response, NextFunction} from 'express';

export default function JoiValidator(schema : Schema){
    return async (req : Request, res : Response, next : NextFunction) => {
        try{
            await schema.validateAsync(req.body);
            next();
        }catch(e){
            res.status(422).json({
                message: 'Unprocessable Entity'
            });
        }
    }
}