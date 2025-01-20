import { ClerkClient as _ClerkClient, User } from '@clerk/backend';
import { ClerkLogger } from './clerk-logger.interface';
import { PaginatedResourceResponse } from '@clerk/backend/dist/api/resources/Deserializer';
export declare class UsersAPI {
    private client;
    private logger;
    constructor(client: _ClerkClient, logger: ClerkLogger);
    getUser(userId: string): Promise<User>;
    createUser({ externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt, publicMetadata, privateMetadata, unsafeMetadata, }: {
        externalId?: string;
        emailAddress?: string[];
        phoneNumber?: string[];
        username?: string;
        password?: string;
        firstName?: string;
        lastName?: string;
        skipPasswordChecks?: boolean;
        skipPasswordRequirement?: boolean;
        skipLegalChecks?: boolean;
        legalAcceptedAt?: Date;
        totpSecret?: string;
        backupCodes?: string[];
        createdAt?: Date;
        publicMetadata?: UserPublicMetadata;
        privateMetadata?: UserPrivateMetadata;
        unsafeMetadata?: UserUnsafeMetadata;
    }): Promise<User>;
    getUserList({ organizationId, }: {
        organizationId?: string[];
    }): Promise<PaginatedResourceResponse<User[]>>;
}
