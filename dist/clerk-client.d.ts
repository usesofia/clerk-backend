import { ClerkOptions as _ClerkOptions } from '@clerk/backend';
import { OrganizationAPI } from './organizations-api';
import { UsersAPI } from './users-api';
import { ClerkLogger } from './clerk-logger.interface';
export declare class ClerkClient {
    private client;
    private logger;
    organizations: OrganizationAPI;
    users: UsersAPI;
    constructor(options: _ClerkOptions, logger: ClerkLogger);
}
