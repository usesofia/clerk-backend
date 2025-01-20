import 'dotenv/config';
import { createClerkClient } from "./utils";

async function main() {
    const clerk = createClerkClient({
        secretKey: process.env.CLERK_SECRET_KEY,
    });

    for(let i = 0; i < 10; i++) {
        await Promise.all(Array.from({ length: 20 }, async (_, index) => {
            try {
                // const organization = await clerk.organizations.getOrganization({ organizationId: 'org_2rrSSbNMCf4Dsj0ALAskYK3xLHT' });
                // console.log({organization});
                const user = await clerk.users.getUser('user_2rrSgEDfjpYQAYtJ1NNQ9n5Mbon');
                console.log({user});
            } catch(error) {
                console.log({error})
                console.log({errorObject: JSON.stringify(error, null, 2)});
            }
        }));
    }
}

main();
