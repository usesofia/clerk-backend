import {
    createClerkClient as _createClerkClient,
    ClerkOptions as _ClerkOptions,
    ClerkClient as _ClerkClient,
    verifyToken as _verifyToken,
    VerifyTokenOptions as _VerifyTokenOptions,
} from '@clerk/backend';
import { JwtPayload as _JwtPayload } from '@clerk/types';
import { OrganizationAPI as _OrganizationAPI } from '@clerk/backend/dist/api/endpoints';
import { ClerkClient } from './clerk-client';
import { ClerkLogger } from './clerk-logger.interface';


export function createClerkClient(options: _ClerkOptions, logger: ClerkLogger) {
    return new ClerkClient(options, logger);
}

export function verifyToken(token: string, options: _VerifyTokenOptions): Promise<_JwtPayload> {
    return _verifyToken(token, options);
}

export const retryOptions = {
    retries: 32,
    factor: 2,
    minTimeout: 1000,
    maxTimeout: 5000,
};

export const retryStatuses = [
    undefined,
    429
]
