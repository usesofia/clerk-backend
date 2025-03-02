"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkConsoleLogger = void 0;
class ClerkConsoleLogger {
    logClerkInput({ functionName, args }) {
        console.log({
            type: 'input',
            functionName,
            args,
        });
    }
    logClerkOutput({ functionName, output }) {
        console.log({
            type: 'output',
            functionName,
            output,
        });
    }
    logClerkRetryError({ functionName, currentAttempt, error }) {
        console.log({
            type: 'retryError',
            functionName,
            currentAttempt,
            error,
        });
    }
    logClerkError({ functionName, error }) {
        console.log({
            type: 'error',
            functionName,
            error,
        });
    }
}
exports.ClerkConsoleLogger = ClerkConsoleLogger;
//# sourceMappingURL=clerk-console-logger.js.map