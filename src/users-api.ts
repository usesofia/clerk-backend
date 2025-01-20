import {
    ClerkClient as _ClerkClient,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';
import { ClerkLogger } from './clerk-logger.interface';

export class UsersAPI {
    private client: _ClerkClient;
    private logger: ClerkLogger;

    constructor(client: _ClerkClient, logger: ClerkLogger) {
        this.client = client;
        this.logger = logger;
    }

    public async getUser(userId: string) {
        const functionName = 'clerk.users.getUser';
        this.logger.logInput({
            functionName,
            args: [userId],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const user = await this.client.users.getUser(userId);
                    this.logger.logOutput({
                        functionName,
                        output: user,
                    });
                    resolve(user);
                } catch(error) {
                    if(operation.retry(error) && error.status && retryStatuses.includes(error.status)) {
                        this.logger.logRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logError({
                        functionName,
                        error,
                    });
                    reject(operation.mainError());
                }
            });
        });
    }
}
