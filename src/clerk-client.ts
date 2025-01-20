import {
    createClerkClient as _createClerkClient,
    ClerkOptions as _ClerkOptions,
    ClerkClient as _ClerkClient,
} from '@clerk/backend';
import { OrganizationAPI } from './organizations-api';
import { UsersAPI } from './users-api';

export class ClerkClient {
    private client: _ClerkClient;
    public organizations: OrganizationAPI;
    public users: UsersAPI;
    
    constructor(options: _ClerkOptions) {
        this.client = _createClerkClient(options);
        this.organizations = new OrganizationAPI(this.client);
        this.users = new UsersAPI(this.client);
    }
}
