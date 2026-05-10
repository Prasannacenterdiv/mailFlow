import type { Request, Response, NextFunction } from "express";
import { logger } from "../logger/logger.js";
import { AppError } from "../exceptions/AppError.js";
import { sendError } from "../responses/api.response.js";

export const errorMiddleware=(req:Request,res:Response,next:NextFunction,err:Error)=>{
    logger.error(err.message);

    if(err instanceof AppError){
        return sendError(res,err.message,err.statusCode);
    }

    return sendError(res,"Internal Server Error",500);


}