const Express =  require('express');
const router =  require('./router');

const app = Express();

app.use('/api', router);

module.exports = app;