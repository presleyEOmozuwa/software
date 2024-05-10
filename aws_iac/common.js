const { ECRClient, DescribeRepositoriesCommand, DeleteRepositoryCommand } = require('@aws-sdk/client-ecr')

const { ECSClient, DescribeClustersCommand, DescribeTaskDefinitionCommand } = require('@aws-sdk/client-ecs')

const getRepositories = async () => {
    try {
        const client = new ECRClient({ region: "us-east-1" });
        const command = new DescribeRepositoriesCommand ({});
        const res = client.send(command);
        return res;
    } 
    catch (err) {
        console.log(err.message)
    }
}

const getClusters = async () => {
    try {
        const client = new ECSClient({ region: "us-east-1" });
        const command = new DescribeClustersCommand ({});
        const res = client.send(command);
        return res;
    } 
    catch (err) {
        console.log(err.message)
    }
}

const getTasks = async () => {
    try {
        const client = new ECSClient({ region: "us-east-1" });
        const command = new DescribeTaskDefinitionCommand({});
        const res = client.send(command);
        return res;
    } 
    catch (err) {
        console.log(err.message)
    }
}

const deleteRepository = async (name) => {
    try {
        const client = new ECRClient({ region: "us-east-1" });
        const command = new DeleteRepositoryCommand({ repositoryName: name, force: true });
        await client.send(command);
        console.log("Repository successfully deleted");
    } 
    catch (err) {
        console.log(err.message)
    }
}

module.exports = { getRepositories, getClusters, getTasks, deleteRepository }