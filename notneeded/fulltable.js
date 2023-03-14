
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
.then(() => client.query("insert into users values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", ["andrewcrate", 'andrewcrate@example.com', 'ea17c66e-b97a-11ed-afa1-0242ac120002', false, "Andrew", "Crate", "8015551358", '890 Pine St.', "2020-01-01"]))
.then(() => client.query("select * from users"))
//.then(() => client.query("select * from users where is_admin = $1", ["true"]))

.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())