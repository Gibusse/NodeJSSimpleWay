export class CustomError extends Error {
    message: string | undefined;
    status: number | undefined;
    additionalInfo: any;

    constructor(message: string, status: number = 500, additonalInfo: any = undefined) {
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