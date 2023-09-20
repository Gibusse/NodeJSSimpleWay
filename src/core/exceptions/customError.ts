export class CustomError extends Error {
    message: string | undefined;
    status: number | undefined;
    additionalInfo?: unknown;

    constructor(message: string, status: number = 500, additonalInfo?: unknown) {
        super(message);
        this.message = message;
        this.status = status;
        this.additionalInfo = additonalInfo;
    }
};

export interface IResponseError {
    message: string;
    additionalInfo?: string;
}