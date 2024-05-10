const { ECRClient, CreateRepositoryCommand } = require('@aws-sdk/client-ecr')
const { getRepositories } = require('./common')

const createECR = async (name) => {
    const client = new ECRClient({ region: "us-east-1" });
    try {
        const reponse = await getRepositories();
        const { repositories } = reponse;
        if (repositories && repositories.length === 0) {
            const input = {
                repositoryName: name
            };
            const command = new CreateRepositoryCommand(input);
            await client.send(command);
            console.log("Repository Created on AWS when it is empty");
            return;
        }
        else if (repositories && repositories.length === 1) {
            if (repositories[0].repositoryName != name) {
                const input = {
                    repositoryName: name
                };
                const command = new CreateRepositoryCommand(input);
                await client.send(command);
                console.log("Repository Created on AWS when it is one");
            }
            return;
        }
        else if (repositories && repositories.length > 1) {
            const ischecked = repositories.includes(name);
            if (!ischecked) {
                const input = {
                    repositoryName: name
                };
                const command = new CreateRepositoryCommand(input);
                await client.send(command);
                console.log("Repository Created on AWS when it is greater one");
            }
            return;
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = { createECR }
