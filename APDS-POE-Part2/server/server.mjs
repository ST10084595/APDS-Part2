import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import https from "https";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import users from "./routes/user.mjs"; 

import records from "./routes/record.mjs";


import Jwt  from "jsonwebtoken";
import ExpressBrute from "express-brute"; 

dotenv.config();


const cert = process.env.CERT
const  key  = process.env.PRIVATE_KEY
console.log(cert + " CERT AND KEY  " + key) 


const options = {
  key: fs.readFileSync('C:/Users/16nai/ReactPrograms/APDS-POE-Part2/server/keys/private-key.pem'),          //Change Private Key Path here  
  cert: fs.readFileSync('C:/Users/16nai/ReactPrograms/APDS-POE-Part2/server/keys/certificate.pem'),             //Change Main Certificate Path here
  }



const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", users) 
app.use("/record", records);


app.use ((req,res,next)=>   
{
  res.setHeader('Access-Control-Allow-Origins','*');
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Methods','*');
  next();  
})
 

let server = https.createServer(options,app)

  app.get('/',(req,res)=>{
    console.log(res)
    res.send('HTTPS in ExpressJS YASSSSSS')
  })

//start the Express server
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});