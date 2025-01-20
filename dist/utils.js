"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryStatuses = exports.retryOptions = void 0;
exports.createClerkClient = createClerkClient;
exports.verifyToken = verifyToken;
const backend_1 = require("@clerk/backend");
const clerk_client_1 = require("./clerk-client");
function createClerkClient(options, logger) {
    return new clerk_client_1.ClerkClient(options, logger);
}
function verifyToken(token, options) {
    return (0, backend_1.verifyToken)(token, options);
}
exports.retryOptions = {
    retries: 32,
    factor: 2,
    minTimeout: 1000,
    maxTimeout: 5000,
};
exports.retryStatuses = [
    undefined,
    429
];
//# sourceMappingURL=utils.js.map