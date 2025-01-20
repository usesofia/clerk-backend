"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkEmptyLogger = void 0;
class ClerkEmptyLogger {
    logInput({ functionName, args }) { }
    logOutput({ functionName, output }) { }
    logRetryError({ functionName, currentAttempt, error }) { }
    logError({ functionName, error }) { }
}
exports.ClerkEmptyLogger = ClerkEmptyLogger;
//# sourceMappingURL=clerk-empty-logger.js.map