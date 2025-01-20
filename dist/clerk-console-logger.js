"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkConsoleLogger = void 0;
class ClerkConsoleLogger {
    logInput({ functionName, args }) {
        console.log({
            type: 'input',
            functionName,
            args,
        });
    }
    logOutput({ functionName, output }) {
        console.log({
            type: 'output',
            functionName,
            output,
        });
    }
    logRetryError({ functionName, currentAttempt, error }) {
        console.log({
            type: 'retryError',
            functionName,
            currentAttempt,
            error,
        });
    }
    logError({ functionName, error }) {
        console.log({
            type: 'error',
            functionName,
            error,
        });
    }
}
exports.ClerkConsoleLogger = ClerkConsoleLogger;
//# sourceMappingURL=clerk-console-logger.js.map