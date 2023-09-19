import { CustomError, IResponseError } from "../../core/exceptions/customError";
import { NextFunction, Request, Response } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    const customError = err satisfies CustomError;
    const response = { message: customError.message } as IResponseError;
    console.error(err);
    if (!(err instanceof CustomError)) {
        return res.status(500).send(JSON.stringify({ message: 'Server error, please try again later '}));
    }

    if (customError.additionalInfo) {
        response.additionalInfo = customError.additionalInfo;
    }
    res.status(customError.status).type('json').send(JSON.stringify(response));
}