const express = require('express');
const cors = require('cors');
const { createECR } = require('./create-ecr');
const { createECS } = require('./create-ecs');
const { createTaskDefinition } = require('./create-task');
const { deleteRepository } = require('./common');

const app = express();
app.use(cors());

// createECR("");
// createECS("");
createTaskDefinition("rubbles-task:v1", "3000", "2GB", "381492113497.dkr.ecr.us-east-1.amazonaws.com/rubbles-registry");
// deleteRepository("");

// PORT 
const PORT = 5500;

// Starting the Server
app.listen(PORT, () => {
    console.log(`Dev Server is listening on port ${PORT}`);
})