"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersAPI = void 0;
const utils_1 = require("./utils");
const retry = require("retry");
class UsersAPI {
    constructor(client, logger) {
        this.client = client;
        this.logger = logger;
    }
    async getUser(userId) {
        const functionName = 'clerk.users.getUser';
        this.logger.logInput({
            functionName,
            args: [userId],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const user = await this.client.users.getUser(userId);
                    this.logger.logOutput({
                        functionName,
                        output: user,
                    });
                    resolve(user);
                }
                catch (error) {
                    if (operation.retry(error) && error.status && utils_1.retryStatuses.includes(error.status)) {
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
    async createUser({ externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt, }) {
        const functionName = 'clerk.users.createUser';
        this.logger.logInput({
            functionName,
            args: [{ externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const createdUser = await this.client.users.createUser({ externalId, emailAddress, phoneNumber, username, password, firstName, lastName, skipPasswordChecks, skipPasswordRequirement, skipLegalChecks, legalAcceptedAt, totpSecret, backupCodes, createdAt });
                    this.logger.logOutput({
                        functionName,
                        output: createdUser,
                    });
                    resolve(createdUser);
                }
                catch (error) {
                    if (operation.retry(error) && error.status && utils_1.retryStatuses.includes(error.status)) {
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
    async getUserList({ organizationId, }) {
        const functionName = 'clerk.users.getUserList';
        this.logger.logInput({
            functionName,
            args: [{ organizationId }],
        });
        const operation = retry.operation(utils_1.retryOptions);
        return new Promise((resolve, reject) => {
            operation.attempt(async (currentAttempt) => {
                try {
                    const userList = await this.client.users.getUserList({ organizationId });
                    this.logger.logOutput({
                        functionName,
                        output: userList,
                    });
                    resolve(userList);
                }
                catch (error) {
                    if (operation.retry(error) && error.status && utils_1.retryStatuses.includes(error.status)) {
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
exports.UsersAPI = UsersAPI;
//# sourceMappingURL=users-api.js.map