import {
    ClerkClient as _ClerkClient,
    User,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';
import { ClerkLogger } from './clerk-logger.interface';
import { PaginatedResourceResponse } from '@clerk/backend/dist/api/resources/Deserializer';

export class UsersAPI {
    private client: _ClerkClient;
    private logger: ClerkLogger;

    constructor(client: _ClerkClient, logger: ClerkLogger) {
        this.client = client;
        this.logger = logger;
    }

    public async getUser(userId: string): Promise<User> {
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

    public async createUser({
        externalId,
        emailAddress,
        phoneNumber,
        username,
        password,
        firstName,
        lastName,
        skipPasswordChecks,
        skipPasswordRequirement,
        skipLegalChecks,
        legalAcceptedAt,
        totpSecret,
        backupCodes,
        createdAt,
    }: {
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
    }): Promise<User> {
        const functionName = 'clerk.users.createUser';
        this.logger.logInput({
            functionName,
            args: [{externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const createdUser = await this.client.users.createUser({externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt});
                    this.logger.logOutput({
                        functionName,
                        output: createdUser,
                    });
                    resolve(createdUser);
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

    public async getUserList({
        organizationId,
    }: {
        organizationId?: string[];
    }): Promise<PaginatedResourceResponse<User[]>> {
        const functionName = 'clerk.users.getUserList';
        this.logger.logInput({
            functionName,
            args: [{organizationId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const userList = await this.client.users.getUserList({organizationId});
                    this.logger.logOutput({
                        functionName,
                        output: userList,
                    });
                    resolve(userList);
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
                    reject(error);
                }
            });
        });
    }
}
