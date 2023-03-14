const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "capstone",
    host: "localhost",
    port: 5432,
    database: "postgres",

})
myasyncfunction()

// async function myasyncfunction(){
//     await client.connect()
//     console.log("Connected Sucessfully")
//     const results = await client.query("select * from users")
//     console.table(results.rows)
//     await client.end()
//     console.log("Client disconnected")
// }

async function myasyncfunction(){
    try
    {
        await client.connect()
        console.log("Connected Sucessfully")

        //const results = await client.query("select * from users")
        //console.table(results.rows)

        //Gets the value from the await function then calls for the properties {rows} and put it into a variable called 'rows' (only works for same name variables)
        const {rows} = await client.query("select * from users")
        console.table(rows)
    }
    catch (myerror)
    {
        console.log(`Something wrong happened ${myerror}`)
    }
    finally
    {
        await client.end()
        console.log("Client disconnected")
    }
}