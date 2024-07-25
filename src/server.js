const app = require('./app');
const { config } = require('./config/config');
require('./config/database');

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
