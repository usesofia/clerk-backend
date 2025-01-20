import {
    createClerkClient as _createClerkClient,
    ClerkOptions as _ClerkOptions,
    ClerkClient as _ClerkClient,
} from '@clerk/backend';
import { OrganizationAPI } from './organizations-api';
import { UsersAPI } from './users-api';
import { ClerkLogger } from './clerk-logger.interface';

export class ClerkClient {
    private client: _ClerkClient;
    private logger: ClerkLogger;
    public organizations: OrganizationAPI;
    public users: UsersAPI;

    constructor(options: _ClerkOptions, logger: ClerkLogger) {
        this.client = _createClerkClient(options);
        this.logger = logger;
        this.organizations = new OrganizationAPI(this.client, this.logger);
        this.users = new UsersAPI(this.client, this.logger);
    }
}
