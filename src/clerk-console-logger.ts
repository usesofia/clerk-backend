import { ClerkLogger } from "./clerk-logger.interface";

export class ClerkConsoleLogger implements ClerkLogger {
    public logInput({ functionName, args }: { functionName: string; args: any[] }): void {
        console.log({
            type: 'input',
            functionName,
            args,
        });
    }

    public logOutput({ functionName, output }: { functionName: string; output: any }): void {
        console.log({
            type: 'output',
            functionName,
            output,
        });
    }

    public logRetryError({ functionName, currentAttempt, error }: { functionName: string; currentAttempt: number; error: any }): void {
        console.log({
            type: 'retryError',
            functionName,
            currentAttempt,
            error,
        });
    }

    public logError({ functionName, error }: { functionName: string; error: any }): void {
        console.log({
            type: 'error',
            functionName,
            error,
        });
    }
}
