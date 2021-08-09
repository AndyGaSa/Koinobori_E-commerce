const express = require('express');

const server = express();

const port = 5000;

server.listen(port, () => console.log(`server is running on http://localhost${port}`));
