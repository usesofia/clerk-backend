import { ClerkLogger } from "./clerk-logger.interface";

export class ClerkEmptyLogger implements ClerkLogger {
    public logClerkInput({ functionName, args }: { functionName: string; args: any[] }): void {}
    public logClerkOutput({ functionName, output }: { functionName: string; output: any }): void {}
    public logClerkRetryError({ functionName, currentAttempt, error }: { functionName: string; currentAttempt: number; error: any }): void {}
    public logClerkError({ functionName, error }: { functionName: string; error: any }): void {}
}
