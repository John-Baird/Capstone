
//const Client = require('pg').Client
const {Client} = require('pg')

const client = new Client({

    user: "postgres",
    password: "capstone",
    host: "localhost",
    port: 5432,
    database: "postgres"
    
})

client.connect() 
.then(() => console.log("Connection Sucessful"))
//.then(() => client.query("select * from users"))
.then(() => client.query("select * from users where is_admin = $1", ["true"]))

.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())

