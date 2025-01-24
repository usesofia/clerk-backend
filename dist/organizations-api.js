"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationAPI = void 0;
const utils_1 = require("./utils");
const retry = require("retry");
class OrganizationAPI {
    constructor(client, logger) {
        this.client = client;
        this.logger = logger;
    }
    async getOrganization({ organizationId, }) {
        const functionName = 'clerk.organizations.getOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.getOrganization({ organizationId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async createOrganizationInvitation({ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata, }) {
        const functionName = 'clerk.organizations.createOrganizationInvitation';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationInvitation = await this.client.organizations.createOrganizationInvitation({ organizationId, inviterUserId, emailAddress, role, redirectUrl, publicMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationInvitation,
                    });
                    resolve(organizationInvitation);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async getOrganizationMembershipList({ organizationId, limit, offset, }) {
        const functionName = 'clerk.organizations.getOrganizationMembershipList';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, limit, offset }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembershipsPage = await this.client.organizations.getOrganizationMembershipList({ organizationId, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembershipsPage,
                    });
                    resolve(organizationMembershipsPage);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async revokeOrganizationInvitation({ organizationId, invitationId, requestingUserId, }) {
        const functionName = 'clerk.organizations.revokeOrganizationInvitation';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, invitationId, requestingUserId }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationInvitation = await this.client.organizations.revokeOrganizationInvitation({ organizationId, invitationId, requestingUserId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationInvitation,
                    });
                    resolve(organizationInvitation);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async getOrganizationInvitationList({ organizationId, limit, offset, }) {
        const functionName = 'clerk.organizations.getOrganizationInvitationList';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, limit, offset }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const invitationsPage = await this.client.organizations.getOrganizationInvitationList({ organizationId, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: invitationsPage,
                    });
                    resolve(invitationsPage);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async deleteOrganizationMembership({ organizationId, userId, }) {
        const functionName = 'clerk.organizations.deleteOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, userId }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.deleteOrganizationMembership({ organizationId, userId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async updateOrganizationMembership({ organizationId, userId, role, }) {
        const functionName = 'clerk.organizations.updateOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, userId, role }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.updateOrganizationMembership({ organizationId, userId, role });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async createOrganization({ name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata, }) {
        const functionName = 'clerk.organizations.createOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{ name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.createOrganization({ name, slug, createdBy, maxAllowedMemberships, publicMetadata, privateMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async updateOrganizationLogo(organizationId, { file, uploaderUserId, }) {
        const functionName = 'clerk.organizations.updateOrganizationLogo';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, file }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.updateOrganizationLogo(organizationId, { file, uploaderUserId });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async updateOrganization(organizationId, { name, slug, publicMetadata, privateMetadata, }) {
        const functionName = 'clerk.organizations.updateOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, name, slug, publicMetadata, privateMetadata }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.updateOrganization(organizationId, { name, slug, publicMetadata, privateMetadata });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async deleteOrganization(organizationId) {
        const functionName = 'clerk.organizations.deleteOrganization';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organization = await this.client.organizations.deleteOrganization(organizationId);
                    this.logger.logClerkOutput({
                        functionName,
                        output: organization,
                    });
                    resolve(organization);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async createOrganizationMembership({ organizationId, userId, role, }) {
        const functionName = 'clerk.organizations.createOrganizationMembership';
        this.logger.logClerkInput({
            functionName,
            args: [{ organizationId, userId, role }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationMembership = await this.client.organizations.createOrganizationMembership({ organizationId, userId, role });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationMembership,
                    });
                    resolve(organizationMembership);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
    async getOrganizationList({ includeMembersCount, query, limit, offset, }) {
        const functionName = 'clerk.organizations.getOrganizationList';
        this.logger.logClerkInput({
            functionName,
            args: [{ includeMembersCount, query, limit, offset }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const organizationsPage = await this.client.organizations.getOrganizationList({ includeMembersCount, query, limit, offset });
                    this.logger.logClerkOutput({
                        functionName,
                        output: organizationsPage,
                    });
                    resolve(organizationsPage);
                }
                catch (error) {
                    if (utils_1.retryStatuses.includes(error.status) && operation.retry(error)) {
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
exports.OrganizationAPI = OrganizationAPI;
//# sourceMappingURL=organizations-api.js.map