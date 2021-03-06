import { Response, Request } from "express";

export default function Interceptor(){
    return (err : unknown, req : Request, res : Response, next : () => void) => {
        if(!err){
            next();
            return;
        }
        console.error(err);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}