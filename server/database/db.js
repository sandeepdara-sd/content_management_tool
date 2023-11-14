import mongoose from "mongoose"
const Connection = async () =>{
    const URL = "mongodb+srv://sandeep_dara:kmss1234@cluster0.9oehri9.mongodb.net/?retryWrites=true&w=majority";
    try{
       await mongoose.connect(URL, {useNewUrlParser : true})
       console.log("MongoDB Connected...")
    }catch(error){
        console.log("Error while connecting with db",error);
    }
}

export default Connection;

