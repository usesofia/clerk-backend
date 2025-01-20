"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkEmptyLogger = void 0;
class ClerkEmptyLogger {
    logClerkInput({ functionName, args }) { }
    logClerkOutput({ functionName, output }) { }
    logClerkRetryError({ functionName, currentAttempt, error }) { }
    logClerkError({ functionName, error }) { }
}
exports.ClerkEmptyLogger = ClerkEmptyLogger;
//# sourceMappingURL=clerk-empty-logger.js.map