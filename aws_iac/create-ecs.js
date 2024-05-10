const { ECSClient, CreateClusterCommand } = require('@aws-sdk/client-ecs');
const { getClusters } = require('./common');

const createECS = async (name) => {
    const client = new ECSClient({ region: "us-east-1" });
    try {
        const response = await getClusters();
        const { clusters } = response;
        if (clusters && clusters.length === 0) {
            const input = {
                clusterName: name
            };
            const command = new CreateClusterCommand(input);
            await client.send(command);
            console.log("Cluster Created on AWS when it is empty");
            return;
        }
        else if (clusters && clusters.length === 1) {
            if (clusters[0].clusterName != name) {
                const input = {
                    clusterName: name
                };
                const command = new CreateClusterCommand(input);
                await client.send(command);
                console.log("Cluster Created on AWS when it is one");
            }
            return;
        }
        else if (clusters && clusters.length > 1) {
            const ischecked = clusters.includes(name);
            if (!ischecked) {
                const input = {
                    clustersName: name
                };
                const command = new CreateClusterCommand(input);
                await client.send(command);
                console.log("Cluster Created on AWS when it is greater one");
            }
            return;
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

module.exports = { createECS }