require('dotenv').config();

const server = require('./app.js');
const connDB = require('./config/db.js');
const PORT = process.env.PORT;

const serverStarted = async() => {
    try {
        await connDB();

        server.listen(PORT, (err) => {
            if(!err){
                console.log(`Server Established on http://localhost:${PORT}`);
            }else{
                console.log(`Struggling starting server, error encountered : \n ${err}`);
            }
        })
    } catch (error) {
        console.error(`Server Startup Failed : `, error);
        process.exit(1);
    }
}

serverStarted();
