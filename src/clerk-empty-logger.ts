import { ClerkLogger } from "./clerk-logger.interface";

export class ClerkEmptyLogger implements ClerkLogger {
    public logInput({ functionName, args }: { functionName: string; args: any[] }): void {}
    public logOutput({ functionName, output }: { functionName: string; output: any }): void {}
    public logRetryError({ functionName, currentAttempt, error }: { functionName: string; currentAttempt: number; error: any }): void {}
    public logError({ functionName, error }: { functionName: string; error: any }): void {}
}
