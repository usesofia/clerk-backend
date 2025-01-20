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


export function createClerkClient(options: _ClerkOptions) {
    return new ClerkClient(options);
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
    429
]
