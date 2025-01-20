import { ClerkLogger } from "./clerk-logger.interface";
export declare class ClerkEmptyLogger implements ClerkLogger {
    logInput({ functionName, args }: {
        functionName: string;
        args: any[];
    }): void;
    logOutput({ functionName, output }: {
        functionName: string;
        output: any;
    }): void;
    logRetryError({ functionName, currentAttempt, error }: {
        functionName: string;
        currentAttempt: number;
        error: any;
    }): void;
    logError({ functionName, error }: {
        functionName: string;
        error: any;
    }): void;
}
