import express from 'express';

import checkPort from './util/checkPort.js';
import pdfRouter from './routers/pdfRouter.js';

const DEFAULT_PORT = 7776;

(async () => {
    const port = await checkPort(DEFAULT_PORT);
    const server = express();

    server.use('/pdf', pdfRouter);

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
})();
