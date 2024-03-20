import express from 'express';
import reload from 'reload';
import env from './configs/environment.config.js';
import connect from './configs/mongDB.config.js';
import prefixAdmin from './configs/prefixAdmin.config.js';
import publicFile from './configs/publicFile.config.js';
import templateEngine from './configs/templateEngine.config.js';
import routerAdmin from './routes/admin/index.router.js';
import routerClient from './routes/client/index.router.js';

connect();
const app = express();
app.locals.PREFIX_ADMIN = prefixAdmin.routeAdmin;

templateEngine(app);
routerClient(app);
routerAdmin(app);
publicFile(app);

app.listen(env.port, env.host, () => console.log(`Start server: http://${env.host}:${env.port}`));
reload(app);
