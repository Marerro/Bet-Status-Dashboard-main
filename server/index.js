require('dotenv').config();
const port = process.env.PORT;
const app = require('./app');

const runServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`server running on ${port}`)
        })

    } catch (error) {
        console.log(error);
    }
}

runServer();
