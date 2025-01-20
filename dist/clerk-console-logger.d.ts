import { ClerkLogger } from "./clerk-logger.interface";
export declare class ClerkConsoleLogger implements ClerkLogger {
    logClerkInput({ functionName, args }: {
        functionName: string;
        args: any[];
    }): void;
    logClerkOutput({ functionName, output }: {
        functionName: string;
        output: any;
    }): void;
    logClerkRetryError({ functionName, currentAttempt, error }: {
        functionName: string;
        currentAttempt: number;
        error: any;
    }): void;
    logClerkError({ functionName, error }: {
        functionName: string;
        error: any;
    }): void;
}
