import {
    ClerkClient as _ClerkClient,
    OrganizationMembership,
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
        this.logger.logClerkInput({
            functionName,
            args: [userId],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const user = await this.client.users.getUser(userId);
                    this.logger.logClerkOutput({
                        functionName,
                        output: user,
                    });
                    resolve(user);
                } catch(error) {
                    if(retryStatuses.includes(error.status) && operation.retry(error)) {
                        this.logger.logClerkRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logClerkError({
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
        publicMetadata,
        privateMetadata,
        unsafeMetadata,
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
        publicMetadata?: UserPublicMetadata;
        privateMetadata?: UserPrivateMetadata;
        unsafeMetadata?: UserUnsafeMetadata;
    }): Promise<User> {
        const functionName = 'clerk.users.createUser';
        this.logger.logClerkInput({
            functionName,
            args: [{externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt, publicMetadata, privateMetadata, unsafeMetadata}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const createdUser = await this.client.users.createUser({externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt, publicMetadata, privateMetadata, unsafeMetadata});
                    this.logger.logClerkOutput({
                        functionName,
                        output: createdUser,
                    });
                    resolve(createdUser);
                } catch(error) {
                    if(retryStatuses.includes(error.status) && operation.retry(error)) {
                        this.logger.logClerkRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logClerkError({
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
        emailAddress,
        limit,
        offset,
    }: {
        organizationId?: string[];
        emailAddress?: string[];
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<User[]>> {
        const functionName = 'clerk.users.getUserList';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, emailAddress, limit, offset}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const userList = await this.client.users.getUserList({organizationId, emailAddress, limit, offset});
                    this.logger.logClerkOutput({
                        functionName,
                        output: userList,
                    });
                    resolve(userList);
                } catch(error) {
                    if(retryStatuses.includes(error.status) && operation.retry(error)) {
                        this.logger.logClerkRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logClerkError({
                        functionName,
                        error,
                    });
                    reject(error);
                }
            });
        });
    }

    public async deleteUser(userId: string): Promise<User> {
        const functionName = 'clerk.users.deleteUser';
        this.logger.logClerkInput({
            functionName,
            args: [userId],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const user = await this.client.users.deleteUser(userId);
                    this.logger.logClerkOutput({
                        functionName,
                        output: user,
                    });
                    resolve(user);
                } catch(error) {
                    if(retryStatuses.includes(error.status) && operation.retry(error)) {
                        this.logger.logClerkRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logClerkError({
                        functionName,
                        error,
                    });
                    reject(error);
                }
            });
        });
    }

    public async getOrganizationMembershipList({
        userId,
        limit,
        offset,
    }: {
        userId: string
        limit?: number
        offset?: number
    }): Promise<PaginatedResourceResponse<OrganizationMembership[]>> {
        const functionName = 'clerk.users.getOrganizationMembershipList';
        this.logger.logClerkInput({
            functionName,
            args: [userId],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const membershipsPage = await this.client.users.getOrganizationMembershipList({userId, limit, offset});
                    this.logger.logClerkOutput({
                        functionName,
                        output: membershipsPage,
                    });
                    resolve(membershipsPage);
                } catch(error) {
                    if(retryStatuses.includes(error.status) && operation.retry(error)) {
                        this.logger.logClerkRetryError({
                            functionName,
                            currentAttempt,
                            error,
                        });
                        return;
                    }
                    this.logger.logClerkError({
                        functionName,
                        error,
                    });
                    reject(error);
                }
            });
        });
    }
}
