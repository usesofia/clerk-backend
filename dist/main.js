"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const utils_1 = require("./utils");
const clerk_empty_logger_1 = require("./clerk-empty-logger");
async function main() {
    const clerk = (0, utils_1.createClerkClient)({
        secretKey: process.env.CLERK_SECRET_KEY,
    }, new clerk_empty_logger_1.ClerkEmptyLogger());
    for (let i = 0; i < 10; i++) {
        await Promise.all(Array.from({ length: 20 }, async (_, index) => {
            try {
                const user = await clerk.users.getUser('user_2rrSgEDfjpYQAYtJ1NNQ9n5Mbon');
                console.log({ user });
            }
            catch (error) {
                console.log({ error });
                console.log({ errorObject: JSON.stringify(error, null, 2) });
            }
        }));
    }
}
main();
//# sourceMappingURL=main.js.map