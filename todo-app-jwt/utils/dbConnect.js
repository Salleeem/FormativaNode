import mongoose from "mongoose";

const dataBaseUrl = process.env.DATABASE_URL;

if(!dataBaseUrl){
    throw new Error("Env não Preenchido");
}

const connectMongo = async()=>{
    if(mongoose.connection.readyState > 0){
        return; //Já está conectado.
    }else{
        return await mongoose.connect(dataBaseUrl) //Conexão vai ser feita.
        .then("MongoDB Conectado")
        .catch(err=>console.error(err));
    }
}

export default connectMongo;