import { MongoClient } from "mongodb";
import dotenv from "dotenv" 
dotenv.config(); 

const connectionString = "mongodb+srv://st10084595:kaydnnaidoo1@cluster0.uzfekyd.mongodb.net/" ; 
//console.log(connectionString);
//const connectionString = process.env.ATLAS_URI;
//console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("record"); 



  export default db;