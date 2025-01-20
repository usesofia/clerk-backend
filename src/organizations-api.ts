import {
    ClerkClient as _ClerkClient,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';

export class OrganizationAPI {
    private client: _ClerkClient;

    constructor(client: _ClerkClient) {
        this.client = client;
    }

    public async getOrganization({
        organizationId,
    }: {
        organizationId: string;
    }) {
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async () => {
                try {
                    const organization = await this.client.organizations.getOrganization({ organizationId });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && error.status && retryStatuses.includes(error.status)) {
                        return;
                    }
                    reject(operation.mainError());
                }
            });
        });
    }
}
