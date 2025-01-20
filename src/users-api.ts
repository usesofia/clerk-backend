import {
    ClerkClient as _ClerkClient,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';

export class UsersAPI {
    private client: _ClerkClient;

    constructor(client: _ClerkClient) {
        this.client = client;
    }

    public async getUser(userId: string) {
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async () => {
                try {
                    const user = await this.client.users.getUser(userId);
                    resolve(user);
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
