import {
    ClerkClient as _ClerkClient,
    Organization,
    OrganizationInvitation,
    OrganizationMembership,
    OrganizationMembershipRole,
} from '@clerk/backend';
import { retryStatuses, retryOptions } from './utils';
import * as retry from 'retry';
import { ClerkLogger } from './clerk-logger.interface';
import { PaginatedResourceResponse } from '@clerk/backend/dist/api/resources/Deserializer';

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
    }): Promise<Organization> {
        const functionName = 'clerk.organizations.getOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.getOrganization({ organizationId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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
    }): Promise<OrganizationInvitation> {
        const functionName = 'clerk.organizations.createOrganizationInvitation';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationInvitation = await this.client.organizations.createOrganizationInvitation({ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationInvitation,
                    });
                    resolve(organizationInvitation);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async getOrganizationMembershipList({
        organizationId,
        limit,
        offset,
    }: {
        organizationId: string;
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<OrganizationMembership[]>> {
        const functionName = 'clerk.organizations.getOrganizationMembershipList';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, limit, offset}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembershipsPage = await this.client.organizations.getOrganizationMembershipList({ organizationId, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembershipsPage,
                    });
                    resolve(organizationMembershipsPage);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async revokeOrganizationInvitation({
        organizationId,
        invitationId,
        requestingUserId,
    }: {
        organizationId: string;
        invitationId: string;
        requestingUserId: string;
    }): Promise<OrganizationInvitation> {
        const functionName = 'clerk.organizations.revokeOrganizationInvitation';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, invitationId, requestingUserId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationInvitation = await this.client.organizations.revokeOrganizationInvitation({ organizationId, invitationId, requestingUserId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationInvitation,
                    });
                    resolve(organizationInvitation);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async getOrganizationInvitationList({
        organizationId,
        limit,
        offset,
    }: {
        organizationId: string;
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<OrganizationInvitation[]>> {
        const functionName = 'clerk.organizations.getOrganizationInvitationList';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, limit, offset}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const invitationsPage = await this.client.organizations.getOrganizationInvitationList({ organizationId, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: invitationsPage,
                    });
                    resolve(invitationsPage);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async deleteOrganizationMembership({
        organizationId,
        userId,
    }: {
        organizationId: string;
        userId: string;
    }) {
        const functionName = 'clerk.organizations.deleteOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, userId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.deleteOrganizationMembership({ organizationId, userId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async updateOrganizationMembership({
        organizationId,
        userId,
        role,
    }: {
        organizationId: string;
        userId: string;
        role: OrganizationMembershipRole;
    }): Promise<OrganizationMembership> {
        const functionName = 'clerk.organizations.updateOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, userId, role}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.updateOrganizationMembership({ organizationId, userId, role });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async createOrganization({
        name,
        slug,
        createdBy,
        maxAllowedMemberships,
        publicMetadata,
        privateMetadata,
    }: {
        name: string;
        slug?: string;
        createdBy?: string;
        maxAllowedMemberships?: number;
        publicMetadata?: OrganizationPublicMetadata;
        privateMetadata?: OrganizationPrivateMetadata;
    }): Promise<Organization> {
        const functionName = 'clerk.organizations.createOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.createOrganization({ name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async updateOrganizationLogo(organizationId: string, {
        file,
        uploaderUserId,
    }: {
        file: Blob | File;
        uploaderUserId?: string;
    }): Promise<Organization> {
        const functionName = 'clerk.organizations.updateOrganizationLogo';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, file}],
        });

        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.updateOrganizationLogo(organizationId, { file, uploaderUserId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async updateOrganization(organizationId: string, {
        name,
        slug,
        publicMetadata,
        privateMetadata,
    }: {
        name?: string;
        slug?: string;
        publicMetadata?: OrganizationPublicMetadata;
        privateMetadata?: OrganizationPrivateMetadata;
    }): Promise<Organization> {
        const functionName = 'clerk.organizations.updateOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, name, slug, publicMetadata, privateMetadata}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.updateOrganization(organizationId, { name, slug, publicMetadata, privateMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async deleteOrganization(organizationId: string): Promise<Organization> {
        const functionName = 'clerk.organizations.deleteOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.deleteOrganization(organizationId);
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async createOrganizationMembership({
        organizationId,
        userId,
        role,
    }: {
        organizationId: string;
        userId: string;
        role: OrganizationMembershipRole;
    }): Promise<OrganizationMembership> {
        const functionName = 'clerk.organizations.createOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{organizationId, userId, role}],
        });

        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.createOrganizationMembership({ organizationId, userId, role });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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

    public async getOrganizationList({
        includeMembersCount,
        query,
        limit,
        offset,
    }: {
        includeMembersCount?: boolean;
        query?: string;
        limit?: number;
        offset?: number;
    }): Promise<PaginatedResourceResponse<Organization[]>> {
        const functionName = 'clerk.organizations.getOrganizationList';
        this.logger.logClerkInput({
            functionName,
            args: [{includeMembersCount, query, limit, offset}],
        });
        const operation = retry.operation(retryOptions);

        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationsPage = await this.client.organizations.getOrganizationList({ includeMembersCount, query, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationsPage,
                    });
                    resolve(organizationsPage);
                } catch(error) {
                    if(operation.retry(error) && retryStatuses.includes(error.status)) {
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
}
