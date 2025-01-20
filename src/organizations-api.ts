import {
    ClerkClient as _ClerkClient,
    OrganizationMembershipRole,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';
import { ClerkLogger } from './clerk-logger.interface';

export class OrganizationAPI {
    private client: _ClerkClient;
    private logger: ClerkLogger;

    constructor(client: _ClerkClient, logger: ClerkLogger) {
        this.client = client;
        this.logger = logger;
    }

    public async getOrganization({
        organizationId,
    }: {
        organizationId: string;
    }) {
        const functionName = 'clerk.organizations.getOrganization';
        this.logger.logInput({
            functionName,
            args: [{organizationId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.getOrganization({ organizationId });
                    this.logger.logOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
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

    public async createOrganizationInvitation({
        organizationId,
        inviterUserId,
        emailAddress,
        role,
        redirectUrl,
        publicMetadata,
    }: {
        organizationId: string;
        inviterUserId: string;
        emailAddress: string;
        role: OrganizationMembershipRole;
        redirectUrl?: string;
        publicMetadata?: OrganizationInvitationPublicMetadata;
    }) {
        const functionName = 'clerk.organizations.createOrganizationInvitation';
        this.logger.logInput({
            functionName,
            args: [{organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.createOrganizationInvitation({ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata });
                    this.logger.logOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
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

    public async getOrganizationMembershipList({
        organizationId,
        limit,
        offset,
    }: {
        organizationId: string;
        limit?: number;
        offset?: number;
    }) {
        const functionName = 'clerk.organizations.getOrganizationMembershipList';
        this.logger.logInput({
            functionName,
            args: [{organizationId, limit, offset}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationsPage = await this.client.organizations.getOrganizationMembershipList({ organizationId, limit, offset });
                    this.logger.logOutput({
                        functionName,
                        output: organizationsPage,
                    });
                    resolve(organizationsPage);
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

    public async revokeOrganizationInvitation({
        organizationId,
        invitationId,
        requestingUserId,
    }: {
        organizationId: string;
        invitationId: string;
        requestingUserId: string;
    }) {
        const functionName = 'clerk.organizations.revokeOrganizationInvitation';
        this.logger.logInput({
            functionName,
            args: [{organizationId, invitationId, requestingUserId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.revokeOrganizationInvitation({ organizationId, invitationId, requestingUserId });
                    this.logger.logOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
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
