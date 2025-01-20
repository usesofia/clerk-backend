"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkClient = void 0;
const backend_1 = require("@clerk/backend");
const organizations_api_1 = require("./organizations-api");
const users_api_1 = require("./users-api");
class ClerkClient {
    constructor(options, logger) {
        this.client = (0, backend_1.createClerkClient)(options);
        this.logger = logger;
        this.organizations = new organizations_api_1.OrganizationAPI(this.client, this.logger);
        this.users = new users_api_1.UsersAPI(this.client, this.logger);
    }
}
exports.ClerkClient = ClerkClient;
//# sourceMappingURL=clerk-client.js.map