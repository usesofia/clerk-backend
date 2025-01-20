import { ClerkOptions as _ClerkOptions, VerifyTokenOptions as _VerifyTokenOptions } from '@clerk/backend';
import { JwtPayload as _JwtPayload } from '@clerk/types';
import { ClerkClient } from './clerk-client';
import { ClerkLogger } from './clerk-logger.interface';
export declare function createClerkClient(options: _ClerkOptions, logger: ClerkLogger): ClerkClient;
export declare function verifyToken(token: string, options: _VerifyTokenOptions): Promise<_JwtPayload>;
export declare const retryOptions: {
    retries: number;
    factor: number;
    minTimeout: number;
    maxTimeout: number;
};
export declare const retryStatuses: number[];
