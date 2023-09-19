import { CustomError } from "./customError";

export class ClientError extends CustomError {
    constructor(message: string, status: number) {
        super(message, status);
    }
}