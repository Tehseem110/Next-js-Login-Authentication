import mongoose from "mongoose";


export async function connect (){
    try{
         mongoose.connect(process.env.MONGO_URI)
         const connection = mongoose.connection;
         connection.on('connected',()=>{
            console.log("Database connected successfully")
         })
         connection.on('error' , (err) =>{
            console.log("Getting error while connecting with database",+ err)
         })
    }catch(error){
        console.log(error.message)
    }
}