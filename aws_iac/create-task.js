const { ECSClient, RegisterTaskDefinitionCommand } = require('@aws-sdk/client-ecs')
const { getTasks } = require('./common');

const createTaskDefinition = async (familyName, containerPort, memory, imageUrl) => {
    const client = new ECSClient({ region: "us-east-1" });
    try{
        const response = await getTasks();
        const { taskDefinition } = response;
        if(taskDefinition.family != familyName){
            const input = {
                family: familyName,
                image: imageUrl,
                containerDefinitions: [
                    {
                        memory: memory,
                        portMappings: [
                            {
                                containerPort: containerPort
                            }
                        ]
                    }
                ]
            };
            const command = new RegisterTaskDefinitionCommand(input);
            await client.send(command);
            console.log("Task Created on AWS");
            return;
        }
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = { createTaskDefinition }